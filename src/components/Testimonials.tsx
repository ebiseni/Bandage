import React from "react";
import "../styles/Testimonials.css";

import userAvatar from "../assets/testimonial-user.jpg";
import grid1 from "../assets/grid-img-1.jpg";
import grid2 from "../assets/grid-img-2.jpg";
import grid3 from "../assets/grid-img-3.jpg";
import grid4 from "../assets/grid-img-4.jpg";
import grid5 from "../assets/grid-img-5.jpg";
import grid6 from "../assets/grid-img-6.jpg";
import grid7 from "../assets/grid-img-7.jpg";
import grid8 from "../assets/grid-img-8.jpg";
import grid9 from "../assets/grid-img-9.jpg";

const Testimonials: React.FC = () => {
  const gridImages = [
    grid1,
    grid2,
    grid3,
    grid4,
    grid5,
    grid6,
    grid7,
    grid8,
    grid9,
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Left Side: Testimonial with heading included properly inside */}
        <div className="testimonial-content-wrapper">
          <h3 className="testimonials-heading">What they say about us</h3>

          <div className="testimonial-card">
            <div className="avatar-container">
              <img src={userAvatar} alt="Regina Miles" className="avatar-img" />
            </div>

            <div className="rating-stars">
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star">★</span>
            </div>

            <p className="testimonial-text">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </p>

            <div className="reviewer-info">
              <span className="reviewer-name">Regina Miles</span>
              <span className="reviewer-role">Designer</span>
            </div>
          </div>
        </div>

        {/* Right Side: 9-Photo Grid */}
        <div className="photo-grid">
          {gridImages.map((imgSrc, index) => (
            <div key={index} className="grid-item">
              <img src={imgSrc} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
