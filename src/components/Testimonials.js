import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">What Our Users Say</h2>
        <div className="space-y-8">
          <div className="testimonial p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img src="/path/to/user-image.jpg" alt="User 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <p className="text-gray-700 mb-4">"I found the perfect match, thanks to the easy messaging and video call features!"</p>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">Joined: January 2024</p>
          </div>
          <div className="testimonial p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <img src="/path/to/user-image.jpg" alt="User 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <p className="text-gray-700 mb-4">"The AI-based recommendations helped me connect with someone I truly vibe with!"</p>
            <p className="font-semibold">Jane Smith</p>
            <p className="text-sm text-gray-500">Joined: March 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
