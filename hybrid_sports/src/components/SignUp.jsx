import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign up logic here
    console.log("Sign up successful");
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <form
        className="bg-transparent p-5 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="font-poppins font-semibold ss:text-[px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Sign Up
        </h2>

        <label className="block mb-2">Full Names :</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="bg-black border p-2 mb-4 w-full" required />

        <label className="block mb-2">Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-black border p-2 mb-4 w-full" required />

        <label className="block mb-2">Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-black border p-2 mb-4 w-full" required />

        <button
          type="submit"
          className="bg-blend-darken btn btn-primary"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;