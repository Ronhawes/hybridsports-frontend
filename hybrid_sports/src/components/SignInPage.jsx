import React, { useState } from "react";

const SignInPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted", formData);
        alert("Signed in successfully!");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
            <form className="bg-transparent p-5 rounded shadow-md" onSubmit={handleSubmit}>
                <h2 className="font-poppins font-semibold ss:text-[px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Sign In
                </h2>

                <label className="mt-4 text-white p-2 rounded">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black border p-2 mb-4 w-full"
                    required
                />

                <label className="mt-4 text-white p-2 rounded">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
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
            </form>
        </div>
    );
};

export default SignInPage;
