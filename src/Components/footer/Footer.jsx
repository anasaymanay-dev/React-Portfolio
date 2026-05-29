import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-cta">
          <div className="footer-cta-icon">
            <i className="fa-regular fa-paper-plane"></i>
          </div>
          <div className="footer-cta-text">
            <h2>
              Let’s build something amazing <span>together!</span>
            </h2>
            <p>
              I’m always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
          </div>
          <a href="mailto:anasaymanAY@gmail.com" className="footer-cta-btn">
            Get In Touch
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <div className="footer-logo-icon">A</div>
              <h3>
                Anas <span>Developer</span>
              </h3>
            </div>
            <p>
              Frontend Developer building modern, responsive, and user-friendly
              web applications.
            </p>
            <div className="footer-socials">
              <a href="https://github.com/anasaymanay-dev" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/anas-ayman-4a7728399/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.instagram.com/a_n_a_s_a_y_m_a_n_/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/anas.anasayman.3"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#hero">
                  Home
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="#about">
                  About
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="#skills">
                  Skills
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="#projects">
                  Projects
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </li>
              <li>
                <a href="#services">
                  Services
                  <i className="fa-solid fa-chevron-right"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-services">
              <li>
                <i className="fa-solid fa-code"></i>
                Web Development
              </li>
              <li>
                <i className="fa-solid fa-palette"></i>
                UI/UX Design
              </li>
              <li>
                <i className="fa-solid fa-mobile-screen"></i>
                Responsive Design
              </li>
              <li>
                <i className="fa-solid fa-bolt"></i>
                Performance Optimization
              </li>
              <li>
                <i className="fa-solid fa-screwdriver-wrench"></i>
                Maintenance & Support
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>
                <i className="fa-regular fa-envelope"></i>
                anasaymanAY@gmail.com
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                +20 103 043 5331
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>
                Cairo, Egypt
              </li>
              <li>
                <i className="fa-solid fa-globe"></i>
                anas-dev.vercel.app
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2026 <span>Anas Developer</span>. All rights reserved.
          </p>
          <p className="made-love">
            <i className="fa-regular fa-heart"></i>
            Made with love and lots of coffee
            <i className="fa-solid fa-mug-hot"></i>
          </p>
          <a href="#hero" className="back-top">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}