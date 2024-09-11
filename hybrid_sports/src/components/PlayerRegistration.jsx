import React, { useState } from "react";
import SignIn from "./SignIn";

const PlayerRegistration = ({ additionalClasses = "" }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullnames: '',
    phoneNo: '',
    sport: '',
    email: '',
    gender: '',
    role: '',
    bio: '',
    profilePicture: null // State to hold the profile picture
  });
  const [result, setResult] = useState(""); // State to hold the submission result

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

  // Asynchronous form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "b555f569-3d2d-49a8-8c7b-8a6e652a1722");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Under review");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className={`fixed bottom-4 right-4 py-4 px-6 font-poppins font-medium text-[18px] border border-blue-800 bg-transparent rounded-[10px] hover:text-blue-800 outline-none ${additionalClasses}`}
        onClick={() => setShowForm(true)}
      >
        Sign up Now
      </button>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-transparent p-5 rounded shadow-md w-full max-w-lg mx-4 mt-8 max-h-[80vh] overflow-y-auto"> {/* Set max height and enable vertical scroll */}
            <form
              onSubmit={onSubmit} // Attach the async submission handler
              onKeyPress={handleKeyPress}
            >
              <h2 className="font-poppins font-semibold text-[32px] text-white leading-[40px] w-full">
                Register as a Player/Coach/academy
              </h2>
              <p className="mt-4 text-white p-2 rounded">Please fill in the details below</p>

              <label className="mt-4 text-white p-2 rounded">* Full names:</label>
              <input 
                type="text" 
                name="fullnames" 
                value={formData.fullnames} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white p-2 rounded">* Phone No:</label>
              <input 
                type="tel" 
                name="phoneNo" 
                value={formData.phoneNo} 
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

              <label className="mt-4 text-white p-2 rounded">* Email:</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white p-2 rounded">* Gender:</label>
              <select 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label className="mt-4 text-white p-2 rounded">* Role:</label>
              <select 
                name="role" 
                value={formData.role} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full"
                required
              >
                <option value="">Select Role</option>
                <option value="coach">Coach</option>
                <option value="player">Player</option>
                <option value="academy">Academy</option>
              </select>

              <label className="mt-4 text-white p-2 rounded">Bio / More Info:</label>
              <textarea 
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="bg-black border p-2 mb-4 w-full"
                required
              />

              

              {/* Optional SignIn component */}
              <SignIn />

              {/* Submit button with onClick */}
              <button
                type="submit" // Changed to "submit" for the form submission
                className="mt-4 bg-gray-500 text-white p-2 rounded btn-primary"
              >
                Submit
              </button>

              {/* Display the result message */}
              <p className="mt-4 text-white">{result}</p>

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

export default PlayerRegistration;
