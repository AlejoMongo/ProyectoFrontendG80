import React, { useEffect, useState, useCallback } from 'react';
import { Navigate } from 'react-router-dom';
import swal from 'sweetalert';

const RutasProtegidas = ({ element }) => {
    const [redirect, setRedirect] = useState(false);

    // Función para verificar si el token es válido
    const isValidToken = (token) => {
        if (!token) return false;
        const tokenParts = token.split(".");
        return tokenParts.length === 3 && tokenParts.every(part => /^[A-Za-z0-9-_]+$/i.test(part));
    };

    const TokenExpirado = useCallback(() => {
        const token = localStorage.getItem("token");
        if (!token || !isValidToken(token)) {
            setRedirect(true);
            return;
        }

        try {
            const tokenD = JSON.parse(window.atob(token.split(".")[1]));
            const timeexp = tokenD.exp * 1000; 
            const actualTime = Date.now();

            if (actualTime >= timeexp) {
                swal({
                    title: 'Expiro su sesion',
                    text: "su sesion expiro vuelva a iniciar sesion",
                    icon: 'warning',
                    buttons: {
                        confirm: {
                            text: 'ok',
                            value: true,
                            visible: true,
                            className: 'btn btn-danger',
                            closeModal: true
                        }
                    }
                });
                setTimeout(() => {
                    localStorage.removeItem("token");
                    setRedirect(true);
                }, 1000);
            }
        } catch (e) {
            console.error('Error decoding token:', e);
            setRedirect(true);
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(TokenExpirado, 60000);
        return () => clearInterval(interval);
    }, [TokenExpirado]); 

    if (redirect) {
        return <Navigate to="/login" />;
    }

    return element;
};

export default RutasProtegidas;
