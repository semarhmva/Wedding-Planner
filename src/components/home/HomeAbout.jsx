import React from 'react'
import "../../styles/HomeAbout.css"
import TitleSection from "../TitleSection"
function HomeAbout() {
  return (
    <div className='home-about'>
        <div className="container">
        <div>
      <TitleSection 
        mainTitle= 'About company'
        subtitle="Our Company" 
        vectorLeft="/Vector 3.svg" 
        vectorRight="/Vector 1.svg" 
      />
      {/* Other content of the About page */}
    </div>
            <div className="about-company-content">
                <div className="about-left">
                    <img src="/Rectangle 2382.png" alt="" className='image1'/>
                    <img src="/Circle.png" alt="" className='image2' />
                </div>
                <div className="about-right">
                    <h2>We are a team of passionate and experienced wedding planners</h2>
                  <p>Our team of wedding planners is passionate about creating
                         unforgettable wedding experiences. We understand that every
                         wedding is unique, and we work closely with our clients to ensure 
                         that their vision becomes a reality. 

                         <br />
                        Our approach is personal, friendly, and professional, and we strive
                         to make the planning process as stress-free as possible.</p>
                         <a href="#book" className="book-btn">Book Now</a>
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default HomeAbout