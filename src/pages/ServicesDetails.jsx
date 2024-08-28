import React from 'react'
import Footer from '../components/Footer'
import ServDetail from '../components/details/ServDetail'
import WeOffer from '../components/details/WeOffer'
import Planning from '../components/details/Planning'
import AboutsSeenIn from '../components/about/AboutsSeenIn'
import Testimonials from '../components/home/Testimonials'

const ServicesDetails= () =>{
  return (
    <section>
        <ServDetail/>
       
        <WeOffer/>
        <AboutsSeenIn/>
        <Testimonials/>
        <Footer/>
 </section>
  )
}

export default ServicesDetails