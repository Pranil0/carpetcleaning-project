import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Import Link
import cleaninglogo from "../assets/cleaninglogo.png";

const Navbar = () => {
  return (
    <header className="w-full shadow-sm">
      {/* Top Info Bar */}
      <div className="bg-[#4977E5] text-white text-[13px] px-4 py-2 hidden md:flex justify-between items-center">
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <FaFacebookF className="cursor-pointer transition-all duration-200 transform hover:text-[#1877F2] hover:scale-110" />
          <FaTwitter className="cursor-pointer transition-all duration-200 transform hover:text-[#1DA1F2] hover:scale-110" />
          <FaInstagram className="cursor-pointer transition-all duration-200 transform hover:text-[#E1306C] hover:scale-110" />
        </div>

        {/* Contact Info */}
        <div className="flex items-center space-x-6 font-medium">
          <span className="flex items-center gap-1">
            <FaPhoneAlt /> (91) 98765 4321 54
          </span>
          <span className="flex items-center gap-1">
            <FaEnvelope /> support@mail.com
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> 380 Albart ST, AU
          </span>
          <span className="flex items-center gap-1">
            <FaClock /> Sunday–Friday 9:00am–10pm
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white px-6 py-4 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={cleaninglogo} alt="Cleaning Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-semibold text-gray-800">
          <Link
            to="/"
            className="relative group hover:text-[#4977E5] transition-colors duration-200"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4977E5] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/services"
            className="relative group hover:text-[#4977E5] transition-colors duration-200"
          >
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4977E5] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/commercial"
            className="relative group hover:text-[#4977E5] transition-colors duration-200"
          >
            Commercial
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4977E5] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/about"
            className="relative group hover:text-[#4977E5] transition-colors duration-200"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4977E5] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/contact"
            className="relative group hover:text-[#4977E5] transition-colors duration-200"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4977E5] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/faq"
            className="relative group hover:text-[#4977E5] transition-colors duration-200"
          >
            FAQ
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#4977E5] group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <FaSearch className="text-gray-600 text-lg cursor-pointer hover:text-[#4977E5] transform transition-all duration-200 hover:scale-110" />
          <div className="border-l h-6 hidden md:block" />
          <button className="bg-[#4977E5] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transform transition-all duration-200 hover:bg-[#3b65cc] hover:scale-105">
            Book Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
