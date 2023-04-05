import "./Header.css";
import logoRed from "../assets/logo-red.png";
import searchIcon from "../assets/icon-search.svg";
import { useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <header>
      <div className="section-container" id="home">
        <div className="logo-box">
          <img src={logoRed} alt="logo" className="logo" />
          <p className="company-name">Artmedia</p>
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li
              className={activeLink === "home" ? "active" : ""}
              onClick={() => setActiveLink("home")}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={activeLink === "services" ? "active" : ""}
              onClick={() => setActiveLink("services")}
            >
              <a href="#services">Services</a>
            </li>
            <li
              className={activeLink === "projects" ? "active" : ""}
              onClick={() => setActiveLink("projects")}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className={activeLink === "about" ? "active" : ""}
              onClick={() => setActiveLink("about")}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={activeLink === "contact" ? "active" : ""}
              onClick={() => setActiveLink("contact")}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
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
