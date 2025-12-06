import React from 'react';


export default function Navbar() {
  return (
    <nav className="bg-gray-200 shadow-md transition-colors">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">ServerlessDev</div>
        <div className="flex items-center space-x-6">
          <a href="#home" className="hover:text-indigo-600 dark:hover:text-indigo-400">Home</a>
          <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
          <a href="#resume" className="hover:text-indigo-600 dark:hover:text-indigo-400">Resume</a>
          <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400">Skills</a>
          <a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400">Services</a>
          <a href="#portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-400">Portfolio</a>
          <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
          
        </div>
      </div>
    </nav>
  );
}
