import { useContext } from "react";
import { ProductsContext } from "../../context/productContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
