import "./Footer.css";
import logoWhite from "../assets/logo-white.png";
import iconFacebook from "../assets/icon-facebook.svg";
import iconInstagram from "../assets/icon-instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="section-container" id="contact">
        <div className="footer-logo-box">
          <div className="footer-logo-wrapper">
            <img src={logoWhite} alt="logo" />
            <p>Artmedia</p>
          </div>
          <p className="copyright-text">© 2023 All Rights Reserved</p>
        </div>
        <nav className="footer-navigation">
          <ul className="footer-nav-links">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="social-media-links">
            <img src={iconInstagram} alt="facebook" />
            <img src={iconFacebook} alt="facebook" />
          </div>
        </nav>
        <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <div className="footer-textarea-box">
            <textarea placeholder="Text"></textarea>
            <button>Send</button>
          </div>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
