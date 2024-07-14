import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const AgregarProveedor = () => {
  const navigate = useNavigate();

  const [proveedor, setProveedor] = useState({
    empresa: "",
    ciudad: "",
    nombreasesor: "",
    nit: "",
    correo: "",
    numeroContacto: "",
    equipoComputo: "",
    direccion: ""
  });

  useEffect(() => {
    document.getElementById("empresa").focus();
  }, []);

  const onChange = (e) => {
    setProveedor({
      ...proveedor,
      [e.target.name]: e.target.value
    });
  };

  const CrearProveedor = async () => {
    const data = {
      empresa: proveedor.empresa,
      ciudad: proveedor.ciudad,
      nombreasesor: proveedor.nombreasesor,
      nit: proveedor.nit,
      correo: proveedor.correo,
      numeroContacto: proveedor.numeroContacto,
      equipoComputo: proveedor.equipoComputo,
      direccion: proveedor.direccion
    };

    try {
      const response = await APIInvoke.invokePOST("/api/proveedores", data);
      const idProveedor = response._id;

      if (!idProveedor) {
        throw new Error("Hubo un error al agregar un proveedor");
      }

      swal({
        title: 'Información',
        text: 'El proveedor fue creado con éxito',
        icon: 'success',
        buttons: {
          confirm: {
            text: 'OK',
            value: true,
            visible: true,
            className: 'btn btn-primary',
            closeModal: true
          }
        }
      });
      navigate("/proveedores");

    } catch (error) {
      swal({
        title: 'Error',
        text: error.message,
        icon: 'error',
        buttons: {
          confirm: {
            text: 'OK',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    CrearProveedor();
  };

  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Agregar Proveedor"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Proveedores"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Crear Proveedor</h3>
            </div>

            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <label htmlFor="empresa">Nombre Empresa</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese el nombre de la empresa'
                    id='empresa'
                    name='empresa'
                    value={proveedor.empresa}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="ciudad">Ciudad</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese la ciudad'
                    id='ciudad'
                    name='ciudad'
                    value={proveedor.ciudad}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="nombreasesor">Nombre Asesor</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese el nombre del asesor'
                    id='nombreasesor'
                    name='nombreasesor'
                    value={proveedor.nombreasesor}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="nit">NIT</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese el NIT'
                    id='nit'
                    name='nit'
                    value={proveedor.nit}
                    onChange={onChange}
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
                    value={proveedor.correo}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="numeroContacto">Número de Contacto</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese el número de contacto'
                    id='numeroContacto'
                    name='numeroContacto'
                    value={proveedor.numeroContacto}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="equipoComputo">Equipo de Cómputo</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese el equipo de cómputo'
                    id='equipoComputo'
                    name='equipoComputo'
                    value={proveedor.equipoComputo}
                    onChange={onChange}
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
                    value={proveedor.direccion}
                    onChange={onChange}
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

export default AgregarProveedor;