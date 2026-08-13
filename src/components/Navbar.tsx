import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import "../styles/Navbar.css";

// Import local navbar SVGs from assets
import phoneIcon from "../assets/icon-phone.svg";
import emailIcon from "../assets/icon-email.svg";
import userIcon from "../assets/icon-user.svg";
import searchIcon from "../assets/icon-search.svg";
import cartIcon from "../assets/icon-cart.svg";
import heartIcon from "../assets/icon-heart.svg";
import dropdownIcon from "../assets/icon-dropdown.svg";

import instagramIcon from "../assets/icon-instagram.svg";
import youtubeIcon from "../assets/icon-youtube.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";

const Navbar: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart?.items || []);
  const wishlistItems = useAppSelector((state) => state.wishlist?.items || []);

  const totalCartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  const totalWishlistCount = wishlistItems.length;

  return (
    <header className="header-container">
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

          <ul className="navbar-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="shop-link-flex">
                Shop <img src={dropdownIcon} alt="" className="dropdown-icon" />
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

          <div className="navbar-actions">
            <Link to="/login" className="navbar-login">
              <img
                src={userIcon}
                alt="User"
                className="nav-icon-img user-icon-spacing"
              />
              Login / Register
            </Link>
            <button className="navbar-icon-btn" title="Search">
              <img src={searchIcon} alt="Search" className="nav-icon-img" />
            </button>
            <Link to="/cart" className="navbar-action-item">
              <img src={cartIcon} alt="Cart" className="nav-icon-img" />
              <span>{totalCartCount}</span>
            </Link>
            <Link to="/wishlist" className="navbar-action-item">
              <img src={heartIcon} alt="Wishlist" className="nav-icon-img" />
              <span>{totalWishlistCount}</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
