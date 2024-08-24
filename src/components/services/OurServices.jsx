import React from 'react'
import TitleSection from '../TitleSection'
import Button from '../Button'

function OurServices() {
  return (
    <div className="album">
    <TitleSection 
         mainTitle='We are committed to providing the best service'
         subtitle="Services" 
         vectorLeft="/Vector 3.svg" 
         vectorRight="/Vector 1.svg" 
       />
<div className="container">
  <div className="client-left">
    <div className="img">
        <img src="/services1.png" alt="" />
    </div>
  </div>
  <div className="client-right">
    <div className="title">
        <TitleSection 
         subtitle="Design"
         vectorLeft="/Vector 3.svg" 
         vectorRight="/Vector 1.svg" 
       />
    </div>
    <div class="wedding-details">
    
  <p>
  Our can help couples their wedding theme or concept and create suitable decoration and invitation designs.
  </p>
  <ul>
    <li>Website</li>
    <li>Consultation</li>
    <li>Design</li>
    <li>Website</li>
    <li>Consultation</li>
    <li>Design</li>
    <li>Consultation</li>
  </ul>
  <Button text="See Details" href="/services-details" />

</div>
  </div>
</div>
</div>
  )
}

export default OurServices