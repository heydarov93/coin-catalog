import "./Category.css";
import { Link } from "react-router-dom";
const Category = ({ id, name, img }) => {
  return (
    <div className="Category">
      <h5 className="Category_Title">{name}</h5>
      <div className="Category_ShowAll">
        <Link to={`/coins?cat=${id}`}>
          <small>Show all </small>
        </Link>
        <svg
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 10L5 5.5L1 1" stroke="black" />
        </svg>
      </div>
      <div className="Category_ImgWrapper">
        <img src={img} alt={`category ${name}`} />
      </div>
    </div>
  );
};

export default Category;
