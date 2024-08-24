import React from 'react'
import '../../styles/OurTeam.css'
import TitleSection from '../TitleSection'
import TeamCard from '../TeamCard'
function OurTeam() {
  return (
    <div className="our-team">
        <div className="container">
            <div className="title">
            <TitleSection 
             mainTitle="Meet Our Team"
             subtitle="our team" 
             vectorLeft="/Vector 3.svg" 
             vectorRight="/Vector 1.svg" 
            />
            </div>
            <div className="members">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            </div>
        </div>
    </div>
  )
}

export default OurTeam