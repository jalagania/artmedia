import "./ButtonSeeMore.css";

function ButtonSeeMore(props) {
  return (
    <a href="#home" className={`btn-more ${props.class}`}>
      <span>See More</span>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.6652 7.82364C16.1116 7.36808 16.1116 6.62827 15.6652 6.17272L9.95055 0.341663C9.5041 -0.113888 8.77906 -0.113888 8.33261 0.341663C7.88615 0.797215 7.88615 1.53703 8.33261 1.99258L12.1007 5.83379H1.14292C0.510743 5.83379 0 6.35494 0 7C0 7.64506 0.510743 8.16621 1.14292 8.16621H12.0971L8.33618 12.0074C7.88973 12.463 7.88973 13.2028 8.33618 13.6583C8.78263 14.1139 9.50767 14.1139 9.95413 13.6583L15.6687 7.82728L15.6652 7.82364Z" />
      </svg>
    </a>
  );
}

export default ButtonSeeMore;
