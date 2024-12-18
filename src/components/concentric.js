import React from "react";
import element from '../ASSETS/Element.png'; // Adjust the path as needed

const ConcentricCircles = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-50"> {/* Added bg-gray-50 for light gray background */}
      {/* Feature Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start md:text-left mt-8 md:mt-0">
          {/* Description */}
          <h2 className="text-2xl font-bold text-center md:text-left mb-4">
            Feature Title
          </h2>
          <p className="text-lg text-gray-700 text-center md:text-left">
            This is the description of the feature. The concentric circles represent the dynamic flow and expansion of the feature. The image to the left showcases its visual representation. Learn more about how this feature works and how it can benefit you.
          </p>
        </div>

        {/* Right Side: Image and Concentric Circles */}
        <div className="w-full mb-60 py-20 px-10 right-20 md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0 relative">
          {/* Image (increased size and positioned to overlap the animation) */}
          <img
            src={element}
            alt="Feature Element"
            className="absolute z-10 w-110 h-110 item-left object-cover mb-6"
            style={{ top: "-100px" }} // Adjust to control the overlap
          />

          {/* Concentric Circles Animation */}
          <div className="relative flex px-60 mx-20 justify-center items-center z-0">
            {/* First Circle */}
            <div className="absolute w-20 h-20 rounded-full border-2 border-black animate-concentricCircle"></div> {/* Increased size */}
            {/* Second Circle */}
            <div
              className="absolute w-20 h-20 rounded-full border-2 border-black animate-concentricCircle"
              style={{ animationDelay: "0.5s" }}
            ></div> {/* Increased size */}
            {/* Third Circle */}
            <div
              className="absolute w-20 h-20 rounded-full border-2 border-black animate-concentricCircle"
              style={{ animationDelay: "1s" }}
            ></div> {/* Increased size */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcentricCircles;
