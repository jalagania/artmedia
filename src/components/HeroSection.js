import "./HeroSection.css";
import ButtonSeeMore from "./ButtonSeeMore";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-section-wrapper">
        <div className="section-container">
          <div className="hero-text-box">
            <h1>
              We build <br /> elegant websites
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in
              corrupti perferendis rerum at laboriosam illum nihil! Vero
              pariatur, quaerat ea temporibus tenetur laboriosam. Quidem ipsum
              fugit officia ratione libero.
            </p>
            <ButtonSeeMore class="hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
