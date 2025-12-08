import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggleMenu = () => setOpen(!open);

  // Scroll to a section, even if user is not on the homepage
  const handleScroll = (id) => {
    setOpen(false);

    if (pathname !== "/") {
      // Navigate to homepage first
      navigate("/");

      // Small delay so the page loads before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      // Already on homepage → scroll directly
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-200 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-10">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll("home")}>
          <img 
            src="/assets/logotp.png" 
            alt="logo" 
            className="w-50 h-10 object-cover"
          />
          <h1 className="text-2xl font-bold text-blue-900 tracking-wide">
            
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {[
            ["home", "Home"],
            ["about", "About"],
            ["resume", "Resume"],
            ["skills", "Skills"],
            ["services", "Services"],
            ["portfolio", "Portfolio"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="hover:text-blue-900"
            >
              {label}
            </button>
          ))}
        </div>

        {/* HAMBURGER ICON */}
        <div
          className="md:hidden text-blue-900 text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-200 w-full flex flex-col space-y-4 py-6 px-6 font-medium transition-all duration-300">
          {[
            ["home", "Home"],
            ["about", "About"],
            ["resume", "Resume"],
            ["skills", "Skills"],
            ["services", "Services"],
            ["portfolio", "Portfolio"],
            ["contact", "Contact"],
          ].map(([id, label]) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="hover:text-blue-900 text-left"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
