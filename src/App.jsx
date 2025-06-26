import "./categoriesApp.styles.scss";
import { categories } from "./assets/categories";
import CategoryItem from "./components/category-Item/CategoryItem";

const App = () => {
  return (
    <div className="categories-container">
      {categories.map((category, id) => (
        <CategoryItem key={id} category={category} />
      ))}
    </div>
  );
};

export default App;
