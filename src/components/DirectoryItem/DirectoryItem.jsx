import { categories } from "../../assets/categories";
import MainCategoryItem from "../Main-category-Item/MaincategoryItem";
import "./directoryItem.style.scss";

const DirectoryItem = () => {
  return (
    <div className="categories-container">
      {categories.map((category, id) => (
        <MainCategoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryItem;
