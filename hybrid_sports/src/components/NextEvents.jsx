import React, { useState } from 'react';
import { tour5, tour6, tour7 } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import PlayerRegistration from './PlayerRegistration';

const NextEvents = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const nextEventsData = [
    { date: '2024-11-', event: 'Mercavi Nakuru', location: 'Nakuru', image: tour6 },
    // Add more events as needed
  ];

  const handleEventClick = (index) => {
    setCurrentEvent(index);
  };

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  return (
    <section id="next-events" className="my-8">
      <h2 className="text-xl text-dimWhite font-bold mb-4">Next Events</h2>
      <div className="relative flex items-center justify-center">
        <div
          className="absolute left-4 cursor-pointer bg-white rounded-full p-2 shadow-lg z-10 flex items-center justify-center"
          onClick={() => handleEventClick((currentEvent - 1 + nextEventsData.length) % nextEventsData.length)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>

        <img src={nextEventsData[currentEvent].image} alt={`Event ${currentEvent + 1}`} className="w-full h-auto rounded-lg" style={{ height: '8cm', zIndex: 1 }} />

        <div className="absolute bg-dimWhite text-black p-4 rounded-lg shadow-lg opacity-95" style={{ zIndex: 2, height: '3cm', width: '4cm' }}>
          <h3 className="text-lg font-semibold text-center">{nextEventsData[currentEvent].event}</h3>
        </div>

        <div
          className="absolute right-4 cursor-pointer bg-white rounded-full p-2 shadow-lg z-10 flex items-center justify-center"
          onClick={() => handleEventClick((currentEvent + 1) % nextEventsData.length)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      <div className="text-center text-white mt-4">
        <p className="text-xl font-bold mb-4">{nextEventsData[currentEvent].event}</p>
        <p className="text-lg">{nextEventsData[currentEvent].date} - {nextEventsData[currentEvent].location}</p>
      </div>
      <br />

      {/* Register Button */}
      <div className="text-center">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          onClick={toggleRegistrationForm}
        >
          {showRegistrationForm ? 'Close Registration' : 'Register'}
        </button>

        {/* Display Registration Form when button is clicked */}
        {showRegistrationForm && (
          <PlayerRegistration />
        )}
      </div>
    </section>
  );
};

export default NextEvents;
