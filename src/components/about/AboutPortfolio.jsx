import React from 'react';
import '../../styles/AboutPortfolio.css';
import Button from '../Button';
import TitleSection from '../TitleSection';

function AboutPortfolio() {
  const portfolioItems = [
    {
      title: 'Maddie & Gabe',
      location: 'NEW YORK',
      imageUrl: '/l1.png',
    },
    {
      title: 'Ruben & Carla',
      location: 'BALI',
      imageUrl: '/l2.png',
    },
    {
      title: 'Phillip & Maria',
      location: 'ROME',
      imageUrl: '/services3.png',
    },
    {
      title: 'Maddie & Gabe',
      location: 'NEW YORK',
      imageUrl: '/l4.png',
    },
    {
      title: 'Ruben & Carla',
      location: 'BALI',
      imageUrl: '/l5.png',
    },
  ];

  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio-title">
          <TitleSection 
            mainTitle='Our Client Wedding Memories'
            subtitle="PORTFOLIO" 
            vectorLeft="/Vector 3.svg" 
            vectorRight="/Vector 1.svg" 
          />
        </div>
        <div className="portfolio-gallery">
          {portfolioItems.map((item, index) => (
            <div className="portfolio-card" key={index}>
              <img src={item.imageUrl} alt={`${item.title}`} />
              <div className="overlay">
                <h3>{item.title}</h3>
                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="btn">
          <Button text="See More Portfolio" href="/portfolio" />
        </div>
      </div>
    </div>
  );
}

export default AboutPortfolio;
