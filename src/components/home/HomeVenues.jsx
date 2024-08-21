import React from 'react';
import '../../styles/HomeVenues.css';
import TitleSection from '../TitleSection';
import Button from '../Button';
function HomeVenues() {
  return (
    <div className="venues">
        <div className="container">
            <div className="venues-left">
                <div className="title">
                <TitleSection 
                 mainTitle= 'An unforgettable atmosphere away from the crowd, for your crowd'
                 subtitle="VENUES" 
                 vectorLeft="/Vector 3.svg" 
                 vectorRight="/Vector 1.svg" 
                 />
                </div>
                <div className="content">
                    <p>Exclusive access to Glasgow’s most iconic Neoclassical landmark, playing host to events of all varieties. The one thing our gala dinners, award ceremonies and celebrations have in common is that the building always breaks the ice. <br /> 

                      Dating back to 1844 and nestled within the grandeur of the Merchant City, the rich history of Citation contributes to its boastful vibrance and rusticity.</p>
                </div>
                <div className="btn">
                    <Button text="Book Now" href="#book" />
                </div>


            </div>
            <div className="venues-right">
                <img src="/venues.png" alt="venues" className='venues-img'/>
            </div>
        </div>
    </div>
  )
}

export default HomeVenues