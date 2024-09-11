import React, { useState } from "react";

const SignInButton = ({ additionalClasses = "" }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log("Form submitted", formData);
    alert("Signed in successfully!");
    setShowForm(false); // Close form on successful submission
  };

  const handleExit = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <button
        type="button"
        className={`py-4 px-6 font-poppins font-medium text-[18px] text-dimWhite border border-blue-800 bg-transparent rounded-[10px] hover:text-blue-800 outline-none ${additionalClasses}`}

        onClick={() => setShowForm(true)}
      >
        Sign In
      </button>
      {showForm && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <form key="sign-in-form" className="bg-transparent p-5 rounded shadow-md" onSubmit={handleSubmit}>
            <h2 className="font-poppins font-semibold ss:text-[px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              Sign In
            </h2>

            <label className="mt-4 text-white p-2 rounded">Email:</label>
            <input
              type="email"
              name="email"
              defaultValue={formData.email}
              onChange={handleChange}
              className="bg-black border p-2 mb-4 w-full"
              required
            />

            <label className="mt-4 text-white p-2 rounded">Password:</label>
            <input
              type="password"
              name="password"
              defaultValue={formData.password}
              onChange={handleChange}
              className="bg-black border p-2 mb-4 w-full"
              required
            />

            <button
              type="submit"
              className="mt-4 bg-gray-500 text-white p-2 rounded btn-primary"
            >
              Sign In
            </button>

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

export default SignInButton;