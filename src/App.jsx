import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlanPage from "./pages/PlanPage"; 
import Navbar from "./components/home/Navbar";
import About from "./pages/About";

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

          <Route path="*" element={<div>404 Not found</div>} />
        </Routes>
      </div>
    
  );
}

export default App;
