import React, { useState, useEffect } from 'react';
import styles from './style';
import { Navbar, Footer, Testimonials, CoachSessionsButton, } from './components';

const CoachesPage = () => {
  const [coaches, setCoaches] = useState([]);
  const [selectedCoach, setSelectedCoach] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/coaches/getAllCoaches";
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch coaches");
        }
        const data = await response.json();
        setCoaches(data);
      } catch (error) {
        console.error("Error fetching coaches:", error);
      }
    };

    fetchData();
  }, []);

  const handleCoachClick = (coach) => setSelectedCoach(coach);

  const handleCloseProfile = () => setSelectedCoach(null);

  return (
    <div className="bg-gray-500 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className="container mx-auto p-6">
        <h1 className="text-black-800 text-5xl italic font-extrabold mb-6 text-center">COACHES</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coaches.map((coach, index) => (
            <CoachCard
              key={index}
              {...coach}
              onCardClick={() => handleCoachClick(coach)}
            />
          ))}
        </div>
        
        {selectedCoach && (
          <CoachProfile
            coach={selectedCoach}
            onClose={handleCloseProfile}
          />
        )}

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Testimonials />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

const CoachCard = ({ name, title, sport, academy, bio, email, phoneno, profile_picture, onCardClick }) => (
  <div
    className="bg-black text-white shadow-md rounded-lg p-4 cursor-pointer"
    onClick={onCardClick}
  >
    <img
      src={profile_picture}
      alt={`Profile picture of ${name}`}
      className="w-full h-48 object-cover rounded-t-md mb-4"
    />
    <h2 className="text-lg font-bold mb-2">{name}</h2>
    <p className="text-sm font-semibold mb-2">{title}</p>
    <p className="text-sm mb-2">{sport}</p>
    <p className="text-sm mb-2">{academy}</p>
    <p className="text-sm mb-2">{bio}</p>
    <p className="text-sm mb-2">Email: {email}</p>
    <p className="text-sm mb-2">Phone: {phoneno}</p>
    
  </div>
);

const CoachProfile = ({ coach, onClose }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day === selectedDay ? null : day); // Toggle selected day
    setSelectedTime(null); // Reset selected time when changing day
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    console.log(`Selected time: ${time}`);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
      onClick={onClose}
      aria-label="Close coach profile"
    >
      <div
        className="bg-blue-950 p-5 rounded shadow-md w-full max-w-lg mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
          aria-label="Close"
        >
          ✕
        </button>
        <h2 className="text-xl font-bold">{coach.name}</h2>
        <img
          src={coach.profile_picture}
          alt={`Profile picture of ${coach.name}`}
          className="w-32 h-32 rounded-full mb-4"
        />
        <p className="text-lg font-semibold">{coach.title}</p>
        <p className="text-md font-semibold">{coach.sport}</p>
        <p className="text-sm mb-2">Working Hours: {coach.working_hours}</p>
        <p className="text-sm mb-2">Groups: {coach.groups}</p>
        

        <div className="flex flex-wrap mt-4">
          {coach.schedule.map(({ day }, index) => (
            <button
              key={index}
              onClick={() => handleDayClick(day)}
              className={`px-4 py-2 rounded-full ${
                selectedDay === day ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
              } mb-2`}
            >
              {day}
            </button>
          ))}
        </div>

        {selectedDay && (
          <div className="flex flex-wrap gap-2 mt-4">
            {coach.schedule
              .find(({ day }) => day === selectedDay)
              .times.map((time, index) => (
                <span
                  key={index}
                  onClick={() => handleTimeClick(time)}
                  className={`text-sm px-3 py-1 rounded cursor-pointer ${
                    selectedTime === time ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'
                  }`}
                >
                  {time}
                </span>
              ))}
          </div>
        )}

        <CoachSessionsButton coachName={coach.name} />
      </div>
    </div>
  );
};

export default CoachesPage;
