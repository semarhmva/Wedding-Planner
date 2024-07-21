import React from 'react';
import '../styles/Footer.css'; 
const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-content">
            <div className="footer-left">
                <span className="contact-title">CONTACT US</span>
                <h2>Ready to book a consultation or have a question for us?</h2>
            </div>
            <div className="footer-right">
                <div className="footer-section">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="#about">ABOUT US</a></li>
                        <li><a href="#services">SERVICES</a></li>
                        <li><a href="#albums">ALBUMS</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#blog">BLOG</a></li>
                        <li><a href="#team">TEAM</a></li>
                        <li><a href="#privacy">PRIVACY POLICY</a></li>
                        <li><a href="#terms">TERM OF CONDITIONS</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="#contact">CONTACT US</a></li>
                        <li><a href="#instagram">INSTAGRAM</a></li>
                        <li><a href="#facebook">FACEBOOK</a></li>
                        <li><a href="#twitter">TWITTER</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-note">
            <span>© 2022 Company Name® Global Inc.</span>
        </div>
    </footer>

    );
};

export default Footer;