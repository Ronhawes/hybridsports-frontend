import React, { useState } from 'react';
import { tour5, tour6, tour7 } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NextEvents = () => {
  const [currentEvent, setCurrentEvent] = useState(0);

  const nextEventsData = [
    { date: '2023-03-15', event: 'Knockout series', location: 'Public Service', image: tour5 },
    { date: '2023-03-22', event: 'KU Open', location: 'Kenyatta University', image: tour6 },
    { date: '2023-03-29', event: 'Nakuru Open', location: 'Nakuru', image: tour7 },
  ];

  const handleEventClick = (index) => {
    setCurrentEvent(index);
  };

  return (
    <section id="next-events" className="my-8">
      <h2 className="text-xl text-dimWhite font-bold mb-4">Next Events</h2>
      <div className="relative flex items-center justify-center">
        {/* Previous Arrow */}
        <div
          className="absolute left-4 cursor-pointer bg-white rounded-full p-2 shadow-lg z-10 flex items-center justify-center"
          onClick={() => handleEventClick((currentEvent - 1 + nextEventsData.length) % nextEventsData.length)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>

        {/* Current Event Image (Full size) */}
        <img src={nextEventsData[currentEvent].image} alt={`Event ${currentEvent + 1}`} className="w-full h-auto rounded-lg" style={{ height: '8cm', zIndex: 1 }} />

        {/* Event Name Box */}
        <div className="absolute bg-dimWhite text-black p-4 rounded-lg shadow-lg opacity-95" style={{ zIndex: 2, height: '3cm', width: '4cm' }}>
          <h3 className="text-lg font-semibold text-center">{nextEventsData[currentEvent].event}</h3>
        </div>

        {/* Next Arrow */}
        <div
          className="absolute right-4 cursor-pointer bg-white rounded-full p-2 shadow-lg z-10 flex items-center justify-center"
          onClick={() => handleEventClick((currentEvent + 1) % nextEventsData.length)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>

      {/* Event Date and Location Below the Image */}
      <div className="text-center text-white mt-4">
        <p className="text-xl font-bold mb-4">{nextEventsData[currentEvent].event}</p>
        <p className="text-lg">{nextEventsData[currentEvent].date} - {nextEventsData[currentEvent].location}</p>
      </div><br />

      {/* Register Button with Link */}
      <div className="text-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfeZ1zfpk3Rrum0UnIhYtae0tZltGhXmvT_EXMrFHY2aBWaww/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Register</button>
        </a>
      </div>
    </section>
  );
};

export default NextEvents;
