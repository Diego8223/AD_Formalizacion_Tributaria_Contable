import PropTypes from "prop-types";
import "./Button.css";


const Button = ({ text, onClick, type = "button", variant = "primary" }) => {
  // Estilos para diferentes variantes de botón
  const baseStyles = "px-6 py-2 rounded-lg font-semibold transition duration-300";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-green-600 text-white hover:bg-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {text}
    </button>
  );
};

// Validación de propiedades
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "success"]),
};

// Valor por defecto si no se especifica el evento onClick
Button.defaultProps = {
  onClick: () => {},
};

export default Button;
