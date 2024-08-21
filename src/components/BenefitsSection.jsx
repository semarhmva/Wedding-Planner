import React from 'react';
import '../styles/BenefitsSection.css'; 

function BenefitsSection({ benefits }) {
  return (
    <div className="benefits-section">
      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            <img src={benefit.icon} alt={`${benefit.title} icon`} className="benefit-icon" />
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BenefitsSection;
