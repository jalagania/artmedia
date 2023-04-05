import "./NewsSection.css";
import Slide from "./Slide";
import { sliderData } from "../sliderData";
import arrowLeft from "../assets/icon-long-arrow-left.svg";
import arrowRight from "../assets/icon-long-arrow-right.svg";
import { useRef, useState } from "react";

function NewsSection() {
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);

  const slider = useRef();

  function handleLeftArrow() {
    const slide = slider.current.firstElementChild;
    slider.current.scrollLeft -= slide.clientWidth * 2;
  }

  function handleRightArrow() {
    const slide = slider.current.firstElementChild;
    slider.current.scrollLeft += slide.clientWidth * 2;
  }

  function handleScroll(event) {
    if (event.target.scrollLeft > 0) {
      setLeftDisabled(false);
    } else {
      setLeftDisabled(true);
    }

    if (event.target.scrollLeft >= event.target.clientWidth) {
      setRightDisabled(true);
    } else {
      setRightDisabled(false);
    }
  }

  return (
    <section className="news-section" id="projects">
      <div className="section-container">
        <div className="news-heading-box">
          <h1>News</h1>
          <div className="slider-arrows">
            <button onClick={handleLeftArrow}>
              <img
                className={leftDisabled ? "disabled" : ""}
                src={arrowLeft}
                alt="left arrow"
              />
            </button>
            <button
              className={rightDisabled ? "disabled" : ""}
              onClick={handleRightArrow}
            >
              <img src={arrowRight} alt="right arrow" />
            </button>
          </div>
        </div>
        <div onScroll={handleScroll} ref={slider} className="slider-container">
          {sliderData.map((slide, index) => (
            <Slide key={index} slideInfo={slide} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
