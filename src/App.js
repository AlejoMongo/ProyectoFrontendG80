import React, { Fragment } from 'react';
import './App.css';
import Home from "./Home";
import Registro from "./paginas/auth/Registro";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from "./paginas/auth/Login";

import MostrarClientes from './paginas/modulos/MostrarClientes';
import AgregarClientes from './paginas/modulos/AgregarClientes';
import EditarClientes from './paginas/modulos/EditarClientes'; 

import MostrarProveedores from './paginas/modulos/MostrarProveedores';
import AgregarProveedor from './paginas/modulos/AgregarProveedor';
import EditarProveedor from './paginas/modulos/EditarProveedores';

import MostrarProductos from './paginas/modulos/MostrarProductos';
import AgregarProductos from './paginas/modulos/AgregarProductos';
import EditarProductos from './paginas/modulos/EditarProducto';
import RutasProtegidas from './paginas/auth/RutasProtegidas';


import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <div className="App">
      <Fragment>
        <BrowserRouter>
          <Routes>
          <Route path='/' element= {<Navigate to="/login"/>}/>
          <Route path='/login' exact element= {<Login/>}/>       
          <Route path='/registro' exact  element={<Registro />} />

            <Route path='/home' exact element={<RutasProtegidas element = {<Home />}/>}></Route>

            <Route path='/clientes' exact element= {<RutasProtegidas element ={<MostrarClientes />}/>}></Route>
            <Route path='/clientes/agregar' exact element= {<RutasProtegidas element ={<AgregarClientes />}/>}></Route>
            <Route path='/cliente/editar/:id' exact element={<RutasProtegidas element ={<EditarClientes />}/>}></Route>

            <Route path='/proveedores' exact element= {<RutasProtegidas element ={<MostrarProveedores />}/>}></Route>            
            <Route path='/proveedores/agregar' exact element= {<RutasProtegidas element ={<AgregarProveedor />}/>}></Route>
            <Route path='/proveedores/editar/:id' exact element= {<RutasProtegidas element ={<EditarProveedor />}/>}></Route>

            <Route path='/productos/agregar' exact element= {<RutasProtegidas element ={<AgregarProductos />}/>}></Route>
            <Route path='/productos' exact element= {<RutasProtegidas element ={<MostrarProductos />}/>}></Route>
            <Route path='/productos/editar/:id' exact element= {<RutasProtegidas element ={<EditarProductos />}/>}></Route>
         
          </Routes>
        </BrowserRouter>
      </Fragment>
    </div>
  );
}

export default App;
