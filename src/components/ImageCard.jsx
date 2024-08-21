import React from 'react';
import '../styles/ImageCard.css';

const ImageCard = ({ image, date, names, isCenter }) => {
  return (
    <div className={`image-card ${isCenter ? 'center' : ''}`}>
      <img src={image} alt={names} className="image-card-img" />
      <div className="image-card-overlay">
        <span className="image-card-date">{date}</span>
        <span className="image-card-names">{names}</span>
      </div>
    </div>
  );
};

export default ImageCard;
