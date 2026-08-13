import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import "../styles/ProductCard.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <Link
        to={`/product/${product.id}`}
        className="product-card-image-container"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-card-image"
        />
      </Link>
      <div className="product-card-content">
        <Link to={`/product/${product.id}`} className="product-card-title-link">
          <h3 className="product-card-title">{product.title}</h3>
        </Link>
        <p className="product-card-category">
          {product.description || "English Department"}
        </p>
        <div className="product-card-price-container">
          <span
            style={{
              textDecoration: "line-through",
              color: "#828282",
              fontSize: "14px",
              marginRight: "5px",
            }}
          >
            ${(product.price * 2.5).toFixed(2)}
          </span>
          <span className="product-card-price">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
