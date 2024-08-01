import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/home/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* // bütün səhifələr */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<div>Products</div>} />
       
       
       
       
       
       
       
       
        <Route path="*" element={<div>404 Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
