import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import ContentHeader from "../../Componentes/ContentHeader";
import Footer from "../../Componentes/Footer";
import Navbar from "../../Componentes/Navbar";
import SidebarContainer from "../../Componentes/SidebarContainer";
import APIInvoke from "../../configuracion/APIInvoke";
import swal from "sweetalert";
//import { Navigate } from "react-router-dom";


const AgregarProductos = () => {
  const [producto, setProducto] = useState({
    equipo: "",
    procesador: "",
    memoriaRam: "",
    tamanoDisco: "",
    tipoPantalla: "",
    garantia: "",
    valor: ""
  });

  useEffect(() => {
    document.getElementById("equipo").focus();
  }, []);

  const onChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  const CrearProducto = async () => {
    const data = {
      equipo: producto.equipo,
      procesador: producto.procesador,
      memoriaRam: producto.memoriaRam,
      tamanoDisco: producto.tamanoDisco,
      tipoPantalla: producto.tipoPantalla,
      garantia: producto.garantia,
      valor: producto.valor
    };

    try {
      const response = await APIInvoke.invokePOST("/api/productos", data);
      const idProducto = response.data._id;

      if (!idProducto) {
        throw new Error("Hubo un error al agregar el producto");
      }

      swal({
        title: 'Información',
        text: 'El cliente fue creado con éxito',
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

      Navigate("/productos");

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
    CrearProducto();
  };

  return (
    <div className="wrapper">
      <Navbar />
      <SidebarContainer />
      <div className="content-wrapper">
        <ContentHeader
          titulo={"Tarjeta de Productos"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Productos"}
          ruta1={"/home"}
        />

        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <Link to={"/productos/agregar"} className="btn btn-block btn-primary btn-sm">Agregar Producto</Link>
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
              <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <label htmlFor="equipo">Equipo</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese el nombre del equipo'
                    id='equipo'
                    name='equipo'
                    value={producto.equipo}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="procesador">Procesador</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese el procesador'
                    id='procesador'
                    name='procesador'
                    value={producto.procesador}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="memoriaRam">Memoria RAM</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese la memoria RAM'
                    id='memoriaRam'
                    name='memoriaRam'
                    value={producto.memoriaRam}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="tamanoDisco">Tamaño del Disco</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese el tamaño del disco'
                    id='tamanoDisco'
                    name='tamanoDisco'
                    value={producto.tamanoDisco}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="tipoPantalla">Tipo de Pantalla</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese el tipo de pantalla'
                    id='tipoPantalla'
                    name='tipoPantalla'
                    value={producto.tipoPantalla}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="garantia">Garantía</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese la garantía'
                    id='garantia'
                    name='garantia'
                    value={producto.garantia}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="valor">Valor</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Ingrese el valor'
                    id='valor'
                    name='valor'
                    value={producto.valor}
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

export default AgregarProductos;
