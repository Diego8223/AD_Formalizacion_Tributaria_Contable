import {
  Briefcase,
  CheckCircle,
  BarChart,
  Shield,
  FileText,
  Users,
  Sparkles
} from "lucide-react";
import "./Services.css"; // Importamos tus estilos personalizados

const services = [
  {
    icon: <Briefcase size={50} />,
    title: "Asesoría Contable",
    description: "Optimiza tu contabilidad con expertos en normativas y estrategias fiscales.",
  },
  {
    icon: <CheckCircle size={50} />,
    title: "Gestión Tributaria",
    description: "Cumple con todas tus obligaciones fiscales sin preocupaciones.",
  },
  {
    icon: <BarChart size={50} />,
    title: "Planificación Financiera",
    description: "Te ayudamos a tomar decisiones inteligentes para hacer crecer tu negocio.",
  },
  {
    icon: <Shield size={50} />,
    title: "Auditoría y Control",
    description: "Identifica riesgos y mejora la gestión financiera con auditorías profesionales.",
  },
  {
    icon: <FileText size={50} />,
    title: "Informes Financieros",
    description: "Creamos informes detallados para una mejor toma de decisiones.",
  },
  {
    icon: <Users size={50} />,
    title: "Consultoría Empresarial",
    description: "Te asesoramos en la gestión eficiente de tu negocio.",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">
          <Sparkles size={32} className="inline-block mr-2 text-yellow-400 animate-pulse" />
          Nuestros Servicios
        </h2>
        <p className="services-subtitle">
          Brindamos soluciones efectivas para tu empresa.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-box service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
