import React, { useState } from "react";
import SignIn from "./SignIn";

const Player2Registration = ({ additionalClasses = "" }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullnames: '',
    phoneNo: '',
    email: '',
    gender: '',
    institution: '',
  });
  const [result, setResult] = useState(""); // State to hold the submission result
  const [paymentResult, setPaymentResult] = useState(""); // State to handle payment result

  const handleExit = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
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
      const response = await fetch("http://localhost:2345/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (response.ok) {
        setResult("Registration successful!");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form. Please try again later.");
    }
  };

  // Function to simulate M-Pesa payment
  const handlePayment = () => {
    setPaymentResult("Processing M-Pesa payment...");

    // Simulate M-Pesa payment logic
    setTimeout(() => {
      setPaymentResult("M-Pesa payment successful!");
    }, 2000); // Simulate a delay of 2 seconds for payment processing
  };

  return (
    <>
      {/* Adjust button positioning to relative or within a container */}
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] border border-blue-800 bg-transparent rounded-[10px] hover:text-blue-800 outline-none ${additionalClasses}`}
        onClick={() => setShowForm(true)}
      >
        Sign up Now
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-transparent p-5 rounded shadow-md w-full max-w-lg mx-4 mt-8 max-h-[80vh] overflow-y-auto">
            <form onSubmit={onSubmit} onKeyPress={handleKeyPress}>
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
                className=" border p-2 mb-4 w-full"
                required
              />

              <label className="mt-4 text-white p-2 rounded">* Phone No:</label>
              <input
                type="tel"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                className=" border p-2 mb-4 w-full"
                required
              />

              <label className="mt-4 text-white p-2 rounded">* Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" border p-2 mb-4 w-full"
                required
              />

              <label className="mt-4 text-white p-2 rounded">* Gender:</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className=" border p-2 mb-4 w-full"
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
                className=" border p-2 mb-4 w-full"
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

            {/* M-Pesa Payment Section */}
            <div className="mt-8">
              <h3 className="font-poppins font-semibold text-[24px] text-white">
                Payment Options
              </h3>
              <p className="mt-4 text-white">Pay with M-Pesa:</p>
              <button
                className="mt-2 bg-green-500 text-white p-2 rounded w-full"
                onClick={handlePayment}
              >
                Pay with M-Pesa
              </button>
              {/* Display the payment result message */}
              <p className="mt-4 text-white">{paymentResult}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Player2Registration;
