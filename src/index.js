import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login  from './Componentes/Login';
import Home from './Componentes/Home';

import AddOrden from './Componentes/AddOrden';
import Edit from './Componentes/Edit';
import Registro from './Componentes/Registro';
import Ver from './Componentes/Ver';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route  path='/Add' element={<AddOrden/>}/>
        <Route  path='/Edit' element={<Edit/>}/>
        <Route  path='/Home' element={<Home/>}/>
        <Route  path='/Registro' element={<Registro/>}/>
        <Route  path='/Ver' element={<Ver/>}/>
      </Routes>
    </Router>
    
  </React.StrictMode>
);


