import React, { useState } from 'react';
import styles from "../style";
import Navbar from './Navbar';
import Footer from './Footer';
import Testimonials from './Testimonials';

const CourtRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    sport: "",
    numberOfCourts: "",
    charges: "",
    daysOfOperation: "",
    courtManagerName: "",
    courtManagerPhone: "",
    courtManagerEmail: "",
    blockBooking: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Court Registered:", formData);
    // Add the logic to handle court registration (e.g., send data to a server or update state)
    // Reset the form after submission
    setFormData({
      name: "",
      sport: "",
      numberOfCourts: "",
      charges: "",
      daysOfOperation: "",
      courtManagerName: "",
      courtManagerPhone: "",
      courtManagerEmail: "",
      blockBooking: "",
    });
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">Court Registration</h1>
        <p className="text-lg mb-8 text-blue-800">
          Register a new court by providing the required details below.
        </p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name of the Club/Institution/Facility
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="sport">
              Type of Sport
            </label>
            <input
              type="text"
              name="sport"
              value={formData.sport}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter type of sport"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="numberOfCourts">
              Number of Courts
            </label>
            <input
              type="number"
              name="numberOfCourts"
              value={formData.numberOfCourts}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter number of courts"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="charges">
              Charges
            </label>
            <input
              type="text"
              name="charges"
              value={formData.charges}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter charges"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="daysOfOperation">
              Days of Operation (Day, Time, Availability)
            </label>
            <input
              type="text"
              name="daysOfOperation"
              value={formData.daysOfOperation}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter days of operation"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="courtManagerName">
              Court Manager Name
            </label>
            <input
              type="text"
              name="courtManagerName"
              value={formData.courtManagerName}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter court manager name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="courtManagerPhone">
              Court Manager Phone
            </label>
            <input
              type="tel"
              name="courtManagerPhone"
              value={formData.courtManagerPhone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter court manager phone"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="courtManagerEmail">
              Court Manager Email
            </label>
            <input
              type="email"
              name="courtManagerEmail"
              value={formData.courtManagerEmail}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter court manager email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="blockBooking">
              Block Booking
            </label>
            <input
              type="text"
              name="blockBooking"
              value={formData.blockBooking}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter block booking details"
              required
            />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Register Court
          </button>
        </form>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CourtRegistration;
