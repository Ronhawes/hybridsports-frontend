import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { court } from "../assets";

const CourtSessionsButton = ({ courtName }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    idNo: "",
    email: "",
    phoneNo: "",
    day: "", // New day field added here
  });
  const [sessions, setSessions] = useState([
    { id: 1, time: "9:00 AM - 10:00 AM", available: true },
    { id: 2, time: "10:00 AM - 11:00 AM", available: true },
    { id: 3, time: "11:00 AM - 12:00 PM", available: true },
    { id: 4, time: "1:00 PM - 2:00 PM", available: true },
  ]);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [result, setResult] = useState("");
  const formRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
  }, [showForm]);

  const isFormComplete = () =>
    formData.fullName &&
    formData.idNo &&
    formData.email &&
    formData.phoneNo &&
    formData.day && // Ensure day is selected
    selectedSessionId !== null;

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!isFormComplete()) {
      alert(
        "Please fill in all the required details, select a day, and choose a session before submitting."
      );
      return;
    }

    setResult("Sending...");

    try {
      const apiUrl = "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/courts/Add";
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          time: sessions.find((s) => s.id === selectedSessionId).time,
          court: courtName,
        }),
      });

      if (response.ok) {
        setSessions((prevSessions) =>
          prevSessions.map((session) =>
            session.id === selectedSessionId
              ? { ...session, available: false }
              : session
          )
        );
        setResult("Booking successfully submitted!");
        setTimeout(() => setResult(""), 5000);
        handleExit();
      } else {
        const errorData = await response.json();
        setResult(`Error: ${errorData.message || "Something went wrong"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form. Please try again later.");
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleExit = () => {
    setShowForm(false);
    setFormData({ fullName: "", idNo: "", email: "", phoneNo: "", day: "" });
    setSelectedSessionId(null);
    setResult("");
  };

  const scrollUp = () => (formRef.current.scrollTop -= 50);
  const scrollDown = () => (formRef.current.scrollTop += 50);

  return (
    <>
      <button
        type="button"
        className="py-2 px-4 font-poppins font-medium text-sm text-blue-300 bg-transparent rounded-lg border border-blue-950 transition duration-200 hover:bg-blue-500 hover:text-white"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Close Booking Form" : "Book a Session"}
        <FontAwesomeIcon icon={showForm ? faArrowUp : faArrowDown} className="ml-2" />
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg mx-auto overflow-hidden">
            <div ref={formRef} className="overflow-y-auto h-80">
              <form onSubmit={onSubmit}>
                {["fullName", "idNo", "email", "phoneNo"].map((field, idx) => (
                  <div key={idx} className="mb-4">
                    <label className="block mb-1 capitalize">
                      {field.replace("No", " Number") + ":"}
                      <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                      />
                    </label>
                  </div>
                ))}
                
                {/* Day selection dropdown */}
                <div className="mb-4">
                  <label className="block mb-1">Select a Day:</label>
                  <select
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded p-2 w-full mt-1"
                  >
                    <option value="" disabled>Select a day</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>

                <div className="mt-4 mb-2">
                  <label className="block">Select a Session:</label>
                  <div className="flex flex-col mt-1">
                    {sessions.map((session) => (
                      <div key={session.id} className="mb-1 flex items-center">
                        <input
                          type="radio"
                          id={`session-${session.id}`}
                          name="session"
                          value={session.id}
                          onChange={() => setSelectedSessionId(session.id)}
                          disabled={!session.available}
                          className="mr-2"
                          aria-labelledby={`session-${session.id}`}
                        />
                        <label
                          htmlFor={`session-${session.id}`}
                          className={`${!session.available ? "line-through text-gray-500" : ""}`}
                        >
                          {session.time} {session.available ? "" : "(Unavailable)"}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    type="submit"
                    className="py-2 px-4 bg-blue-500 text-white rounded transition duration-200 hover:bg-blue-600"
                  >
                    Submit Booking
                  </button>
                  <button
                    type="button"
                    onClick={handleExit}
                    className="py-2 px-4 bg-red-500 text-white rounded transition duration-200 hover:bg-red-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
              {result && <div className="mt-2 text-red-500">{result}</div>}
            </div>
            <div className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2">
              <button onClick={scrollUp} aria-label="Scroll up" className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </div>
            <div className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2">
              <button onClick={scrollDown} aria-label="Scroll down" className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourtSessionsButton;
