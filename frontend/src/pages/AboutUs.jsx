import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1 className="about-title">💼 Quiénes Somos</h1>
        <p className="about-text">
          En <strong>AD Asesorías</strong>, transformamos la gestión contable y financiera de empresas y emprendedores.
          Nuestro equipo de expertos te brinda soluciones efectivas para que tomes las mejores decisiones estratégicas.
        </p>
        <p className="about-text">
          Con más de <strong>10 años de experiencia</strong>, ayudamos a nuestros clientes a optimizar recursos,
          cumplir con normativas fiscales y asegurar el éxito financiero.
        </p>
      </div>

      {/* Sección de Valores */}
      <div className="values-container">
        <h2 className="values-title">🌟 Nuestros Valores</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>🔎 Transparencia</h3>
            <p>Nos comprometemos a brindarte información clara y honesta en todo momento.</p>
          </div>
          <div className="value-card">
            <h3>⚖ Responsabilidad</h3>
            <p>Trabajamos con ética y compromiso para proteger tu estabilidad financiera.</p>
          </div>
          <div className="value-card">
            <h3>🚀 Innovación</h3>
            <p>Aplicamos tecnología y metodologías modernas para mejorar tu negocio.</p>
          </div>
          <div className="value-card">
            <h3>💡 Compromiso</h3>
            <p>Nuestro éxito se mide por los resultados positivos que logramos para ti.</p>
          </div>
          <div className="value-card">
            <h3>🤝 Cercanía</h3>
            <p>Nos involucramos con cada cliente como si su empresa fuera nuestra.</p>
          </div>
          <div className="value-card">
            <h3>📈 Excelencia</h3>
            <p>Buscamos siempre superar tus expectativas con calidad y profesionalismo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
