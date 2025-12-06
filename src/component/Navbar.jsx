import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-gray-200 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-2">
          <img 
            src="/images/logo.png" 
            alt="logo" 
            className="w-10 h-10 object-cover"
          />
          <h1 className="text-2xl font-bold text-blue-900 tracking-wide">
            SALAYO
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          <a href="#home" className="hover:text-blue-900">Home</a>
          <a href="#about" className="hover:text-blue-900">About</a>
          <a href="#resume" className="hover:text-blue-900">Resume</a>
          <a href="#skills" className="hover:text-blue-900">Skills</a>
          <a href="#services" className="hover:text-blue-900">Services</a>
          <a href="#portfolio" className="hover:text-blue-900">Portfolio</a>
          <a href="#contact" className="hover:text-blue-900">Contact</a>
          <a href="#blog" className="hover:text-blue-900">Blog</a>
        </div>

        {/* HAMBURGER ICON */}
        <div className="md:hidden text-blue-900 text-2xl cursor-pointer" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-gray-200 w-full flex flex-col space-y-4 py-6 px-6 font-medium transition-all duration-300 ${
          open ? "block" : "hidden"
        }`}
      >
        <a onClick={toggleMenu} href="#home" className="hover:text-blue-900">Home</a>
        <a onClick={toggleMenu} href="#about" className="hover:text-blue-900">About</a>
        <a onClick={toggleMenu} href="#resume" className="hover:text-blue-900">Resume</a>
        <a onClick={toggleMenu} href="#skills" className="hover:text-blue-900">Skills</a>
        <a onClick={toggleMenu} href="#services" className="hover:text-blue-900">Services</a>
        <a onClick={toggleMenu} href="#portfolio" className="hover:text-blue-900">Portfolio</a>
        <a onClick={toggleMenu} href="#contact" className="hover:text-blue-900">Contact</a>
        <a onClick={toggleMenu} href="#blog" className="hover:text-blue-900">Blog</a>
      </div>
    </nav>
  );
}
