import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/Navbar.css";

function Navbar() {
  const [hidden, setHidden] = useState(false);
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClasses = location.pathname !== '/' || hidden ? 'nav-link black' : 'nav-link';
  const logoClasses = location.pathname !== '/' || hidden ? 'logo black' : 'logo';

  return (
    <nav className={`navbar ${hidden ? 'hidden' : ''}`}>
      <div className="container">
        <div className={logoClasses}>MOMENTS</div>
        <div className="nav-ul">
          <ul className="nav-links">
            <li>
              <NavLink to="/" exact activeClassName="active-link" className={navLinkClasses}>HOME</NavLink>
            </li>
            <li>
              <NavLink to="/plan" activeClassName="active-link" className={navLinkClasses}>PLAN</NavLink>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active-link" className={navLinkClasses}>SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/albums" activeClassName="active-link" className={navLinkClasses}>ALBUMS</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active-link" className={navLinkClasses}>PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link" className={navLinkClasses}>CONTACT US</NavLink>
            </li>
          </ul>
        </div>
        <div className="btn">
          <a href="#book" className={`book-btn ${hidden ? 'black' : ''}`}>
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
