import React from 'react';
import '../../styles/Planning.css';
import TitleSection from '../TitleSection';

function Planning() {
  return (
    <div className="planning-section">
      <div className="container">
        <div className="title">
          <TitleSection 
            mainTitle="Our can assist couples in selecting the wedding location, vendors, and planning a schedule that runs smoothly on their wedding day."
            subtitle="Planning" 
            vectorLeft="/Vector 3.svg" 
            vectorRight="/Vector 1.svg" 
          />
        </div>
        
        <div className="planning-item">
          <h5 className="planning-item-title">1. Consultation</h5>
          <p className="planning-item-description">
            Enim eu cras gravida ultricies. Pulvinar nec erat praesent nisi
            faucibus arcu viverra a mi. Faucibus posuere sit nibh tristique tortor
            massa at non. Sapien sed pretium amet blandit non porttitor dictumst.
          </p>
        </div>
        <div className="planning-item">
          <h5 className="planning-item-title">2. Vendor Arrangements</h5>
          <p className="planning-item-description">
            Enim eu cras gravida ultricies. Pulvinar nec erat praesent nisi
            faucibus arcu viverra a mi. Faucibus posuere sit nibh tristique tortor
            massa at non. Sapien sed pretium amet blandit non porttitor dictumst.
          </p>
        </div>
        <div className="planning-item">
          <h5 className="planning-item-title">3. Event Coordination</h5>
          <p className="planning-item-description">
            Enim eu cras gravida ultricies. Pulvinar nec erat praesent nisi
            faucibus arcu viverra a mi. Faucibus posuere sit nibh tristique tortor
            massa at non. Sapien sed pretium amet blandit non porttitor dictumst.
          </p>
        </div>
        <div className="planning-item">
          <h5 className="planning-item-title">4. Beauty Services</h5>
          <p className="planning-item-description">
            Enim eu cras gravida ultricies. Pulvinar nec erat praesent nisi
            faucibus arcu viverra a mi. Faucibus posuere sit nibh tristique tortor
            massa at non. Sapien sed pretium amet blandit non porttitor dictumst.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Planning;
