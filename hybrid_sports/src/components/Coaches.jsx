import React, { useState } from "react";
import SignIn from "./SignIn";


const CoachRegistration = ({ additionalClasses = "" }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    sport: '',
    email: '',
    phoneNumber: '',
    bio: '',
    profilePicture: null // State to hold the profile picture
  });

  const handleSubmit = () => {
    // Add your submission logic here (e.g., send data to API)
    console.log("Form submitted", formData);
    alert("Registration successful!");
    setShowForm(false); // Close form on successful submission
  };

  const handleExit = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prevState => ({ ...prevState, profilePicture: file })); // Update profile picture state
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] border border-blue-800 bg-transparent rounded-[10px] hover:text-blue-800 outline-none ${additionalClasses}`}

        onClick={() => setShowForm(true)}
      >
        Sign up Now
      </button>
      {showForm && (
        <div className="absolute inset-1 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-transparent p-5 rounded shadow-md w-full max-w-lg mx-4"> {/* Center the form with margins */}
            <form
              onSubmit={(e) => e.preventDefault()} // Prevent default form submission
              onKeyPress={handleKeyPress} // Prevent default form submission on Enter key press
            >
              <h2 className="font-poppins font-semibold text-[32px] text-white leading-[40px] w-full">
                Become a Coach or a Sparring Partner
              </h2>
              <p className="mt-4 text-white p-2 rounded">Please fill in the details below</p>

              <label className="mt-4 text-white p-2 rounded">* First name:</label>
              <input 
                type="text" 
                name="firstname" 
                value={formData.firstname} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />
              <label className="mt-4 text-white p-2 rounded">* Last name:</label>
              <input 
                type="text" 
                name="lastname" 
                value={formData.lastname} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />
              <label className="mt-4 text-white p-2 rounded">* password:</label>
              <input 
                type="text" 
                name="lastname" 
                value={formData.lastname} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white p-2 rounded">* Sport:</label>
              <input 
                type="text" 
                name="sport" 
                value={formData.sport} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white p-2 rounded">Email:</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white p-2 rounded">Tel No:</label>
              <input 
                type="tel" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />
              <label className="mt-4 text-white p-2 rounded">Bio / Tell us more about yourself:</label>
              <textarea 
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="bg-black border p-2 mb-4 w-full"
                required
              />

              {/* Profile Picture Upload */}
              <label className="mt-4 text-white p-2 rounded">Profile Picture:</label>
              <input 
                type="file" 
                name="profilePicture" 
                accept="image/*" // Accept image files
                onChange={handleFileChange} 
                className="bg-black border p-2 mb-4 w-full" 
              />

              {/* Optional SignIn component */}
              <SignIn />

              {/* Submit button with onClick */}
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-4 bg-gray-500 text-white p-2 rounded btn-primary"
              >
                Submit
              </button>

              {/* Exit button to go back to home */}
              <button
                type="button"
                onClick={handleExit}
                className="mt-4 bg-gray-500 text-white p-2 rounded"
              >
                Exit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CoachRegistration;
