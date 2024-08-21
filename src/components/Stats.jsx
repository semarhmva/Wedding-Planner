import React from 'react';
import '../styles/Stats.css'; 

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <h2>1.356</h2>
        <p>DIFFERENT VENUE</p>
      </div>
      <div className="stat-item">
        <h2>4.356</h2>
        <p>CLIENT SATISFIED</p>
      </div>
      <div className="stat-item">
        <h2>430</h2>
        <p>COUNTRIES</p>
      </div>
      <div className="stat-item">
        <h2>+254</h2>
        <p>BRAND PARTNER</p>
      </div>
    </div>
  );
}

export default Stats;
