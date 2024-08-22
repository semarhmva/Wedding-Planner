import React from 'react'
import HomeAbout from '../components/home/HomeAbout'
import Footer from '../components/Footer';
import Testimonials from '../components/home/Testimonials';
import AboutNums from '../components/about/AboutNums';
import AboutPortfolio from '../components/about/AboutPortfolio';
import AboutsSeenIn from '../components/about/AboutsSeenIn';
import AboutTeam from '../components/about/AboutTeam';

const About = () => {
    return (
      <section>
      
      <HomeAbout/>
      <AboutNums/>
      <AboutPortfolio/>
      <AboutsSeenIn/>
      <AboutTeam/>
      <Testimonials/>
      <Footer/>
      </section>
    );
  };

export default About