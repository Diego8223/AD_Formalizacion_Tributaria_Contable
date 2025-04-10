import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/logo512.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsAuthenticated(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    navigate("/"); // o la ruta que desees
  };

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        {/* Logo y marca */}
        <div className="logo-container">
          <img src={logo} alt="Logo DS Asesorías" className="logo" />
          <h1 className="brand-name">
            AD Formalización Tributaria y Contable
          </h1>
        </div>

        {/* Menú escritorio */}
        <div className="menu-links">
          <Link to="/" className="menu-link">Inicio</Link>
          <Link to="/aboutUs" className="menu-link">Quienes Somos</Link>
          <Link to="/services" className="menu-link">Servicios</Link>
          <Link to="/contact" className="menu-link">Contacto</Link>
          {isAuthenticated && (
            <span
              className="menu-link text-danger fw-semibold"
              onClick={handleLogout}
              role="button"
            >
              Cerrar Sesión
            </span>
          )}
        </div>

        {/* Botón hamburguesa */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>
          Inicio
        </Link>
        <Link to="/aboutUs" className="mobile-link" onClick={() => setIsOpen(false)}>
          Quienes Somos
        </Link>
        <Link to="/services" className="mobile-link" onClick={() => setIsOpen(false)}>
          Servicios
        </Link>
        <Link to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>
          Contacto
        </Link>
        {isAuthenticated && (
          <span
            className="mobile-link text-danger fw-semibold"
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
          >
            Cerrar Sesión
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
