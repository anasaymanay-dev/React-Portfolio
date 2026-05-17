import "./Hero.css";
import heroImage from "../../assets/hero-image.jpeg";
export default function Hero() {
  return (
    <>
      <section className="hero" id={"hero"}>
        <div className="container">
          <div className="hero-content">
            <div className="hero-available">Available for work</div>
            <div className="hero-title">
              <p>Hello I'm</p>
              <h1>
                Anas <span>Ayman</span>
              </h1>
              <p>Front-End Engineer</p>
            </div>
            <div className="hero-desc">
              Passionate and detail-oriented Front-End Developer specializing in
              React & TypeScript, building responsive, scalable web applications
              with seamless user experiences.
            </div>
            <div className="hero-actions">
              <a href="#projects" className="btn primary-btn">
                View My Work
              </a>
              <a href="#contact" className="btn secondary-btn">
                Get In Touch
              </a>
            </div>
            <div className="social-icons">
              <a
                target="_blank"
                href="https://www.instagram.com/a_n_a_s_a_y_m_a_n_/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/anas.anasayman.3"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anas-ayman-4a7728399/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/anasaymanay-dev" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://wa.me/201030435331" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:anasaymanAY@gmail.com">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Anas Ayman portrait" />
          </div>
        </div>
        <a href="#about" className="scroll-down">
          <i className="fa-solid fa-angles-down"></i>
        </a>
      </section>
    </>
  );
}
