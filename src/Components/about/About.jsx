import "./About.css";
import InfoItem from "./InfoItem";
export default function About() {
  let infoItem = [
    {
      id: 1,
      iconClass: "fa-solid fa-location-dot",
      title: "Location",
      type: "text",
      text: "Ashmoun Monufia Egyp",
    },
    {
      id: 2,
      iconClass: "fa-solid fa-envelope",
      title: "Email",
      type: "link",
      href: "mailto:anasaymanAY@gmail.com",
      text: "anasaymanAY@gmail.com",
    },
    {
      id: 3,
      iconClass: "fa-solid fa-phone",
      title: "Phone",
      type: "link",
      href: "https://wa.me/201030435331",
      text: "+201030435331",
    },
    {
      id: 4,
      iconClass: "fa-solid fa-code",
      title: "Speciality",
      type: "text",
      text: "React · Tailwind-CSS",
    },
    {
      id: 5,
      iconClass: "fa-solid fa-language",
      title: "Languages",
      type: "text",
      text: "Arabic (Native) · English (Good)",
    },
  ];

  return (
    <>
      <section className="about" id="about">
        <div className="section-heading">
          <p>WHO I'AM</p>
          <h2>
            About <span>Me</span>
          </h2>
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
            {infoItem.map((item) => {
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
