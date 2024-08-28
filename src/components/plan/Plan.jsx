import React, { useState } from 'react';
import TitleSection from '../TitleSection';
import '../../styles/Plan.css';

const Plan = () => {
  const [showComparison, setShowComparison] = useState(false);

  const handleChoosePlanClick = () => {
    setShowComparison(true);
  };

  return (
    <div className="compare-plan">
      <div className="container">
        <div className="title">
          <TitleSection 
            mainTitle= 'Compare Our Plans and Find Yours'
            subtitle="Pricing Plan" 
            vectorLeft="/Vector 3.svg" 
            vectorRight="/Vector 1.svg" 
          />
        </div>
        <div className="pricing-container">
          <div className="pricing-card">
            <h3>Local event</h3>
            <p className="price">$990.00 USD</p>
            <p className="description">Including Planning Session, Keynote with Three Breakout Sessions</p>
          </div>
          <div className="pricing-card-featured">
            <h3>Standard event</h3>
            <p className="price">$2,499.00 USD</p>
            <p className="description">Including Planning, Extended Service Schedule, and Morning Keynote</p>
            <button className="choose-plan" onClick={handleChoosePlanClick}>Choose Plan</button>
          </div>
          <div className="pricing-card">
            <h3>International event</h3>
            <p className="price">$9,499.00 USD</p>
            <p className="description">Including Planning Session and International Event Planning Package</p>
          </div>
        </div>
        
        {showComparison && (
          <div className="plan-comparison-container">
            <table className="plan-comparison-table">
              <thead>
                <tr>
                  <th>Characteristic</th>
                  <th>Local</th>
                  <th>Standard</th>
                  <th>International</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Exclusive Venue Hire in the City Centre of Glasgow</td>
                  <td>2</td>
                  <td>8</td>
                  <td>12</td>
                </tr>
                <tr>
                  <td>Complimentary DJ for parties</td>
                  <td>50</td>
                  <td>100</td>
                  <td>180</td>
                </tr>
                <tr>
                  <td>Personalised menus</td>
                  <td><img src="/check.svg" alt="Check" /></td>
                  <td><img src="/check.svg" alt="Check" /></td>
                  <td><img src="/check.svg" alt="Check" /></td>
                </tr>
                <tr>
                  <td>In house PA/microphones for speeches</td>
                  <td><img src="/check.svg" alt="Check" /></td>
                  <td><img src="/check.svg" alt="Check" /></td>
                  <td><img src="/check.svg" alt="Check" /></td>
                </tr>
                <tr>
                  <td>Dedicated Events Coordinator</td>
                  <td><img src="/check.svg" alt="Check" /></td>
                  <td><img src="/check.svg" alt="Check" /></td>
                  <td><img src="/check.svg" alt="Check" /></td>
                </tr>
                <tr>
            <td>Personalised menus</td>
            <td><img src="/check.svg" alt="Check" /></td>
            <td><img src="/check.svg" alt="Check" /></td>
            <td><img src="/check.svg" alt="Check" /></td>
          </tr>
          <tr>
            <td>In house PA/microphones for speeches</td>
            <td><img src="/check.svg" alt="Check" /></td>
            <td><img src="/check.svg" alt="Check" /></td>
            <td><img src="/check.svg" alt="Check" /></td>
          </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Plan;
