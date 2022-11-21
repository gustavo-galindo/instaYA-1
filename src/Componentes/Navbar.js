import React from 'react'
import { Link} from "react-router-dom";
import Home from './Home';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-instaya">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand " href="#">INSTA-YA 2.0</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    <li className="nav-item">
        <a className="nav-link" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Nosotros <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Cerrar seccion</a>
      </li>
      
    </ul>
    
  </div>
</nav>

  )
}

export default Navbar