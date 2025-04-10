import { Link } from "react-router-dom";
import "./Home.css";
import logoContable from "../assets/logocontable.jpg";

const testimonials = [
  {
    stars: "⭐️⭐️⭐️⭐️⭐️",
    comment:
      "Gracias a AD Asesorías, redujimos nuestros costos fiscales en un 30% y mejoramos la rentabilidad del negocio.",
    author: "Juan Pérez, CEO de Emprendex",
  },
  {
    stars: "⭐️⭐️⭐️⭐️⭐️",
    comment:
      "Profesionales increíbles. Me ayudaron a organizar mis impuestos y a evitar multas innecesarias.",
    author: "María Gómez, Fundadora de EcoVerde",
  },
  {
    stars: "⭐️⭐️⭐️⭐️⭐️",
    comment:
      "Desde que empecé a trabajar con AD Asesorías, mi empresa ha optimizado su flujo de caja y planificación financiera.",
    author: "Carlos Ramírez, Gerente de FinTech Solutions",
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1>🚀 Potenciamos tu Negocio con Asesoría Contable Experta</h1>
          <p>
            Soluciones fiscales y financieras personalizadas para que tú solo te
            preocupes por crecer.
          </p>
          <Link to="/services" className="cta-button">
            🔍 Descubre Nuestros Servicios
          </Link>
        </div>
        <img
          src={logoContable}
          alt="Asesoría Contable"
          className="hero-image"
        />
      </header>

      <section className="benefits-section">
        <h2>💡 ¿Por qué elegirnos?</h2>
        <div className="benefits">
          <div className="benefit-item">✔ 10+ años de experiencia</div>
          <div className="benefit-item">✔ Clientes satisfechos en todo el país</div>
          <div className="benefit-item">✔ Optimización fiscal garantizada</div>
          <div className="benefit-item">✔ Servicio 100% personalizado</div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>💬 Lo que dicen nuestros clientes</h2>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <p className="stars">{item.stars}</p>
              <p className="comment">"{item.comment}"</p>
              <h4 className="author">– {item.author}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
