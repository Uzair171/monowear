import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../../context/productContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  const { products } = useContext(ProductsContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(products[category]);
  }, [products, category]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()} </h2>

      <div className="category-container">
        {items &&
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
