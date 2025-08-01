import React from "react";

const ConnectEngageTransform = () => {
  return (
    <section className="bg-lime-400 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
          Connect Engage Transform
        </h2>
        <p className="text-gray-800 mb-6">
          Join the movement. Subscribe to receive exclusive fitness tips, programs, and transformations.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
  type="email"
  placeholder="Enter your email"
  className="w-full sm:w-auto px-5 py-3 rounded-full text-black placeholder-gray-600 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black transition"
/>
          <button
            type="submit"
            className="bg-black text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ConnectEngageTransform;
