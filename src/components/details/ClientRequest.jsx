import React from 'react'
import '../../styles/ClientRequest.css'
import TitleSection from '../TitleSection'
function ClientRequest() {
  return (
     <div className="client">
        <div className="container">
          {/* <div className="client-left">
            <div className="img">
                <img src="/services1.png" alt="" />
            </div>
          </div>
          <div className="client-right">
            <div className="title">
                <TitleSection 
                 subtitle="client request" 
                 vectorLeft="/Vector 3.svg" 
                 vectorRight="/Vector 1.svg" 
               />
            </div>
            <div class="wedding-details">
                <span>Our can help couples determine their wedding theme or concept and create suitable decoration and invitation designs.</span>
  <ul>
    <li><strong>Wedding date:</strong> <span class="highlight">March 4, 2023</span></li>
    <li><strong>Budget:</strong> <span class="highlight">$ 2,999.00 USD</span></li>
    <li><strong>Location:</strong> <span class="highlight">Milan, Italy</span></li>
    <li><strong>Guest count:</strong> <span class="highlight">200 guest</span></li>
    <li><strong>Theme and decoration:</strong> <span class="highlight">Elegant</span></li>
    <li><strong>Additional services:</strong> <span class="highlight">Photography, Videography, Music</span></li>
  </ul>
</div>
          </div> */}
          <div className="c-left">
            <img src="/services1.png" alt="" />
          </div>
          <div className="c-right">
          <div className="title">
                <TitleSection 
                 subtitle="client request" 
                 vectorLeft="/Vector 3.svg" 
                 vectorRight="/Vector 1.svg" 
               />
            </div>
            <div class="wedding-details">
                <span>Our can help couples determine their wedding theme or concept and create suitable decoration and invitation designs.</span>
  <ul>
    <li><strong>Wedding date:</strong> <span class="highlight">March 4, 2023</span></li>
    <li><strong>Budget:</strong> <span class="highlight">$ 2,999.00 USD</span></li>
    <li><strong>Location:</strong> <span class="highlight">Milan, Italy</span></li>
    <li><strong>Guest count:</strong> <span class="highlight">200 guest</span></li>
    <li><strong>Theme and decoration:</strong> <span class="highlight">Elegant</span></li>
    <li><strong>Additional services:</strong> <span class="highlight">Photography, Videography, Music</span></li>
  </ul>
</div>
          </div>
        </div>
     </div>
  )
}

export default ClientRequest