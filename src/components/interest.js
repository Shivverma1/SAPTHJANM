import React from 'react';
import InterestImage from '../ASSETS/match.jpg'; // Replace with your image path

const InterestMatchingFeature = () => {
  return (
    <section className="relative flex items-center justify-center px-12 py-16 bg-gray-50">
      {/* Image Section */}
      <div className="relative w-1/2 flex justify-center overflow-hidden"> {/* Prevent overflow */}
        <img 
          src={InterestImage} 
          alt="Interest Matching" 
          className="rounded-lg shadow-lg w-80 h-100 object-cover"
        />

        {/* Animated Hearts */}
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className="absolute animate-heart-move"
            style={{
              animationDelay: `${index * 0.5}s`, // Stagger hearts vertically
              top: `${index * 20 + 5}%`,
              transform: 'translate(-50%, -50%)',
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30" // Adjust size
            height="30"
            fill="#ff4d4d"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ))}
      </div>

      {/* Text Section */}
      <div className="w-1/2 pl-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Discover Connections Based on Your Interests
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed">
          Dive into a community where shared passions bring people together.
          <br />
          Explore, engage, and build meaningful connections with like-minded individuals today.
        </p>
      </div>
    </section>
  );
};

export default InterestMatchingFeature;
