import React from 'react';
import '../styles/Header.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                MOMENTS
            </div>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#plan">PLAN</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#albums">ALBUMS</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
                </ul>
            </nav>
            <a href="#book" className="book-btn">Book Now</a>
        </header>
    );
};

export default Header;