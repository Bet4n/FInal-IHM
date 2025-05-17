import React from "react";
import { Link } from "react-router-dom";
import "../styles/history.css";

const Navbar = () => (
  <header className="navbar">
  
  </header>
);

const History = () => {
  return (
    <div className="history-page">
   
      
      <section className="hero">
        <h2>La historia detrás de StorePix</h2>
        <p>Un viaje de creatividad y estilo, desde 2010 marcando tendencia en la moda.</p>
      </section>

      <section className="history-content">
        <div className="history-text">
          <h3>Cómo empezamos</h3>
          <p>
            StorePix nació con la misión de ofrecer ropa única y de alta calidad. 
            Desde un pequeño taller hasta una marca reconocida, nuestro compromiso con la moda sigue creciendo.
          </p>
        </div>
        <img src="/imagenes/history.jpg" alt="Historia de StorePix" className="history-image" />
      </section>

      <section className="mission-vision">
        <div className="card">
          <img src="/imagenes/mision.jpg" alt="Misión" />
          <h3>Nuestra Misión</h3>
          <p>
            Proveer prendas exclusivas y de alta calidad, asegurando la mejor experiencia para nuestros clientes.
          </p>
        </div>

        <div className="card">
          <img src="/imagenes/vision.jpg" alt="Visión" />
          <h3>Nuestra Visión</h3>
          <p>
            Convertirnos en un referente global en la moda, fusionando creatividad y tendencias innovadoras.
          </p>
        </div>
      </section>
    </div>
  );
};

export default History;
