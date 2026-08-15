import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
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

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

            {/* Desktop Cart Icon */}
            <Link to="/cart" className="navbar-action-item desktop-only">
              <img src={cartIcon} alt="Cart" className="nav-icon-img" />
              <span>{totalCartCount}</span>
            </Link>

            {/* Desktop Wishlist Icon */}
            <Link to="/wishlist" className="navbar-action-item desktop-only">
              <img src={heartIcon} alt="Wishlist" className="nav-icon-img" />
              <span>{totalWishlistCount}</span>
            </Link>

            {/* Mobile-Specific Search Icon */}
            <button className="navbar-icon-btn mobile-only" title="Search">
              <img
                src={mobileSearchIcon}
                alt="Search"
                className="nav-icon-img"
              />
            </button>

            {/* Mobile-Specific Cart Icon */}
            <Link to="/cart" className="navbar-action-item mobile-only">
              <img src={mobileCartIcon} alt="Cart" className="nav-icon-img" />
            </Link>

            {/* Hidden variable references to prevent TypeScript unused warnings */}
            <span style={{ display: "none" }}>
              {totalWishlistCount} {dropdownIcon}
            </span>

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
