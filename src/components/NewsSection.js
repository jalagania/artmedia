import "./NewsSection.css";
import Slide from "./Slide";
import { sliderData } from "../sliderData";
import arrowLeft from "../assets/icon-long-arrow-left.svg";
import arrowRight from "../assets/icon-long-arrow-right.svg";
import { useRef, useState } from "react";

function NewsSection() {
  const mobile = window.innerWidth <= 500;
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);

  const slider = useRef();

  function moveSlider(arg) {
    const slide = slider.current.firstElementChild;
    const gap = parseFloat(getComputedStyle(slider.current).gap);
    const size = mobile
      ? slide.clientWidth + gap
      : (slide.clientWidth + gap) * 2;
    if (arg === "minus") {
      slider.current.scrollLeft -= size;
    } else {
      slider.current.scrollLeft += size;
    }
  }

  function handleLeftArrow() {
    moveSlider("minus");
  }

  function handleRightArrow() {
    moveSlider("plus");
  }

  function handleScroll(event) {
    if (event.target.scrollLeft > 0) {
      setLeftDisabled(false);
    } else {
      setLeftDisabled(true);
    }

    if (
      event.target.scrollWidth - event.target.clientWidth ===
      event.target.scrollLeft
    ) {
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
