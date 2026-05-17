import "./About.css";
import InfoItem from "./InfoItem";
import { infoItemData } from "./infoItemData";
export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="section-heading">
          <p className="section-subtitle">WHO I AM</p>
          <h2>
            About <span>Me</span>
          </h2>
          <div className="heading-line"></div>
          <p className="section-description">
            Passionate Front-End Developer creating modern and responsive web
            experiences.
          </p>
        </div>
        <div className="container">
          <div className="about-content">
            <div className="about-desc">
              <p>
                I'm <strong>Anas Ayman</strong>, a passionate and
                detail-oriented
                <strong>Front-End Developer</strong>
                specializing in React. I build modern, responsive, and
                user-friendly web applications that deliver smooth performance
                across all devices. With hands-on experience in working with
                APIs and dynamic data, I focus on writing clean, maintainable,
                and reusable code. I enjoy turning ideas into real, interactive
                products and continuously improving my skills to create better
                user experiences and scalable solutions.
              </p>
            </div>
            <div className="about-status">
              <div className="status-item">
                <span>4+</span>
                <p>Projects Done</p>
              </div>
              <div className="status-item">
                <span>1+</span>
                <p>Years Experence</p>
              </div>
              <div className="status-item">
                <span>100%</span>
                <p>Commitment</p>
              </div>
            </div>
            <div className="about-actions">
              <a href="#" className="btn primary-btn">
                Download CV
              </a>
              <a href="#contact" className="btn secondary-btn">
                Let's Talk
              </a>
            </div>
          </div>
          <div className="about-info">
            {infoItemData.map((item) => {
              return (
                <InfoItem
                  key={item.id}
                  iconClass={item.iconClass}
                  title={item.title}
                  type={item.type}
                  text={item.text}
                  href={item.href}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
