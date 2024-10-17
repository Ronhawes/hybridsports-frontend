import React, { useState } from "react";
import SignIn from "./SignIn";

const Button = ({ additionalClasses = "" }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    partner: '',
    coach_Academy: '',
    phoneNo: '',
    gender: ''
  });
  const [result, setResult] = useState(""); // State to hold the submission result

  const handleExit = () => {
    setShowForm(false);
    setFormData({ fullName: '', age: '', partner: '', coach_Academy: '', phoneNo: '', gender: '' });
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
      fullName: formData.fullName,
      age: formData.age,
      partner: formData.partner,
      coach_Academy: formData.coach_Academy,
      phoneNo: formData.phoneNo,
      gender: formData.gender
    };

    try {
      const apiUrl = "http://localhost:2345/juniors/add";
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setResult("Registration successful!");
        setFormData({ fullName: '', age: '', partner: '', coach_Academy: '', phoneNo: '', gender:'' });
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
    <>
      <button
        type="button"
        className={`fixed  bottom-4  py-4 px-6 font-poppins font-medium text-[18px] border border-blue-800 bg-dimWhite rounded-[10px] hover:text-blue-800 outline-none ${additionalClasses}`}
        onClick={() => setShowForm(true)}
      >
        Sign up Now
      </button>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-transparent p-5 rounded shadow-md w-full max-w-lg mx-4 mt-8 max-h-[80vh] overflow-y-auto">
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
                name="fullName" 
                value={formData.fullName} 
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

              <label className="mt-4 text-white p-2 rounded">* Age:</label>
              <input 
                type="number" 
                name="age" 
                value={formData.age} 
                onChange={handleChange} 
                className="bg-white border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white p-2 rounded">* Coach/Academy:</label>
              <input 
                type="text"
                name="coach_Academy" 
                value={formData.coach_Academy} 
                onChange={handleChange} 
                className="bg-white border p-2 mb-4 w-full"
                required
              />

              <label className="mt-4 text-white p-2 rounded">* Partner:</label>
              <input 
                type="text" 
                name="partner" 
                value={formData.partner} 
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
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              
              

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
        </div>
      )}
    </>
  );
};

export default Button;
