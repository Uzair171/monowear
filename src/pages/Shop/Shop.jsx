import { Fragment, useContext } from "react";
import { ProductsContext } from "../../context/productContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      {Object.keys(products).map((title) => (
        <Fragment key={title}>
          <h2>{title.toUpperCase()}</h2>
          <div className="products-container">
            {products[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
