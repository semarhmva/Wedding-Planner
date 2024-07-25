import React from 'react'
import '../../styles/Navbar.css'
function Navbar() {
  return (
    <nav className='container'>
        <div className="logo">MOMENTS</div>
        <ul className="nav-links">

                    <li><a href="#home">HOME</a></li>
                    <li><a href="#plan">PLAN</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#albums">ALBUMS</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#contact">CONTACT US</a></li>
        </ul>
           <a href="#book" className="book-btn">Book Now</a>
    </nav>
  )
}

export default Navbar