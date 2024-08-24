import React from 'react'
import '../../styles/Execution.css'
import TitleSection from '../TitleSection'

function Execution() {
  return (
    <div className="execution">
        <div className="container">
            <div className="execution-top">
            <TitleSection 
                 mainTitle='Making The Story'
                 subtitle="Execution" 
                 vectorLeft="/Vector 3.svg" 
                 vectorRight="/Vector 1.svg" 
               />
            </div>
            <div className="execution-bottom">
                <div className="left">
                <div className="planning-item">
          <h5 className="planning-item-title">Consultation</h5>
          <p className="planning-item-description">
          Talan Rosser is the most professional photographer of the wedding. He will make your photos and moments last.
          </p>
        </div>
        <div className="planning-item">
          <h5 className="planning-item-title">Consultation</h5>
          <p className="planning-item-description">
          Talan Rosser is the most professional photographer of the wedding. He will make your photos and moments last.
          </p>
        </div>
        <div className="planning-item">
          <h5 className="planning-item-title">Consultation</h5>
          <p className="planning-item-description">
          Talan Rosser is the most professional photographer of the wedding. He will make your photos and moments last.
          </p>
        </div>
                </div>
                <div className="right">
                <div className="img">
                <img src="/services3.png" alt="" />
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Execution