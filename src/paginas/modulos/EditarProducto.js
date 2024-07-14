import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";

const EditarProveedor = () => {
    const navigate = useNavigate();
    
    
//definimos los estados
const[empresa, setEmpresa] = useState('');
const[ciudad, setCiudad] = useState('');
const[nombreasesor, setNombreasesor] = useState('');
const[nit, setNit] = useState('');
const[correo, setCorreo] = useState('');
const[numeroContacto, setNumeroContacto] = useState('');
const[equipoComputo, setEquipoComputo] = useState('');
const[direccion, setDireccion] = useState('');
const{id}= useParams();


//creamos nuestra funcion de modificar proveedores

const modificarProveedores = async (e) =>{
  e.preventDefault();
  await APIInvoke.invokePUT(`/api/proveedores/${id}`,{
      empresa: empresa, ciudad: ciudad, nombreasesor: nombreasesor, nit: nit, correo: correo, numeroContacto: numeroContacto,
      equipoComputo: equipoComputo, direccion: direccion
  })
  navigate('/proveedores')
}
useEffect(() =>{
  getProveedor()
  // eslint-disable-next-line
},[]);

    const getProveedor = async () => {
        

      const response = await APIInvoke.invokePUT(`/api/proveedores/${id}`);
      setEmpresa(response.empresa);
      setCiudad(response.ciudad);
      setNombreasesor(response.nombreasesor);
      setNit(response.nit);
      setCorreo(response.correo);
      setNumeroContacto(response.numeroContacto);
      setEquipoComputo(response.equipoComputo);
      setDireccion(response.direccion);

    };

    return (
      <div className="wrapper">
        <Navbar />
        <SidebarContainer />
        <div className="content-wrapper">
          <ContentHeader
            titulo={"Editar Proveedor"}
            breadCrumb1={"Inicio"}
            breadCrumb2={"Proveedores"}
            ruta1={"/home"}
          />
    
          <section className="content">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Editar Proveedor</h3>
              </div>
    
              <div className="card-body">
                <form onSubmit={modificarProveedores}>
                  <div className='form-group'>
                    <label htmlFor="empresa">Nombre Empresa</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Ingrese el nombre de la empresa'
                      id='empresa'
                      name='empresa'
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
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
                      value={ciudad}
                      onChange={(e) => setCiudad(e.target.value)}
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
                      value={nombreasesor}
                      onChange={(e) => setNombreasesor(e.target.value)}
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
                      value={nit}
                      onChange={(e) => setNit(e.target.value)}
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
                      type='text'
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
                    <label htmlFor="equipoComputo">Equipo de Cómputo</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Ingrese el equipo de cómputo'
                      id='equipoComputo'
                      name='equipoComputo'
                      value={equipoComputo}
                      onChange={(e) => setEquipoComputo(e.target.value)}
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

export default EditarProveedor;