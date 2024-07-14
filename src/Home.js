import React from 'react';
import { Link } from 'react-router-dom';
import ContentHeader from './Componentes/ContentHeader';
import Footer from './Componentes/Footer';
import Navbar from './Componentes/Navbar';
import SidebarContainer from './Componentes/SidebarContainer';

export const Home = () => {
  return (
    <div className='wrapper'>
      <Navbar />
      <SidebarContainer />
      <div className='content-wrapper'>
        <ContentHeader
          titulo={"Tablero Alejandro Melo Zamora"}
          breadCrumb1={"Inicio"}
          breadCrumb2={"Dashboard"}
          ruta1={"/home"}
        />
        <section className='content'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-3 col-6'>
                <div className='small-box bg-info'>
                  <div className='inner'>
                    <h3>Clientes</h3>
                  </div>
                  <div className='icon'>
                    <i className='fa fa-edit' />
                  </div>
                  <Link to={"/clientes"} className='small-box-footer' aria-label="Ver clientes">
                    Ver clientes
                  </Link>
                </div>
              </div>

              <div className='col-lg-3 col-6'>
                <div className='small-box bg-info'>
                  <div className='inner'>
                    <h3>Proveedores</h3>
                  </div>
                  <div className='icon'>
                    <i className='fa fa-server' />
                  </div>
                  <Link to={"/proveedores"} className='small-box-footer' aria-label="Ver proveedores">
                    Ver proveedores
                  </Link>
                </div>
              </div>

              <div className='col-lg-3 col-6'>
                <div className='small-box bg-info'>
                  <div className='inner'>
                    <h3>Productos</h3>
                  </div>
                  <div className='icon'>
                    <i className='fas fa-box' />
                  </div>
                  <Link to={"/productos"} className='small-box-footer' aria-label="Ver productos">
                    Ver productos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      


<div className="card-body text-center">
  
  <p className="card-text font-weight-bold">
    <span className="d-inline-block text-center">
      Proyecto final Backend y Frontend con plantilla AdminLTEL y despliegue en nube DWFSV2-80
    </span>
  </p>
</div>





        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
