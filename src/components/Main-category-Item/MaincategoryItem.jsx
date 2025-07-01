import "./maincategoryItem.style.scss";
const CategoryItem = ({ category }) => {
  return (
    <div className="main-category-Item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="main-category-Item-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
