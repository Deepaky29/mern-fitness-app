import React from 'react';
import TrainerImage from '../assets/trainer.png'; // Update this path to your actual image

const features = [
  'Nutrition Guidance',
  'Expert Trainers',
  'Progress Tracking',
  'Community Support',
  'Fitness Methods Suited to You',
];

const InspireSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-lime-400 mb-6 leading-snug">
            Inspired to <br /> Inspire Your Best Self
          </h2>
          <p className="text-gray-300 mb-8">
            Where your mindset is as strong as your physique. Our coaching blends mental toughness with
            physical strength to help you exceed your limits.
          </p>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-lg transition-all duration-300 hover:translate-x-2 cursor-pointer group"
              >
                <span className="text-lime-400 group-hover:text-white">✔️</span>
                <span className="group-hover:text-lime-400">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center">
          <img
            src={TrainerImage}
            alt="Trainer"
            className="w-full max-w-sm rounded-xl border-2 border-lime-400 shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default InspireSection;
