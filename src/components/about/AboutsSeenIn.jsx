import React from 'react';
import '../../styles/AboutsSeenIn.css';
import TitleSection from '../TitleSection';

function AboutsSeenIn() {
  return (
    <div className="seen-in">
      <div className="container">
      <div className="title">
            <TitleSection 
             subtitle="AS SEEN IN" 
             vectorLeft="/Vector 3.svg" 
             vectorRight="/Vector 1.svg" 
            />
      </div>
      <div className="companies">
        <img src="./forbes.svg" alt="" />
        <img src="./guardian.svg" alt="" />
        <img src="./forbes.svg" alt="" />
        <img src="./guardian.svg" alt="" />
        <img src="./forbes.svg" alt="" />

      </div>
      </div>
    </div>
  )
}

export default AboutsSeenIn