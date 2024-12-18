import React from 'react';
import Robot from '../ASSETS/robot-that-has-word-robot-it_113255-71703-removebg-preview.png'; // Check the path

const ProfileRecommendation = () => {
  return (
    <div className="max-w-full flex flex-wrap bg-gray-50">
      {/* Image Section - Left side */}
      <div className=" w-full sm:w-1/3 p-10 flex items-center justify-center mx-10">
        <img
          src={Robot} // Ensure the path is correct
          alt="Robot illustration"
          className="w-48 h-72 object-cover"
        />
      </div>

      {/* Cards Section - Middle part */}
      <div className="w-full sm:w-1/3  -mx-48 flex flex-col sm:items-start space-y-6">
        {/* Card 1 (Moved a bit down) */}
        <div className="relative border-2 border-black w-56 h-80 bg-white rounded-lg shadow-xl overflow-hidden z-10 mt-8">
          <div className="flex items-center justify-center h-full w-1/3"></div>
        </div>

        {/* Card 2 (Moved a bit up) */}
        
      </div>

      {/* Text Section - Right side */}
      <div className="w-full sm:w-1/3 p-10 flex flex-col mx-28 justify-center sm:pl-12">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6">
          AI-Powered Profile Recommendations
        </h2>
        <p className="text-gray-800 text-lg">
          Our AI algorithm evaluates multiple factors to recommend potential profiles based on your preferences.
          With real-time data processing, we ensure that each suggestion aligns with your interests, values, and lifestyle,
          providing a seamless matchmaking experience.
        </p>
      </div>
    </div>
  );
};

export default ProfileRecommendation;
