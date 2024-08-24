import React from 'react'
import Footer from '../components/Footer'
import OurServices from '../components/services/OurServices'
import SerPhotography from '../components/services/SerPhotography'
import Testimonials from '../components/home/Testimonials'
import SerPlanning from '../components/services/SerPlanning'


const Services= () => {
  return (
    <section>
        <OurServices/>
        <SerPhotography/>
        <SerPlanning/>
        <Testimonials/>
       <Footer/>
  
   </section>
     
  )
}

export default Services