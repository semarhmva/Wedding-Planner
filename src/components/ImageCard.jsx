import React from 'react';
import '../styles/ImageCard.css'

function ImageCard({image}) {
  return (
    <div className="image-card">
    <img src={image.src} alt={image.title} className="image" />
    <div className="overlay">
      <div className="overlay-text">
        <p className="date">{image.date}</p>
        <h3 className="title">{image.title}</h3>
        <a href={image.instagram} target="_blank" rel="noopener noreferrer" className="instagram-link">
          <img src="/path/to/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default ImageCard