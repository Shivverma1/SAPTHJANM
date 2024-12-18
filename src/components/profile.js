import React, { useState } from 'react';

const ProfileForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    dateOfBirth: '',
    gender: '',
    location: '',
    preferences: '',
    profilePicture: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 1: Basic Information</h2>
            <label className="block mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <label className="block mb-2">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <label className="block mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <button type="button" onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 2: Preferences</h2>
            <label className="block mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <label className="block mb-2">Partner Preferences</label>
            <textarea
              name="preferences"
              value={formData.preferences}
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded"
            ></textarea>
            <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded mr-2">Back</button>
            <button type="button" onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Step 3: Profile Picture</h2>
            <label className="block mb-2">Upload Profile Picture</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 mb-4 border rounded"
            />
            <button type="button" onClick={prevStep} className="bg-gray-400 text-white px-4 py-2 rounded mr-2">Back</button>
            <button type="submit" onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
