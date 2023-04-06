import "./Header.css";
import logoRed from "../assets/logo-red.png";
import iconMenu from "../assets/icon-hamburger.svg";
import searchIcon from "../assets/icon-search.svg";
import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [showMenu, setShowMenu] = useState(false);

  document.body.style.overflow = showMenu ? "hidden" : "";

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  function handleLink(event) {
    setActiveLink(event.target.textContent.toLowerCase());
    setShowMenu(false);
  }

  return (
    <header>
      <div className="section-container" id="home">
        <button className="btn-menu" onClick={handleMenu}>
          <img src={iconMenu} alt="menu" />
        </button>
        <div className="logo-box">
          <img src={logoRed} alt="logo" className="logo" />
          <p className="company-name">Artmedia</p>
        </div>
        <nav className={`navigation ${showMenu ? "slide-left" : ""}`}>
          <ul className="nav-links">
            <li
              className={activeLink === "home" ? "active" : ""}
              onClick={handleLink}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={activeLink === "services" ? "active" : ""}
              onClick={handleLink}
            >
              <a href="#services">Services</a>
            </li>
            <li
              className={activeLink === "projects" ? "active" : ""}
              onClick={handleLink}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className={activeLink === "about" ? "active" : ""}
              onClick={handleLink}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={activeLink === "contact" ? "active" : ""}
              onClick={handleLink}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
          {showMenu && (
            <div
              className="menu-modal-bg"
              onClick={() => setShowMenu(false)}
            ></div>
          )}
        </nav>
        <form className="search-box" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search keyword ..." />
          <button className="btn-search">
            <img src={searchIcon} alt="search" />
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
