import { Link } from "react-router";
import "./maincategoryItem.style.scss";

const MainCategoryItem = ({ category }) => {
  return (
    <div className="main-category-Item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />

      <Link
        to={`/shop/${category.title.toLowerCase()}`}
        className="main-category-Item-body-container"
      >
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </Link>
    </div>
  );
};

export default MainCategoryItem;
