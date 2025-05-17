import React from "react";
import { Link } from "react-router-dom";
import "../styles/team.css";

const Team = () => {
  return (
    <div className="team-page">

      <h2 className="titulo">Nuestro Equipo</h2>
      <div className="team-container">
        <div className="team-card">
          <h3>Fundador: Samuel Betancourt Caicedop</h3>
          <p>
            Soy el creador de <strong>StorePix</strong>, una tienda de ropa que busca ofrecer prendas de calidad  
            con diseños modernos y exclusivos. La moda siempre ha sido mi pasión y quería crear una marca  
            que reflejara estilo y autenticidad. 
          </p>
          
          <p><strong>Edad:</strong> 20 años</p>
          <p><strong>Visión:</strong> Convertir StorePix en una referencia de moda y estilo para todos.</p>
        </div>

        <div className="team-card">
          <h3>Cómo Surgió StorePix</h3>
          <p>
            La idea nació cuando me di cuenta de que muchas tiendas de ropa no ofrecían  
            productos que combinaran calidad, comodidad y tendencias actuales.  
            Quería crear un espacio donde las personas pudieran encontrar prendas únicas y versátiles.
          </p>
          
        </div>
      </div>

      <div className="contact-info">
        <p><strong>Teléfono del fundador:</strong> +57 304 671 9994</p>
      </div>
    </div>
  );
};

export default Team;
