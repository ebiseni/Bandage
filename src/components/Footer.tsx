import React from "react";
import "../styles/Footer.css";

import facebookIcon from "../assets/facebook-icon.svg";
import instagramIcon from "../assets/instagram-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      {/* Top Banner Row (Bandage logo + Social Icons) */}
      <div className="footer-top">
        <div className="footer-top-container">
          <h2 className="footer-logo">Bandage</h2>
          <div className="footer-socials">
            <a href="#facebook" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns & Newsletter */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-col">
            <h4>Company Info</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#carrier">Carrier</a>
              </li>
              <li>
                <a href="#hiring">We are hiring</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#carrier">Carrier</a>
              </li>
              <li>
                <a href="#hiring">We are hiring</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#business">Business Marketing</a>
              </li>
              <li>
                <a href="#analytics">User Analytics</a>
              </li>
              <li>
                <a href="#live">Live Chat</a>
              </li>
              <li>
                <a href="#support">Unlimited Support</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#ios">IOS & Android</a>
              </li>
              <li>
                <a href="#watch">Watch a Demo</a>
              </li>
              <li>
                <a href="#customers">Customers</a>
              </li>
              <li>
                <a href="#api">API</a>
              </li>
            </ul>
          </div>

          <div className="footer-col newsletter-col">
            <h4>Get In Touch</h4>
            <form
              className="newsletter-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="input-group">
                <input type="email" placeholder="Your Email" required />
                <button type="submit">Subscribe</button>
              </div>
            </form>
            <p className="newsletter-subtext">Lore imp sum dolor Amit</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>Made With Love By Finland All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
