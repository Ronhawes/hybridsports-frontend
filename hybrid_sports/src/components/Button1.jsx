import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const CoachSessionsButton = ({ coachName }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    idNo: '',
    email: '',
    phoneNo: '',
  });
  const [sessions, setSessions] = useState([
    { id: 1, time: '9:00 AM - 10:00 AM', available: true },
    { id: 2, time: '10:00 AM - 11:00 AM', available: true },
    { id: 3, time: '11:00 AM - 12:00 PM', available: true },
    { id: 4, time: '1:00 PM - 2:00 PM', available: true },
  ]);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [result, setResult] = useState("");
  const formRef = useRef(null); // Reference for scrolling

  useEffect(() => {
    document.body.style.overflow = showForm ? 'hidden' : 'auto';
  }, [showForm]);

  const isFormComplete = () => {
    return (
      formData.fullName &&
      formData.idNo &&
      formData.email &&
      formData.phoneNo &&
      selectedSessionId !== null
    );
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!isFormComplete()) {
      alert("Please fill in all the required details and select a session before submitting.");
      return;
    }

    setResult("Sending...");

    try {
      const apiUrl = "http://localhost:2345/coachesBooking/Add";
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          idNo: formData.idNo,
          email: formData.email,
          phoneNo: formData.phoneNo,
          time: sessions.find(session => session.id === selectedSessionId).time,
          coach: coachName,
        }),
      });

      if (response.ok) {
        setSessions(prevSessions =>
          prevSessions.map(session =>
            session.id === selectedSessionId ? { ...session, available: false } : session
          )
        );
        setResult("Booking successfully submitted!");
        handleExit();
      } else {
        const errorData = await response.json();
        setResult(`Error: ${errorData.message || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleExit = () => {
    setShowForm(false);
    setFormData({
      fullName: '',
      idNo: '',
      email: '',
      phoneNo: '',
    });
    setSelectedSessionId(null);
    setResult("");
  };

  // Scroll functions
  const scrollUp = () => {
    if (formRef.current) {
      formRef.current.scrollTop -= 100; // Scroll up by 100px
    }
  };

  const scrollDown = () => {
    if (formRef.current) {
      formRef.current.scrollTop += 100; // Scroll down by 100px
    }
  };

  return (
    <>
      <button
        type="button"
        className="py-2 px-4 font-poppins font-medium text-[16px] text-blue-300 bg-transparent rounded-[10px] border border-blue-950"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close Booking Form" : "Book a Session"}
        <FontAwesomeIcon icon={showForm ? faArrowUp : faArrowDown} className="ml-2" />
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-auto overflow-y-auto h-[80vh] relative">
            <div ref={formRef} className="overflow-y-auto h-[70vh]">
              <form onSubmit={onSubmit}>
                <div className="mb-2">
                  <label>
                    Full Name:
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="border border-gray-300 rounded p-1 w-full mt-1"
                    />
                  </label>
                </div>
                <div className="mb-2">
                  <label>
                    ID Number:
                    <input
                      type="text"
                      name="idNo"
                      value={formData.idNo}
                      onChange={handleChange}
                      required
                      className="border border-gray-300 rounded p-1 w-full mt-1"
                    />
                  </label>
                </div>
                <div className="mb-2">
                  <label>
                    Email:
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border border-gray-300 rounded p-1 w-full mt-1"
                    />
                  </label>
                </div>
                <div className="mb-2">
                  <label>
                    Phone Number:
                    <input
                      type="tel"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleChange}
                      required
                      className="border border-gray-300 rounded p-1 w-full mt-1"
                    />
                  </label>
                </div>
                <div className="mb-2" style={{ display: 'none' }}>
                  <label>Coach Name:</label>
                  <input
                    type="text"
                    name="coach"
                    value={coachName}  // Use the coachName prop
                    readOnly
                    className="border border-gray-300 rounded p-1 w-full mt-1"
                  />
                </div>
                <div className="mt-2">
                  <label>Select a Session:</label>
                  <div className="flex flex-col mt-1">
                    {sessions.map((session) => (
                      <div key={session.id} className="mb-1">
                        <input
                          type="radio"
                          id={`session-${session.id}`}
                          name="session"
                          value={session.id}
                          onChange={() => setSelectedSessionId(session.id)}
                          disabled={!session.available}
                        />
                        <label htmlFor={`session-${session.id}`} className={!session.available ? "line-through" : ""}>
                          {session.time} {session.available ? "" : "(Unavailable)"}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-blue-500 text-white rounded"
                  >
                    Submit Booking
                  </button>
                  <button
                    type="button"
                    onClick={handleExit}
                    className="py-2 px-4 bg-red-500 text-white rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
              {result && <div className="mt-2 text-red-500">{result}</div>}
            </div>
            {/* Scroll buttons */}
            <div className="absolute top-1/2 left-1 z-10 transform -translate-y-1/2">
              <button onClick={scrollUp} className="p-2 bg-blue-500 text-white rounded-full">
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
            <div className="absolute top-1/2 right-1 z-10 transform -translate-y-1/2">
              <button onClick={scrollDown} className="p-2 bg-blue-500 text-white rounded-full">
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoachSessionsButton;
