import React from 'react';

const Card = ({ image, altText, overlayText }) => {
  return (
    <div className="card">
      <img src={image} alt={altText} />
      <div className="overlay">
        <div className="text">{overlayText}</div>
      
      </div>
    </div>
  );
};

export default Card;
