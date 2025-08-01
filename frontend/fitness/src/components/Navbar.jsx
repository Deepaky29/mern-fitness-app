import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white bg-transparent px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-lime-400">
          <a href="#home">🏋️‍♂️ FitZone</a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
          <a href="#home" className="hover:text-lime-400">Home</a>
          <a href="#about" className="hover:text-lime-400">About</a>
          <a href="#explore" className="hover:text-lime-400">Explore</a>
        </div>

        {/* Contact Button - hidden on small, shown on md+ */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-lime-300 text-black font-semibold px-6 py-2 rounded-full hover:bg-lime-400 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start space-y-3 px-2">
          <a href="#home" className="hover:text-lime-400">Home</a>
          <a href="#about" className="hover:text-lime-400">About</a>
          <a href="#explore" className="hover:text-lime-400">Explore</a>
          <a
            href="#contact"
            className="bg-lime-300 text-black font-semibold px-5 py-2 rounded-full hover:bg-lime-400 transition"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
