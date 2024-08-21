import React, { useEffect, useState } from 'react';
import '../../styles/Memories.css';
import TitleSection from '../TitleSection';


const memoriesData = [
  {
    date: '8.1.2023',
    title: 'Phillip & Maria',
    imageUrl: 'https://www.marthastewart.com/thmb/6trXrJ1vTq1ONH2iQLP6nfT4Mow=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shayla-lester-wedding-couple-0621-6db8c0eea9234c55a93d9bf9345d3825.jpg',
    instagramLink: 'https://www.instagram.com/jusddsky?igsh=MTBnbWV2bHdrZ2dqaQ=='
  },
  {
    date: '8.12.2022',
    title: 'Maddie & Gabe',
    imageUrl: 'https://omastylebride.com/wp-content/uploads/2021/04/MakeupShayla.and_.LesQuik-weddingday-shoutout-on-OmaStyle-Bride-1-700x692.jpeg',
    instagramLink: 'https://www.instagram.com/jusddsky?igsh=MTBnbWV2bHdrZ2dqaQ=='
  },
  {
    date: '8.13.2023',
    title: 'Ruben & Carla',
    imageUrl: 'https://i.pinimg.com/736x/d4/f4/7e/d4f47e0b9b3e9165e1e52cc12f008dc3.jpg',
    instagramLink: 'https://www.instagram.com/jusddsky?igsh=MTBnbWV2bHdrZ2dqaQ=='
  }
];
function Memories() {
  return (
    <div className="memories">
      <div className="container">
        <div className="title">
          <TitleSection 
            mainTitle="From candid moments to stunning"
            subtitle="MEMORIES" 
            vectorLeft="/Vector 3.svg" 
            vectorRight="/Vector 1.svg" 
          />
        </div>
        <div className="memories-card-container">
          {memoriesData.map((memory, index) => (
            <div className="memories-card" key={index}>
              <img src={memory.imageUrl} alt={memory.title} />
              <div className="memories-card-overlay"></div>
              <div className="memories-card-content">
                <p>{memory.date}</p>
                <h3>{memory.title}</h3>
                <a href={memory.instagramLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Memories;