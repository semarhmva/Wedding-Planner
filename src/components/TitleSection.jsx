import React from 'react';
import PropTypes from 'prop-types';
import "../styles/TitleSection.css"
const TitleSection = ({ mainTitle, subtitle, vectorLeft, vectorRight }) => {
  return (
    <div className="about-company-title">
     
      <div className="sub-title">
        {vectorLeft && <img src={vectorLeft} alt="" />}
        <span>{subtitle}</span>
        {vectorRight && <img src={vectorRight} alt="" />}
      </div>
      <div className="main-title">
        <h2>{mainTitle}</h2>
      </div>
    </div>
  );
};

TitleSection.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  vectorLeft: PropTypes.string,
  vectorRight: PropTypes.string,
};

export default TitleSection;
