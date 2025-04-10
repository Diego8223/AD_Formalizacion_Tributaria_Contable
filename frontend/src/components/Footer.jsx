import { Facebook, Instagram, Mail, Phone, Music } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Información de la empresa */}
        <div className="footer-info">
          <h2>AD Formalización Tributaria y Contable</h2>
          <p>Soluciones contables para tu negocio</p>
        </div>

        {/* Redes sociales con animaciones */}
        <div className="footer-icons">
          <a href="https://www.facebook.com/" className="icon facebook">
            <Facebook size={24} />
          </a>
          <a href="https://www.instagram.com/" className="icon instagram">
            <Instagram size={24} />
          </a>
          <a href="https://www.tiktok.com/es/" className="icon tiktok">
            <Music size={24} />
          </a>
          <a href="mailto:contacto@ADFormalizaciónTributariaycontable.com" className="icon mail">
            <Mail size={24} />
          </a>
          <a href="https://web.whatsapp.com/" className="icon phone">
            <Phone size={24} />
          </a>
        </div>
      </div>

      {/* Derechos reservados */}
      <p className="footer-text">&copy; {new Date().getFullYear()} AD Formalización Tributaria y Contable - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
