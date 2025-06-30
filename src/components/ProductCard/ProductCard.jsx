import "./product-card.styles.scss";
import React, { useContext } from "react";
import Button from "../Button/Button";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const addToCart = () => addItemToCart(product);

  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
