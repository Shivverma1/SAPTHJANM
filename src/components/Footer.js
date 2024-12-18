import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="/privacy" className="text-gray-400 hover:text-white mx-4">
            Privacy Policy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-4">
            Terms of Service
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-4">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
