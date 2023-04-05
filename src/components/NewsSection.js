import "./NewsSection.css";
import Slide from "./Slide";
import { sliderData } from "../sliderData";
import arrowLeft from "../assets/icon-long-arrow-left.svg";
import arrowRight from "../assets/icon-long-arrow-right.svg";

function NewsSection() {
  return (
    <section className="news-section">
      <div className="section-container">
        <div className="news-heading-box">
          <h1>News</h1>
          <div className="slider-arrows">
            <button>
              <img src={arrowLeft} alt="left arrow" />
            </button>
            <button>
              <img src={arrowRight} alt="right arrow" />
            </button>
          </div>
        </div>
        <div className="slider-box">
          {sliderData.map((slide, index) => (
            <Slide key={index} slideInfo={slide} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
