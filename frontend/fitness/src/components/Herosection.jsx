import React from 'react';
import fit1 from '../assets/fit1.jpg';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white min-h-screen flex items-center justify-center px-4 py-10"
      style={{ backgroundImage: `url(${fit1})` }} // ✅ Background image directly on section
    >
      {/* Overlay (Optional dark filter) */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      
      {/* Overlay Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto mt-[-60px]">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Sculpt <span className="text-lime-300">Your Body</span>,<br />
          Elevate <span className="text-lime-300">Your Spirit</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Join over 12K+ athletes sculpting their dream physique with proven training programs.
        </p>

        {/* CTA Buttons */}
        <div className="mt-16 flex justify-center gap-4">
          <a href="#contact">
  <button className="bg-lime-300 text-black font-semibold px-6 py-3 rounded-full hover:bg-lime-400 transition">
    Start 7-Day Trial
  </button>
</a>
          <button className="border border-lime-300 text-lime-300 px-6 py-3 rounded-full hover:bg-lime-400 hover:text-black transition">
            Get Started
          </button>
        </div>
      </div>

      {/* Bigger Vertical Navigation Arrows */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 rotate-90 origin-left text-lime-300 text-2xl md:text-3xl cursor-pointer">
        PREV
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 -rotate-90 origin-right text-lime-300 text-2xl md:text-3xl cursor-pointer">
        NEXT
      </div>
    </section>
  );
};

export default HeroSection;
