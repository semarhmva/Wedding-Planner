import React from 'react'
import '../../styles/PortfolioDetails.css'
import TitleSection from '../TitleSection'

function PoDetails() {
  return (
    <div className="event">
        <div className="container">
            <div className="title">
            <TitleSection 
                 mainTitle='Marcus & Erin'
                 subtitle="march 4, 2023" 
                 vectorLeft="/Vector 3.svg" 
                 vectorRight="/Vector 1.svg" 
               />
            </div>
            <div className="quote">
                <span>Enim eu cras gravida ultricies. 
                    Pulvinar nec erat praesent nisi faucibus
                     arcu viverra a mi. Faucibus posuere sit nibh 
                     tristique tortor massa at non.</span>
            </div>
            <div className="pic">
                <img src="./marcus.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default PoDetails