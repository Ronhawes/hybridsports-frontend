import React, { useState } from "react";
import SignIn from "./SignIn";

const PlayerRegistration = ({ additionalClasses = "" }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullnames: '',
    phoneNo: '',
    email: '',
    gender: '',
    institution: '',
  });
  const [result, setResult] = useState(""); // State to hold the submission result

  const handleExit = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  // Asynchronous form submission to your API
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const submissionData = {
      fullnames: formData.fullnames,
      phoneNo: formData.phoneNo,
      email: formData.email,
      gender: formData.gender,
      institution: formData.institution,
    };

    try {
      const apiUrl = "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/users/add";
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setResult("Registration successful!");
        event.target.reset();
      } else {
        const data = await response.json();
        setResult(`Error: ${data.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form. Please try again later.");
    }
  };

  return (
    <div className="mt-4">
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] border bg-slate-400 border-blue-800 bg-transparent rounded-[10px] hover:text-blue-800 outline-none ${additionalClasses}`}
        onClick={() => setShowForm(true)}
      >
        Sign up Now
      </button>
      {showForm && (
        <div className="bg-black bg-opacity-80 p-5 rounded shadow-md w-full max-w-lg mx-auto mt-4">
          <form
            onSubmit={onSubmit}
            onKeyPress={handleKeyPress}
          >
            <h2 className="font-poppins font-semibold text-[32px] text-white leading-[40px] w-full">
              Register as a Player
            </h2>
            <p className="mt-4 text-white p-2 rounded">Please fill in the details below</p>

            <label className="mt-4 text-white p-2 rounded">* Full names:</label>
            <input 
              type="text" 
              name="fullnames" 
              value={formData.fullnames} 
              onChange={handleChange} 
              className="bg-white border p-2 mb-4 w-full" 
              required 
            />

            <label className="mt-4 text-white p-2 rounded">* Phone No:</label>
            <input 
              type="tel" 
              name="phoneNo" 
              value={formData.phoneNo} 
              onChange={handleChange} 
              className="bg-white border p-2 mb-4 w-full" 
              required 
            />

            <label className="mt-4 text-white p-2 rounded">* Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="bg-white border p-2 mb-4 w-full" 
              required 
            />

            <label className="mt-4 text-white p-2 rounded">* Gender:</label>
            <select 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange} 
              className="bg-white border p-2 mb-4 w-full"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label className="mt-4 text-white p-2 rounded">* Institution:</label>
            <input 
              type="text" 
              name="institution" 
              value={formData.institution} 
              onChange={handleChange} 
              className="bg-white border p-2 mb-4 w-full" 
              required 
            />

            {/* Optional SignIn component */}
            <SignIn />

            <button
              type="submit"
              className="mt-4 bg-gray-500 text-white p-2 rounded btn-primary"
            >
              Submit
            </button>

            {/* Display the result message */}
            <p className="mt-4 text-white">{result}</p>

            <button
              type="button"
              onClick={handleExit}
              className="mt-4 bg-gray-500 text-white p-2 rounded"
            >
              Exit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PlayerRegistration;
