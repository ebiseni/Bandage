import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart } from "../features/cart/cartSlice";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";
import "../styles/ProductCard.css";

import heartIcon from "../assets/icon-heart.svg";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  const wishlistItems = useAppSelector((state) => state.wishlist?.items || []);
  const isWishlisted = wishlistItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));

    window.dispatchEvent(
      new CustomEvent("cart-item-added", {
        detail: {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
        },
      }),
    );
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(product));
  };

  const originalPrice = (product.price * 2.5).toFixed(2);
  const discountedPrice = product.price.toFixed(2);

  // Capitalize or format the category nicely from the API data
  const productCategory = product.category
    ? product.category.charAt(0).toUpperCase() + product.category.slice(1)
    : "Collection";

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

        <button
          type="button"
          className={`product-card-wishlist-btn desktop-only ${
            isWishlisted ? "active" : ""
          }`}
          onClick={handleWishlistToggle}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <img src={heartIcon} alt="Wishlist" className="wishlist-icon-img" />
        </button>
      </Link>

      <div className="product-card-content">
        <Link to={`/product/${product.id}`} className="product-card-title-link">
          <h3 className="product-card-title">{product.title}</h3>
        </Link>

        {/* Dynamic Category/Department from API instead of hardcoded text */}
        <p className="product-card-category">{productCategory}</p>

        <div className="product-card-price-container">
          <span className="product-card-old-price">${originalPrice}</span>
          <span className="product-card-price">${discountedPrice}</span>
        </div>

        <button className="product-card-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
