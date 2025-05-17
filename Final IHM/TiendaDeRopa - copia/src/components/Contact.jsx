import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import "../styles/contact.css";



const Contact = () => {
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSentMessage(true);
    setTimeout(() => setSentMessage(false), 3000);
    setMessage("");
  };

  return (
    <div className="contact-page">
     
      <section className="contact-header">
        <h2>¡Hablemos!</h2>
        <p>Si tienes dudas, sugerencias o necesitas nustra ayuda, contáctanos.</p>
      </section>
      
      <section className="contact-methods">
        <div className="contact-options">
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="contact-box whatsapp">
            <FaWhatsapp className="icon" />
            <p>WhatsApp</p>
          </a>
          <a href="https://www.instagram.com/storepix" target="_blank" rel="noopener noreferrer" className="contact-box instagram">
            <FaInstagram className="icon" />
            <p>Instagram</p>
          </a>
          <a href="https://www.facebook.com/storepix" target="_blank" rel="noopener noreferrer" className="contact-box facebook">
            <FaFacebook className="icon" />
            <p>Facebook</p>
          </a>
        </div>
      </section>
      
      <section className="contact-form">
        <h3>Déjanos tu mensaje</h3>
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
        {sentMessage && <p className="success-message">✅ Tu mensaje ha sido enviado.</p>}
      </section>
    </div>
  );
};

export default Contact;
