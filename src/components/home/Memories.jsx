import React, { useEffect, useState } from 'react';
import '../../styles/Memories.css';
import TitleSection from '../TitleSection';
import ImageCard from '../ImageCard';
function Memories() {
    const [images, setImages] = useState([]);

    useEffect(() => {
      fetch('/path/to/images.json') // Ensure this path is correct
        .then(response => response.json())
        .then(data => setImages(data));
    }, []);
  
  
  return (
    <div className="memories">
        <div className="container">
            <div className="title">
            <TitleSection 
             subtitle="MEMORIES" 
             mainTitle="From candid moments to stunning"
             vectorLeft="/Vector 3.svg" 
             vectorRight="/Vector 1.svg" 
            />
            </div>
            <div className="cards">
            {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
            </div>
        </div>
    </div>
  )
}

export default Memories