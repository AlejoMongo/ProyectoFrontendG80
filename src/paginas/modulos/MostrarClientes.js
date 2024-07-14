import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarClientes = () => {
  const [cliente, setClientes] = useState([]);

  const getClientes = async () => {
    try {
      const response = await APIInvoke.invokeGET("/api/clientes");
      setClientes(response.clientes);        
    } catch (error) {
      console.error("Error al obtener cliente:", error);
     }
  };

  useEffect(() => {
    getClientes();
  }, []);

  const eliminarClientes = async (idCliente) => {
    try {
      const response = await APIInvoke.invokeDELETE(`/api/clientes/${idCliente}`);
      if (response.msg === "El cliente ha sido eliminado") {
          swal({
          title: "Tarjeta Clientes",
          text: "El cliente fue eliminado correctamente",
          icon: "success",
          button: {
            text: "Ok",
            value: true,
            className: "btn btn-danger",
            closeModal: true
          }
        });
        getClientes();
      } else {
        throw new Error("El cliente no pudo ser eliminado correctamente");
      }
    } catch (error) {
      swal({
        title: "Error",
        text: "El cliente no pudo ser eliminado correctamente",
        icon: "error",
        button: {
          text: "Ok",
          value: true,
          className: "btn btn-danger",
          closeModal: true
        }
      });
      console.error("Error al eliminar clientes:", error);
    }
  };

  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Tarjeta Clientes"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Dashboard"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link to={"/clientes/agregar"} className="btn btn-block btn-primary btn-sm">
                  Crear Clientes
                </Link>
              </h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus"></i>
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>

            <div className="card-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th style={{ width: '20%' }}>Nombres</th>
                    <th style={{ width: '10%' }}>Apellidos</th>
                    <th style={{ width: '15%' }}>Cedula</th>
                    <th style={{ width: '10%' }}>Correo</th>
                    <th style={{ width: '10%' }}>Numero Contacto</th>
                    <th style={{ width: '10%' }}>Nit</th>
                    <th style={{ width: '15%' }}>Direccion</th>                    
                    <th style={{ width: '10%' }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {cliente.map((cliente) => (
                    <tr key={cliente._id}>
                      <td>{cliente.nombres}</td>
                      <td>{cliente.apellidos}</td>
                      <td>{cliente.cedula}</td>
                      <td>{cliente.correo}</td>
                      <td>{cliente.numeroContacto}</td>
                      <td>{cliente.nit}</td>                      
                      <td>{cliente.direccion}</td>
                      <td>
                        <Link to={`/cliente/editar/${cliente._id}`} className="btn btn-primary mt-2 mb-2">
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <button onClick={() => eliminarClientes(cliente._id)} className="btn btn-danger ml-2">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MostrarClientes;