import "./Slide.css";
import ButtonSeeMore from "./ButtonSeeMore";

function Slide({ slideInfo }) {
  return (
    <article className="slide-box">
      <div className="slide-text-box">
        <h2 className="slide-heading">{slideInfo.title}</h2>
        <p className="slide-date">{slideInfo.date}</p>
        <ButtonSeeMore class="slide" />
      </div>
      <div className="overlay"></div>
      <img src={slideInfo.image} alt="slide" />
    </article>
  );
}

export default Slide;
