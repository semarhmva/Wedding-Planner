import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/Navbar.css";

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    if (offset > navbarHeight) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';
  const colorClass = isHomePage ? 'white' : 'black';
  const buttonClass = isHomePage ? 'home' : 'other';
  const navbarClasses = `navbar ${isHomePage ? 'fixed' : ''} ${hidden ? 'hidden' : ''}`;
  const containerMarginClass = !isHomePage ? 'container-margin' : '';

  return (
    <div className={containerMarginClass}>
      <nav className={navbarClasses}>
        <div className="container">
          <div className={`logo ${colorClass}`}>MOMENTS</div>
          <div className={`nav-ul ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-links">
              <li>
                <NavLink to="/" exact activeClassName="active-link" className={`nav-link ${colorClass}`}>HOME</NavLink>
              </li>
              <li>
                <NavLink to="/plan" activeClassName="active-link" className={`nav-link ${colorClass}`}>PLAN</NavLink>
              </li>
              <li>
                <NavLink to="/services" activeClassName="active-link" className={`nav-link ${colorClass}`}>SERVICES</NavLink>
              </li>
              <li>
                <NavLink to="/album" activeClassName="active-link" className={`nav-link ${colorClass}`}>ALBUMS</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" activeClassName="active-link" className={`nav-link ${colorClass}`}>PORTFOLIO</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active-link" className={`nav-link ${colorClass}`}>CONTACT US</NavLink>
              </li>
            </ul>
          </div>
          <div className="btn">
            <NavLink to="/book" className={`book-btn ${buttonClass}`}>
              Book Now
            </NavLink>
          </div>
          <div className={`burger ${colorClass} ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
