import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Importa las imágenes correctamente desde src/assets
import logo12 from "../assets/logo12.jpg";
import logo13 from "../assets/logo13.jpg";
import logo14 from "../assets/logo14.jpg";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container container mt-5">
      {/* Carrusel */}
      <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo12} className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={logo13} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={logo14} className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Información de contacto */}
      <div className="contact-info text-center mb-5">
        <h1 className="mb-4">📞 Contáctanos</h1>
        <p><strong>📌 Dirección:</strong> Calle 83 # 58 19, Itagüí, Antioquia</p>
        <p><strong>📞 Teléfonos:</strong> +57 3042174177 - +57 3053084389</p>
        <p><strong>✉ Email:</strong> contacto@ADFormalizaciónTributariaycontable.com</p>
      </div>

      {/* Mapa */}
      <div className="map-container mb-5">
        <h2 className="text-center mb-3">🗺 Cómo llegar</h2>
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.876520166699!2d-75.61188538573657!3d6.170041795537196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46824b3fdf5ec7%3A0xa1ee6b5a7fa7b9fa!2sCalle%2083%20%23%2058-19%2C%20Itag%C3%BC%C3%AD%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1712685748850!5m2!1ses!2sco"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
