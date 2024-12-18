import React from 'react';

const CircularWaveEffect = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-gray-100">
      {/* Container for wave effect */}
      <div className="absolute w-32 h-32 bg-black rounded-full animate-waveExpansion"></div>
      
      {/* Optional Text */}
      <div className="relative z-10 text-center text-xl font-bold text-gray-700">
        <p>Signal Wave Effect</p>
      </div>
    </div>
  );
};

export default CircularWaveEffect;
