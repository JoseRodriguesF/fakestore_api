import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} USD</p>
      <Link to={`/product/${product.id}`} className="button">Ver detalhes</Link>
    </div>
  );
};

export default ProductCard;