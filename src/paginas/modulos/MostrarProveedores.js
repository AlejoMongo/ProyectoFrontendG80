import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";

const MostrarProveedor = () => {
  
  const [proveedores, setProveedores] = useState([]);

  const getProveedor = async () => {
    try {
      const response = await APIInvoke.invokeGET("/api/proveedores");
      if (Array.isArray(response)) {
        setProveedores(response);
      } else {
        console.error("La respuesta no es un array:", response);
        setProveedores([]);
      }
    } catch (error) {
      console.error("Error al obtener proveedor:", error);
      setProveedores([]);
    }
  };

  useEffect(() => {
    getProveedor();
  }, []);

  const eliminarProveedor = async (idProveedor) => {
    try {
      const response = await APIInvoke.invokeDELETE(`/api/proveedores/${idProveedor}`);
      if (response.msg === "El proveedor ha sido eliminado") {
        swal({
          title: "Tarjeta Proveedor",
          text: "El proveedor fue eliminado correctamente",
          icon: "success",
          button: {
            text: "Ok",
            value: true,
            className: "btn btn-danger",
            closeModal: true
          }
        });
        getProveedor();
      } else {
        throw new Error("El proveedor no pudo ser eliminado correctamente");
      }
    } catch (error) {
      swal({
        title: "Error",
        text: "El proveedor no pudo ser eliminado correctamente",
        icon: "error",
        button: {
          text: "Ok",
          value: true,
          className: "btn btn-danger",
          closeModal: true
        }
      });
      console.error("Error al eliminar proveedor:", error);
    }
  };

  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Tarjeta Proveedor"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Dashboard"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link to={"/proveedores/agregar"} className="btn btn-block btn-primary btn-sm">
                  Crear Proveedor
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
                    <th style={{ width: '15%' }}>Nombre Empresa</th>
                    <th style={{ width: '10%' }}>Ciudad</th>
                    <th style={{ width: '15%' }}>Nombre Asesor</th>
                    <th style={{ width: '10%' }}>Nit</th>
                    <th style={{ width: '10%' }}>Correo</th>
                    <th style={{ width: '10%' }}>Numero Contacto</th>
                    <th style={{ width: '10%' }}>Equipo Computo</th>
                    <th style={{ width: '10%' }}>Direccion</th>
                    <th style={{ width: '10%' }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {proveedores.map((proveedor) => (
                    <tr key={proveedor._id}>
                      <td>{proveedor.empresa}</td>
                      <td>{proveedor.ciudad}</td>
                      <td>{proveedor.nombreasesor}</td>
                      <td>{proveedor.nit}</td>
                      <td>{proveedor.correo}</td>
                      <td>{proveedor.numeroContacto}</td>
                      <td>{proveedor.equipoComputo}</td>
                      <td>{proveedor.direccion}</td>
                      <td>
                        <Link to={`/proveedores/editar/${proveedor._id}`} className="btn btn-primary mt-2 mb-2">
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <button onClick={() => eliminarProveedor(proveedor._id)} className="btn btn-danger ml-2">
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

export default MostrarProveedor;