import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const CoachSessionsButton = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    email: '',
    phoneNumber: '',
    paymentMethod: ''
  });
  const [sessions, setSessions] = useState([
    { id: 1, time: '9:00 AM - 10:00 AM', available: true },
    { id: 2, time: '10:00 AM - 11:00 AM', available: true },
    { id: 3, time: '11:00 AM - 12:00 PM', available: true },
    { id: 4, time: '1:00 PM - 2:00 PM', available: true },
 
  ]);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const formRef = useRef(null);

  const isFormComplete = () => {
    return (
      formData.fullName &&
      formData.idNumber &&
      formData.email &&
      formData.phoneNumber &&
      formData.paymentMethod &&
      selectedSessionId !== null
    );
  };

  const handleSubmit = () => {
    if (!isFormComplete()) {
      alert("Please fill in all the required details, select a session, and choose a payment method before submitting.");
      return;
    }

    // Update session availability to unavailable
    setSessions(prevSessions =>
      prevSessions.map(session =>
        session.id === selectedSessionId ? { ...session, available: false } : session
      )
    );

    alert("Booking successfully submitted!");
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleExit = () => {
    setShowForm(false);
  };

  const scrollTo = (position) => {
    if (formRef.current) {
      formRef.current.scrollBy({ top: position, behavior: 'smooth' });
    }
  };

  return (
    <>
      <button
        type="button"
        className="py-2 px-4 font-poppins font-medium text-[16px] text-blue-300 bg-transparent rounded-[10px] border border-blue-950 outline-none block flex items-center"
        onClick={() => setShowForm(true)}
      >
        <span className="flex items-center">
          Book Session
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 transform rotate-45" />
        </span>
      </button>

      {showForm && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center">
          <div className="bg-transparent p-5 rounded shadow-md w-full max-w-lg relative">
            <button
              type="button"
              onClick={() => scrollTo(-100)}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-600  p-2 rounded-full"
              style={{ zIndex: 10 }}
            >
              <FontAwesomeIcon icon={faArrowUp} />
            </button>

            <form
              className="bg-transparent p-5 rounded shadow-md w-full max-w-lg h-96 overflow-y-auto"
              onSubmit={(e) => e.preventDefault()}
              ref={formRef}
            >
              <h2 className="font-poppins font-semibold text-[24px] text-white">Book Your Session</h2>

              <label className="mt-4 text-white">Full names:</label>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                className="bg-dimWhite border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white">ID number:</label>
              <input 
                type="text" 
                name="idNumber" 
                value={formData.idNumber} 
                onChange={handleChange} 
                className="bg-dimWhite border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white">Email:</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="bg-dimWhite border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white">Phone Number:</label>
              <input 
                type="tel" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                className="bg-dimWhite border p-2 mb-4 w-full" 
                required 
              />

              <label className="mt-4 text-white">Choose a session:</label>
              <div className="bg-black border p-2 mb-4 w-full">
                {sessions.map(session => (
                  <div key={session.id} className="flex justify-between items-center">
                    <span className={`text-white ${!session.available && 'line-through'}`}>
                      {session.time}
                    </span>
                    {session.available && (
                      <button
                        type="button"
                        onClick={() => setSelectedSessionId(session.id)}
                        className={`ml-4 ${selectedSessionId === session.id ? 'bg-green-500' : 'bg-blue-500'} text-white p-1 rounded`}
                      >
                        {selectedSessionId === session.id ? 'Selected' : 'Book'}
                      </button>
                    )}
                  </div>
                ))}
              </div>

             
             
             
             
             
             
             
             
             
             
             
             
             
             
             

              <button
                type="button"
                onClick={handleSubmit}
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

            <button
              type="button"
              onClick={() => scrollTo(100)}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-600 text-white p-2 rounded-full"
              style={{ zIndex: 10 }}
            >
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CoachSessionsButton;
