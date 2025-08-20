import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

// Services
import Services from "./pages/Services";
import UpholsteryCleaning from "./pages/UpholsteryCleaning";
import LeatherCleaning from "./pages/LeatherCleaning";
import CarpetPatchRepair from "./pages/CarpetPatchRepair";
import StainRemoval from "./pages/StainRemoval";
import CarSeatsSteamCleaning from "./pages/CarSeatsSteamCleaning";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />

        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Services Landing Page */}
          <Route path="/services" element={<Services />} />

          {/* Individual Service Pages */}
          <Route path="/upholstery-cleaning" element={<UpholsteryCleaning />} />
          <Route path="/leather-cleaning" element={<LeatherCleaning />} />
          <Route path="/carpet-patch-repair" element={<CarpetPatchRepair />} />
          <Route path="/stain-removal" element={<StainRemoval />} />
          <Route
            path="/car-seats-steam-cleaning"
            element={<CarSeatsSteamCleaning />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
