import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { court } from "../assets"; // Ensure this imports your court image correctly

const Button = () => {
  const [showForm, setShowForm] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    email: '',
    phoneNumber: ''
  });
  const [showAllTickets, setShowAllTickets] = useState(false);

  // Generate 331 seats, all are available
  const seats = Array.from({ length: 331 }, (_, i) => ({
    id: i + 1,
    status: 'available',
  }));

  const handleSubmit = (ticketId) => {
    // Update the ticket status to booked
    setTickets(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === ticketId ? { ...ticket, status: 'booked' } : ticket
      )
    );

    alert("Ticket purchased successfully!");
    setShowForm(false); // Close form on successful submission
  };

  const handleExit = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <button
        type="button"
        className={`py-2 px-4 font-poppins font-medium text-[16px] text-blue-300 bg-transparent rounded-[10px] border border-blue-950 outline-none block flex items-center`}
        onClick={() => {
          setShowTickets(prev => !prev);
        }}
      >
        <span className="flex items-center">
          Tickets
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 transform rotate-45" />
        </span>
      </button>

      {showTickets && (
        <div className="mb-4">
          <h2 className="text-white">Available Tickets:</h2>
          <ul className="text-white">
            {seats
              .slice(0, showAllTickets ? seats.length : 5)
              .map(ticket => (
                <li key={ticket.id} className="flex justify-between">
                  <span>Ticket {ticket.id}: {ticket.status}</span>
                  {ticket.status === 'available' && (
                    <button
                      type="button"
                      className="ml-2 py-1 px-2 bg-blue-500 text-white rounded"
                      onClick={() => {
                        setShowForm(true);
                      }}
                    >
                      Book
                    </button>
                  )}
                </li>
              ))}
          </ul>
          <button
            type="button"
            className="mt-4 bg-blue-500 text-white py-1 px-4 rounded"
            onClick={() => setShowAllTickets(prev => !prev)}
          >
            {showAllTickets ? 'See Less Seats' : 'See More Seats Available'}
          </button>
        </div>
      )}

      {showForm && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-transparent p-5 rounded shadow-md flex w-full max-w-4xl">
            {/* Form Side */}
            <form
              className="w-1/2 p-5"
              onSubmit={(e) => e.preventDefault()} 
            >
              <h2 className="font-poppins font-semibold text-[24px] text-white">
                Tickets
              </h2>
              <p className="mt-4 text-white">Hybrid sports - a better place to showcase your event</p>

              <label className="mt-4 text-white">Full names:</label>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white">ID number:</label>
              <input 
                type="text" 
                name="idNumber" 
                value={formData.idNumber} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white">Email:</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white">Phone Number:</label>
              <input 
                type="tel" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                className="bg-black border p-2 mb-4 w-full" 
                required 
              />

              <button
                type="button"
                onClick={() => handleSubmit(seats.find(ticket => ticket.status === 'available').id)} 
                className="mt-4 bg-gray-500 text-white p-2 rounded"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={handleExit}
                className="mt-4 bg-gray-500 text-white p-2 rounded"
              >
                Exit
              </button>
            </form>

            {/* Image Side */}
            <div className="w-1/2 flex justify-center items-center">
              <img src={court} alt="Court" className="max-w-full max-h-full object-cover rounded" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Button;
