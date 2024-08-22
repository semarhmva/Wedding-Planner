import React from 'react';
import '../../styles/AboutTeam.css';
import TitleSection from '../TitleSection';
import Button from '../Button';
import TeamCard from '../TeamCard';

function AboutTeam() {
  return (
     <div className="team">
        <div className="container">
            <div className="title">
            <TitleSection 
             mainTitle="Meet Our Team"
             subtitle="our team" 
             vectorLeft="/Vector 3.svg" 
             vectorRight="/Vector 1.svg" 
            />
            </div>
            <div className="team-cards">
            <TeamCard />
            </div>
            <div className="btn">
              <Button text="See All Team" href="#portfolio-details" />
           </div>
            
        </div>
     </div>
  )
}

export default AboutTeam