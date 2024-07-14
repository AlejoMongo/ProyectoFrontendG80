import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";

const EditarClientes = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Estados para los datos del cliente
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [numeroContacto, setNumeroContacto] = useState('');
  const [nit, setNit] = useState('');
  const [direccion, setDireccion] = useState('');

  useEffect(() => {
    // Obtener los datos del cliente al cargar el componente
    const getCliente = async () => {
      try {
        const response = await APIInvoke.invokeGET(`/api/clientes/${id}`);
        // Asignar los valores obtenidos a los estados correspondientes
        setNombres(response.nombres);
        setApellidos(response.apellidos);
        setCedula(response.cedula);
        setCorreo(response.correo);
        setNumeroContacto(response.numeroContacto);
        setNit(response.nit);
        setDireccion(response.direccion);
      } catch (error) {
        console.error("Error al obtener datos del cliente:", error);
        // Manejar el error según sea necesario
      }
    };

    getCliente(); // Llamar a la función para obtener los datos del cliente
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Dependencia para ejecutar useEffect cuando cambie el ID

  const modificarClientes = async (e) => {
    e.preventDefault();
    try {
      await APIInvoke.invokePUT(`/api/clientes/${id}`, {
        nombres,
        apellidos,
        cedula,
        correo,
        numeroContacto,
        nit,
        direccion
      });
      navigate('/clientes'); // Redirigir a la página de clientes después de la actualización exitosa
    } catch (error) {
      console.error("Error al modificar cliente:", error);
      // Manejar el error según sea necesario
    }
  };

  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Editar Clientes"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Clientes"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Editar Clientes</h3>
            </div>

            <div className="card-body">
              <form onSubmit={modificarClientes}>

                <div className='form-group'>
                  <label htmlFor="nombres">Nombres</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese su nombres'
                    id='nombres'
                    name='nombres'
                    value={nombres}
                    onChange={(e) => setNombres(e.target.value)}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="apellidos">Apellidos</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese sus Apellidos'
                    id='apellidos'
                    name='apellidos'
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="cedula">Cédula</label>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Ingrese su cédula'
                    id='cedula'
                    name='cedula'
                    value={cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="correo">Correo</label>
                  <input
                    type='email'
                    className='form-control'
                    placeholder='Ingrese el correo'
                    id='correo'
                    name='correo'
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="numeroContacto">Número de Contacto</label>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Ingrese el número de contacto'
                    id='numeroContacto'
                    name='numeroContacto'
                    value={numeroContacto}
                    onChange={(e) => setNumeroContacto(e.target.value)}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="nit">NIT</label>
                  <input
                    type='number'
                    className='form-control'
                    placeholder='Ingrese el NIT'
                    id='nit'
                    name='nit'
                    value={nit}
                    onChange={(e) => setNit(e.target.value)}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="direccion">Dirección</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese la dirección'
                    id='direccion'
                    name='direccion'
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                  />
                </div>

                <button type='submit' className='btn btn-primary'>Guardar</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EditarClientes;
