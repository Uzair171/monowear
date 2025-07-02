import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./category.style.scss";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (categoriesMap && categoriesMap[category]) {
      setItems(categoriesMap[category]);
    }
  }, [categoriesMap, category]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>

      <div className="category-container">
        {items.length > 0 ? (
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products or no items available.</p>
        )}
      </div>
    </Fragment>
  );
};

export default Category;
