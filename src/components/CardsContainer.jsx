import React from 'react'
import '../styles/CardsContainer.css'
import Card from './Card'

export default function CardsContainer({ cardsData }) {
    return (
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    );
  }