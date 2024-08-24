import React from 'react'
import Footer from '../components/Footer'
import OurTeam from '../components/team/OurTeam'
import AboutsSeenIn from '../components/about/AboutsSeenIn'
import Positions from '../components/team/Positions'

const Team = () => {
  return (
    <section>
        <OurTeam/>
        <Positions/>
        <AboutsSeenIn/>
        <Footer/>
  
   </section>
  )
}

export default Team