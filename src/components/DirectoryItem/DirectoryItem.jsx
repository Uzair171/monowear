import { categories } from "../../assets/categories";
import CategoryItem from "../Main-category-Item/MaincategoryItem";
import "./directoryItem.style.scss";

const DirectoryItem = () => {
  return (
    <div className="categories-container">
      {categories.map((category, id) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryItem;
