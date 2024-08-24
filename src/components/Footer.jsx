import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css'; 
import TitleSection from './TitleSection';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-top">
            <div className="footer-top-left"> 
              <TitleSection 
               subtitle="Contact us" 
               vectorLeft="/Vector 3.svg" 
               vectorRight="/Vector 1.svg" 
              />
              <span className='footer-span'>Ready to book a consultation or have a question for us?</span>
            </div>
            <div className="footer-top-right">
                <img src="/logo1.png" alt="reception-logo" />
            </div>
        </div>
        <div className="footer-bottom">
           <div className="footer-bottom-left">
           <div className="explore-links">
               <h2>Explore</h2>
          </div>
           <div className="links-container">
        <ul>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/services">SERVICES</Link></li>
          <li><Link to="/album">ALBUMS</Link></li>
          <li><Link to="/contact">FAQ</Link></li>
        </ul>
        <ul>
          <li><Link to="/blog">BLOG</Link></li>
          <li><Link to="/team">TEAM</Link></li>
          <li><Link to="/privacy-policy">PRIVACY POLICY</Link></li>
          <li><Link to="/terms">TERMS OF CONDITIONS</Link></li>
        </ul>
      
    </div>
          </div>
          <div className="footer-bottom-right">
          <div className="explore-links">
               <h2>Connect</h2>
          </div>
           <div className="links-container">
        <ul>
          <li><Link to="/contact">CONTACT US</Link></li>
          <li><Link to="/services">INSTAGRAM</Link></li>
          <li><Link to="/albums">FACEBOOK</Link></li>
          <li><Link to="/faq">TWITTER</Link></li>
        </ul>
      
    </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;