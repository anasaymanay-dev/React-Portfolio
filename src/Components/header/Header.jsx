import { useEffect, useState } from "react";
import "./Header.css";
export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleShowList() {
    setShowList((prev) => !prev);
  }

  function handleLinkClick() {
    setShowList(false);
  }

  return (
    <header className={`header ${scroll ? "header-scroll" : ""}`}>
      <div className="container">
        <div className="logo">A</div>
        <button className="toggle-icon" onClick={handleShowList}>
          <i className={`fa-solid ${showList ? "fa-xmark" : "fa-bars"}`}></i>
        </button>
        <nav className={`nav-list ${showList ? "open" : ""}`}>
          <ul>
            <li className="nav-item">
              <a href="#hero" className="active" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" onClick={handleLinkClick}>
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" onClick={handleLinkClick}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" onClick={handleLinkClick}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" onClick={handleLinkClick}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-btn btn"
                href="#contact"
                onClick={handleLinkClick}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
