import { categories } from "../../assets/categories";
import CategoryItem from "../category-Item/CategoryItem";
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
