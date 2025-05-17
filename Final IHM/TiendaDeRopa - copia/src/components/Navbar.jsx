import React from "react";
import { Link } from "react-router-dom";
import "./../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">TiendaRopa</h2>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/CompApi">IA</Link></li>
        <li><Link to="/team">Equipo</Link></li>
        <li><Link to="/history">Historia</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};
 
export default Navbar;
