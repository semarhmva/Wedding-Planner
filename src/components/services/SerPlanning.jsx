import React from 'react'
import TitleSection from '../TitleSection'
import Button from '../Button'

function SerPlanning() {
  return (
    <div className="album">
   
<div className="container">
  <div className="client-left">
    <div className="img">
        <img src="/services2.png" alt="" />
    </div>
  </div>
  <div className="client-right">
    <div className="title">
        <TitleSection 
         subtitle="Photography"
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

export default SerPlanning