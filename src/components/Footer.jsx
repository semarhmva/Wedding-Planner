import React from 'react';
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
          <li><a href="/about">ABOUT US</a></li>
          <li><a href="/services">SERVICES</a></li>
          <li><a href="/albums">ALBUMS</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
        <ul>
          <li><a href="/blog">BLOG</a></li>
          <li><a href="/team">TEAM</a></li>
          <li><a href="/privacy-policy">PRIVACY POLICY</a></li>
          <li><a href="/terms-conditions">TERMS OF CONDITIONS</a></li>
        </ul>
      
    </div>
          </div>
          <div className="footer-bottom-right">
          <div className="explore-links">
               <h2>Connect</h2>
          </div>
           <div className="links-container">
        <ul>
          <li><a href="/about">CONTACT US</a></li>
          <li><a href="/services">INSTAGRAM</a></li>
          <li><a href="/albums">FACEBOOK</a></li>
          <li><a href="/faq">TWITTER</a></li>
        </ul>
      
    </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;