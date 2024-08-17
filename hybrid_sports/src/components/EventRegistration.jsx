import React, { useState } from "react";

const Button = ({ additionalClasses = "", children }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = () => {
    // Add your submission logic here
    console.log("Form submitted");
  };

  const handleExit = () => {
    setShowForm(false);
  };

  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${additionalClasses}`}
        onClick={() => setShowForm(true)}
      >
        {children}
      </button>
      {showForm && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <form
            className="bg-transparent p-5 rounded shadow-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <h2 className="font-poppins font-semibold ss:text-[px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              Register Your Event
            </h2>
            <p>Hybrid sports- a better place to showcase your event</p>

            <label className="block mb-2">Name of the Event:</label>
            <input type="text" className="bg-black border p-2 mb-4 w-full" required />

            <label className="block mb-2">Type of Sport:</label>
            <input type="text" className="bg-black border p-2 mb-4 w-full" required />

            <label className="block mb-2">Email:</label>
            <input type="email" className="bg-black border p-2 mb-4 w-full" required />

            <label className="block mb-2">Phone Number:</label>
            <input type="tel" className="bg-black border p-2 mb-4 w-full" required />

            <label className="block mb-2">Date of Event:</label>
            <input type="date" className="bg-black border p-2 mb-4 w-full" required />

            {/* Submit button with onClick */}
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blend-darken btn btn-primary"
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
      )}
    </>
  );
};

export default Button;