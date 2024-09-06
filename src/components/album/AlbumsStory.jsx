import React from 'react'
import '../../styles/AlbumsStory.css'
import TitleSection from '../TitleSection'

function AlbumsStory() {
  return (
<div className="album">
          
        <div className="container">
          <div className="client-left">
            <div className="img">
                <img src="/services3.png" alt="" />
            </div>
          </div>
          <div className="client-right">
            <div className="title">
                <TitleSection 
                 subtitle="The Highlight"
                 vectorLeft="/Vector 3.svg" 
                 vectorRight="/Vector 1.svg" 
               />
            </div>
            <div class="wedding-details">
            <h2>SIZE</h2>
          <p>
          The Main offers a 8"X8" spread that is  perfect  on your table whenever you're in the mood to relive your favorite moments.
          </p>
          <h2>SIZE</h2>
          <p>
          The Main offers a 8"X8" spread that is the perfect size to sit on whenever you're in the mood to relive your favorite moments.
          </p>
          <h2>SIZE</h2>
          <p>
          The Main offers a 8"X8" spread that is the perfect size to sit on your coffee table whenever your coffee table  .
          </p>


</div>
          </div>
        </div>
     </div>
  )
}

export default AlbumsStory