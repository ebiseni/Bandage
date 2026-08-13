import React from "react";
import "../styles/ServicesSection.css";

// Import local service icons from assets
import easyWinsIcon from "../assets/icon-easy-wins.svg";
import concreteIcon from "../assets/icon-concrete.svg";
import hackGrowthIcon from "../assets/icon-hack-growth.svg";

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: easyWinsIcon,
      title: "Easy Wins",
      description:
        "The best products with clinical grade quality and safety standards.",
    },
    {
      id: 2,
      icon: concreteIcon,
      title: "Concrete",
      description:
        "Definite cumulative advantage for your business needs and workflow.",
    },
    {
      id: 3,
      icon: hackGrowthIcon,
      title: "Hack Growth",
      description:
        "Overcoming any hurdle requires deliberate and data-driven scaling.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h4 className="services-subtitle">Featured Products</h4>
          <h2 className="services-title">THE BEST SERVICES</h2>
          <p className="services-desc">
            Problems trying to resolve the conflict between
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-container">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-icon"
                />
              </div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
