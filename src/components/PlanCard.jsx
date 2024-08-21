import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PlanCard.css';

function PlanCard({ plan }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/plan');
  };

  return (
    <div className={`plan-card ${plan.featured ? 'featured' : ''}`}>
      <h3 className="plan-title">{plan.name}</h3>
      <div className="plan-price">{plan.price} USD</div>
      <p className="plan-description">{plan.description}</p>
      <ul className="plan-features">
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {plan.featured && <button className="choose-plan-button" onClick={handleButtonClick}>Choose Plan</button>}
    </div>
  );
}

export default PlanCard;
