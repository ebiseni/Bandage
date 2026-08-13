import React from "react";
import "../styles/CallToAction.css";

const CallToAction: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <span className="cta-subtitle">Designing Better Experience</span>
          <h2 className="cta-title">
            Problems trying to resolve the conflict between
          </h2>
          <p className="cta-desc">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
          <div className="cta-price">$16.48</div>
          <button className="cta-button">ADD YOUR CALL TO ACTION</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
