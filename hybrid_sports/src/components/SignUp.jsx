import React, { useState } from "react";
import SignIn from "./SignIn";
import { supabase } from "../supabaseClient"; // Import the Supabase client

const SignUp = ({ additionalClasses = "" }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    fullnames: '',
    password_hash: '',
    email: '',
    gender: '',
  });

  const handleSubmit = async () => {
    // Insert the form data into the 'users' table in Supabase
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          username: formData.username,
          fullnames: formData.fullnames,
          password_hash: formData.password_hash,
          email: formData.email,
          gender: formData.gender,
        }
      ]);
  
   
  };

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
          <div className="bg-transparent p-5 rounded shadow-md w-full max-w-lg mx-4">
            <form
              onSubmit={(e) => e.preventDefault()}
              onKeyPress={handleKeyPress}
            >
              <h2 className="font-poppins font-semibold text-[32px] text-white leading-[40px] w-full">
                Become a Coach or a Sparring Partner
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
              <label className="mt-4 text-white p-2 rounded">* Username:</label>
              <input 
                type="text" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />
              <label className="mt-4 text-white p-2 rounded">* Password:</label>
              <input 
                type="password" 
                name="password_hash" 
                value={formData.password_hash} 
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
              <label className="mt-4 text-white p-2 rounded">Gender:</label>
              <input 
                type="text" 
                name="gender" 
                value={formData.gender} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />

              {/* Optional SignIn component */}
              <SignIn />

              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-gray-500 text-white p-2 rounded btn-primary"
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={handleExit}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Exit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
