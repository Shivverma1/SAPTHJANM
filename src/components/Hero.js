import React, { useState, useEffect } from 'react';
import couple from '../ASSETS/CVV.avif'; // Import the image from the ASSETS folder
import couple2 from '../ASSETS/CVV1.avif'; // Import additional images for the carousel
import couple3 from '../ASSETS/CVV3.avif';
import couple4 from '../ASSETS/CVV2.avif';
import couple5 from '../ASSETS/CVV4.avif'; // Corrected to 'couple5'

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [couple, couple2, couple3, couple4, couple5]; // Array of images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change image every 3 seconds
  
    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, [images.length]); // Include images.length as a dependency
  
 

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="h-screen bg-cover bg-center flex justify-center">
      {/* Increased Length Rectangular Card */}
      <div className="bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900/80 dark:to-gray-800 mt-14 w-[1300px] h-[600px] max-w-[90%] rounded-lg shadow-lg min-h-[80vh] transform hover:shadow-2xl relative">
        {/* Image Carousel with Sliding Effect */}
        <div className="absolute top-20 right-10 w-[600px] h-[600px] rounded-3xl overflow-hidden shadow-lg z-10">
          <div className="relative flex transition-transform duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Couple ${index}`}
                className="w-full h-full object-cover"
              />
            ))}
          </div>

          {/* Left and Right Scroll Buttons */}
          <button 
            onClick={handlePrev} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-500 p-3 rounded-full shadow-lg hover:bg-gray-600"
          >
            &lt;
          </button>
          <button 
            onClick={handleNext} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-500 p-3 rounded-full shadow-lg hover:bg-gray-600"
          >
            &gt;
          </button>

          {/* Dot Navigation inside the image card */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full cursor-pointer ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-400'}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-300/80 to-gray-100 dark:from-gray-900/80 dark:to-gray-800 rounded-lg"></div>

        {/* Text Content with absolute positioning at the bottom */}
        <div className="absolute bottom-10 left-8 text-blue-600 text-left z-20">
          <h1 className="text-4xl font-bold mb-5">Find Your Perfect Match</h1>
          <p className="text-2xl mb-8">
            Join us today to explore a world of possibilities<br />
            and connect with like-minded people.
          </p>

          {/* Button Section */}
          <div className="flex justify-start gap-8">
            <button className="bg-blue-600 text-white py-4 px-12 rounded-md hover:bg-blue-700 transition duration-300">
              Explore
            </button>
            <button className="bg-gray-300 text-gray-700 py-4 px-12 rounded-md hover:bg-gray-400 transition duration-300">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
