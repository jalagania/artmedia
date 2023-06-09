import "./AboutSection.css";
import aboutImg from "../assets/image-robot.png";
import ButtonSeeMore from "./ButtonSeeMore";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-image-box">
          <img src={aboutImg} alt="robot" />
        </div>
        <div className="about-text-box">
          <h1>About Company</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ButtonSeeMore class="about" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
