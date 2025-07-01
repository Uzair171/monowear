import { Fragment, useContext } from "react";
import { ProductsContext } from "../../context/productContext";

import "./shop.style.scss";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      {Object.keys(products).map((title) => {
        const product = products[title];
        return <CategoryPreview key={title} title={title} products={product} />;
      })}
    </div>
  );
};

export default Shop;
