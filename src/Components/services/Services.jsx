import "./Services.css";
import { services } from "./servicesData";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading">
        <p className="section-subtitle">WHAT I PROVIDE</p>
        <h2>
          Premium <span>Services</span>
        </h2>
        <div className="heading-line"></div>
      </div>
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => {
            return (
              <article className="service-card" key={index}>
                <div className="service-glow"></div>
                <div className="service-top">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <span className="service-number">0{index + 1}</span>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}