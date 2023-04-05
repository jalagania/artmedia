import "./ServicesSection.css";

import moneyIcon from "../assets/icon-money.svg";
import walletIcon from "../assets/icon-wallet.svg";
import audioIcon from "../assets/icon-audio.svg";

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <h1 className="services-heading">Services</h1>
        <div className="services-container">
          <div className="service-box">
            <div className="service-icon-wrapper">
              <img src={moneyIcon} alt="money" />
            </div>
            <p>Service Name</p>
          </div>
          <div className="service-box">
            <div className="service-icon-wrapper">
              <img src={walletIcon} alt="wallet" />
            </div>
            <p>Service Name</p>
          </div>
          <div className="service-box">
            <div className="service-icon-wrapper">
              <img src={audioIcon} alt="audio" />
            </div>
            <p>Service Name</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
