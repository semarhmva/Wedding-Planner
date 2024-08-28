import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanPage from "./pages/PlanPage"; 
import Navbar from "./components/home/Navbar";
import About from "./pages/About";
import BookNow from "./pages/BookNow";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import Album from "./pages/Album";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ServicesDetails from "./pages/ServicesDetails";


function App() {
  return (
      <div className="App">
        <Navbar />
        {/* Bütün səhifələr */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<div>Products</div>} />
          <Route path="/plan" element={<PlanPage />} />
          <Route path="/book" element={<BookNow />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/portfoliodetails" element={<PortfolioDetails/>} />
          <Route path="/privacy-policy" element={<Policy/>} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="/album" element={<Album/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/s-details" element={<ServicesDetails/>} />

          <Route path="*" element={<div>404 Not found</div>} />
          
        </Routes>
      </div>
    
  );
}

export default App;
