import React from 'react';
import '../../styles/HomeVenues.css';
import TitleSection from '../TitleSection';
function HomeVenues() {
  return (
    <div className="venues">
        <div className="container">
            <div className="venues-left">
                <div className="title">
                <TitleSection 
             subtitle="VENUES" 
             mainTitle="An unforgettable atmosphere awayfrom the crowd, for your crowd"
             vectorLeft="/Vector 3.svg" 
             vectorRight="/Vector 1.svg" 
            />
                </div>
                <div className="content">
                    <p>Exclusive access to Glasgow’s most iconic Neoclassical landmark, playing host to events of all varieties. The one thing our gala dinners, award ceremonies and celebrations have in common is that the building always breaks the ice. <br /> <br />

                      Dating back to 1844 and nestled within the grandeur of the Merchant City, the rich history of Citation contributes to its boastful vibrance and rusticity.</p>
                </div>
                <div className="btn">
                <a href="#book" className="book-btn">Book Now</a>
                </div>

            </div>
            <div className="venues-right">

            </div>
        </div>
    </div>
  )
}

export default HomeVenues