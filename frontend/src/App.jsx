import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About"; // ✅ Import About page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> {/* ✅ Added About page */}
          {/* You can add Services, FAQ, etc. later */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
