import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/HomeServices.css';
import TitleSection from '../TitleSection';
import Card from '../Card';

function HomeServices() {
    const navigate = useNavigate();
    const cardsData = [
        { image: "/services1.png", altText: "Service 1", overlayText: "Design", path: "/services" },
        { image: "/services2.png", altText: "Service 2", overlayText: "Planning", path: "/services" },
        { image: "/services3.png", altText: "Service 3", overlayText: "Photography", path: "/services" },
    ];

    const handleCardClick = (path) => {
        navigate(path);
    };

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
                            onClick={() => handleCardClick(card.path)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeServices;
