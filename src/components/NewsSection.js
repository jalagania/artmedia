import "./NewsSection.css";
import Slide from "./Slide";

function NewsSection() {
  const slideData = [
    { title: "blabla", date: "blab", image: "/images/image-girl.png" },
    { title: "blabla", date: "blab", image: "/images/image-beach.png" },
    { title: "blabla", date: "blab", image: "/images/image-bed.png" },
    { title: "blabla", date: "blab", image: "/images/image-cityscape.png" },
    { title: "blabla", date: "blab", image: "/images/image-beach.png" },
  ];

  return (
    <section className="news-section">
      <div className="section-container">
        {slideData.map((slide, index) => (
          <Slide key={index} slideInfo={slide} />
        ))}
      </div>
    </section>
  );
}

export default NewsSection;
