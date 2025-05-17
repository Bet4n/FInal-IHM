import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Team from "./components/Team";
import History from "./components/History";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import CompAPi from "./components/CompAPi";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
         <Route path="/CompAPi" element={<CompAPi />} />
        <Route path="/team" element={<Team />} />
        <Route path="/history" element={<History />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
