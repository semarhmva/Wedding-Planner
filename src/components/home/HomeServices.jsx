import React from 'react';
import '../../styles/HomeServices.css';
import TitleSection from '../TitleSection';
import Card from '../Card';
function HomeServices() {
    const cardsData = [
        { image: "/services1.png", altText: "Service 1", overlayText: "Design" },
        { image: "/services2.png", altText: "Service 2", overlayText: "Planning" },
        { image: "/services3.png", altText: "Service 3", overlayText: "Photography" },
        // Add more data as needed
      ];
  return (
    <div className="home-services">
        <div className="container">
            <div className="services-title">
            <TitleSection 
             subtitle="Services" 
             mainTitle="We are committed to providing the best service"
             vectorLeft="/Vector 3.svg" 
             vectorRight="/Vector 1.svg" 
            />
            </div>
            <div className="cards">
            {cardsData.map((card, index) => (
              <Card
                 key={index}
                 image={card.image}
                 altText={card.altText}
                 overlayText={card.overlayText}
              />
      ))}
      
            </div>
        </div>
    </div>
  )
}

export default HomeServices;
