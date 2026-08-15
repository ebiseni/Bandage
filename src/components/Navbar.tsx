import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../features/cart/cartSlice";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice"; // Assuming you have a wishlist slice
import "../styles/Navbar.css";

// Import desktop navbar SVGs from assets
import phoneIcon from "../assets/icon-phone.svg";
import emailIcon from "../assets/icon-email.svg";
import userIcon from "../assets/icon-user.svg";
import searchIcon from "../assets/icon-search.svg";
import cartIcon from "../assets/icon-cart.svg";
import heartIcon from "../assets/icon-heart.svg";
import dropdownIcon from "../assets/icon-dropdown.svg";

// Import mobile-specific icons downloaded from Figma
import mobileSearchIcon from "../assets/icon-search-mobile.svg";
import mobileCartIcon from "../assets/icon-cart-mobile.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";

import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";

interface ToastItem {
  id: number | string;
  title: string;
  price: number;
  thumbnail?: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false); // Desktop-only wishlist dropdown state
  const [toastItem, setToastItem] = useState<ToastItem | null>(null);

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart?.items || []);
  const wishlistItems = useAppSelector((state) => state.wishlist?.items || []);

  // Listen for custom cart-add events
  useEffect(() => {
    const handleCartAdded = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail) {
        setToastItem(customEvent.detail);
      }
    };

    window.addEventListener(
      "cart-item-added",
      handleCartAdded as EventListener,
    );
    return () => {
      window.removeEventListener(
        "cart-item-added",
        handleCartAdded as EventListener,
      );
    };
  }, []);

  // Automatically dismiss the toast after 3 seconds
  useEffect(() => {
    if (!toastItem) return;
    const timer = setTimeout(() => {
      setToastItem(null);
    }, 3000);
    return () => clearTimeout(timer);
  }, [toastItem]);

  const totalCartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalWishlistCount = wishlistItems.length;

  return (
    <header className="header-container">
      {/* Rich Toast Notification Popup (Bottom Right) */}
      {toastItem && (
        <div className="toast-notification-card">
          <div className="toast-header">
            <span>Successfully added to basket</span>
            <button
              className="toast-close-btn"
              onClick={() => setToastItem(null)}
            >
              &times;
            </button>
          </div>
          <div className="toast-body">
            {toastItem.thumbnail && (
              <img
                src={toastItem.thumbnail}
                alt={toastItem.title}
                className="toast-thumb"
              />
            )}
            <div className="toast-info">
              <p className="toast-title">{toastItem.title}</p>
              <p className="toast-price">${toastItem.price}</p>
            </div>
          </div>
        </div>
      )}

      {/* Top Green Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <img src={phoneIcon} alt="Phone" className="top-bar-icon" /> (225)
              555-0118
            </span>
            <span className="top-bar-item">
              <img src={emailIcon} alt="Email" className="top-bar-icon" />{" "}
              michelle.rivera@example.com
            </span>
          </div>
          <div className="top-bar-center">
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="top-bar-right">
            <span>Follow Us :</span>
            <span className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <img src={youtubeIcon} alt="YouTube" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-brand">
            Bandage
          </Link>

          {/* DESKTOP NAV LINKS */}
          <ul className="desktop-nav-links desktop-only">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="nav-shop-link">
                Shop{" "}
                <img
                  src={dropdownIcon}
                  alt="dropdown"
                  className="dropdown-arrow"
                />
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/pages">Pages</Link>
            </li>
          </ul>

          {/* MOBILE NAV LINKS */}
          <ul className={`mobile-nav-links  ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" onClick={() => setIsMenuOpen(false)}>
                Product
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="navbar-actions">
            <Link to="/login" className="navbar-login desktop-only">
              <img
                src={userIcon}
                alt="User"
                className="nav-icon-img user-icon-spacing"
              />
              Login / Register
            </Link>

            {/* Desktop Search Icon */}
            <button className="navbar-icon-btn desktop-only" title="Search">
              <img src={searchIcon} alt="Search" className="nav-icon-img" />
            </button>

            {/* Desktop Cart Icon with Interactive Dropdown */}
            <div className="cart-dropdown-wrapper">
              <button
                className="navbar-action-item desktop-only cart-toggle-btn"
                onClick={() => {
                  setIsCartOpen(!isCartOpen);
                  setIsWishlistOpen(false); // Close wishlist dropdown if open
                }}
              >
                <img src={cartIcon} alt="Cart" className="nav-icon-img" />
                <span>{totalCartCount}</span>
              </button>

              {isCartOpen && (
                <div className="cart-dropdown">
                  <div className="cart-dropdown-header">
                    <h4>Your Cart</h4>
                    <button
                      className="close-dropdown-btn"
                      onClick={() => setIsCartOpen(false)}
                    >
                      &times;
                    </button>
                  </div>

                  <div className="cart-dropdown-items-list">
                    {cartItems.length === 0 ? (
                      <p className="empty-cart-text">Your cart is empty</p>
                    ) : (
                      cartItems.map((item) => (
                        <div key={item.id} className="cart-dropdown-item">
                          {item.thumbnail && (
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="dropdown-item-thumb"
                            />
                          )}
                          <div className="dropdown-item-info">
                            <p className="dropdown-item-title">{item.title}</p>
                            <p className="dropdown-item-pricing">
                              ${item.price}
                            </p>

                            <div className="cart-quantity-controls">
                              <button
                                onClick={() =>
                                  dispatch(decrementQuantity(item.id))
                                }
                                className="qty-btn"
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button
                                onClick={() =>
                                  dispatch(incrementQuantity(item.id))
                                }
                                className="qty-btn"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <button
                            className="dropdown-remove-btn"
                            onClick={() => dispatch(removeFromCart(item.id))}
                            title="Remove item"
                          >
                            🗑️
                          </button>
                        </div>
                      ))
                    )}
                  </div>

                  <div className="cart-dropdown-footer">
                    <span className="cart-total-label">Total</span>
                    <span className="cart-total-amount">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Wishlist Icon with Dropdown (Strictly Desktop-Only) */}
            <div className="cart-dropdown-wrapper desktop-only">
              <button
                className="navbar-action-item cart-toggle-btn"
                onClick={() => {
                  setIsWishlistOpen(!isWishlistOpen);
                  setIsCartOpen(false); // Close cart dropdown if open
                }}
                title="Wishlist"
              >
                <img src={heartIcon} alt="Wishlist" className="nav-icon-img" />
                <span>{totalWishlistCount}</span>
              </button>

              {isWishlistOpen && (
                <div className="cart-dropdown">
                  <div className="cart-dropdown-header">
                    <h4>Your Wishlist</h4>
                    <button
                      className="close-dropdown-btn"
                      onClick={() => setIsWishlistOpen(false)}
                    >
                      &times;
                    </button>
                  </div>

                  <div className="cart-dropdown-items-list">
                    {wishlistItems.length === 0 ? (
                      <p className="empty-cart-text">Your wishlist is empty</p>
                    ) : (
                      wishlistItems.map((item: any) => (
                        <div key={item.id} className="cart-dropdown-item">
                          {item.thumbnail && (
                            <img
                              src={item.thumbnail}
                              alt={item.title}
                              className="dropdown-item-thumb"
                            />
                          )}
                          <div className="dropdown-item-info">
                            <p className="dropdown-item-title">{item.title}</p>
                            <p className="dropdown-item-pricing">
                              ${item.price}
                            </p>
                          </div>

                          <button
                            className="dropdown-remove-btn"
                            onClick={() =>
                              dispatch(removeFromWishlist(item.id))
                            }
                            title="Remove from wishlist"
                          >
                            🗑️
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile-Specific Search Icon */}
            <button className="navbar-icon-btn mobile-only" title="Search">
              <img
                src={mobileSearchIcon}
                alt="Search"
                className="nav-icon-img"
              />
            </button>

            {/* Mobile-Specific Cart Icon with Dropdown */}
            <div className="cart-dropdown-wrapper mobile-only">
              <button
                className="navbar-action-item cart-toggle-btn"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <img src={mobileCartIcon} alt="Cart" className="nav-icon-img" />
                <span>{totalCartCount}</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="hamburger-btn mobile-only"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <img src={hamburgerIcon} alt="Menu" className="nav-icon-img" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
