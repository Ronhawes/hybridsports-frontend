// CoachesPage.js

import React, { useState } from 'react';
import styles from './style';
import { Navbar, Footer, Testimonials, CoachSessionsButton } from './components';
import { people02, tour10, tour11, tour14 } from './assets';

const CoachesPage = () => {
  const [selectedCoach, setSelectedCoach] = useState(null);

  const coaches = [
    {
      name: 'Mark Mabonga',
      title: 'Head Coach',
      sport: 'Tennis/Padel',
      academy: 'Hybrid Sports',
      bio: 'Experienced coach with flexible scheduling for all levels.',
      email: 'mark@example.com',
      phoneNumber: '+254710735834',
      profilePicture: people02,
      workinghrs: '6am-6pm',
      levels: 'All levels',
      Groups: 'Individual and group sessions',
    },
    {
      name: "Stella Kanyi",
      title: "Gym Instructor",
      sport: "Fitness",
      academy: "N/A",
      bio: "I am a gym instructor with a diploma in fitness and wellness.I am based in Ongata Rongai and work 7-8 hours a day, helping clients achieving fitness goals.",
      email: "stellakanyi@gmail.com",
      phoneNumber: "+254708906644",
      profilePicture: tour14,
      workinghrs: "7-8 hours",
      levels: "All levels",
      Groups: "individual and group sessions",
    },
    {
      name: "Petty Andanda",
      title: "Tennis Coach",
      sport: "Tennis",
      academy: "N/A",
      bio: "With 8 years of experience, I am an ITF Level 1 certified tennis coach working from 6 AM to 6:30 PM, helping players of all levels.",
      email: "pettyandanda@gmail.com",
      phoneNumber: "+254111769929",
      profilePicture: tour11,
      workinghrs: "6 AM - 6:30 PM",
      levels: "All levels",
      Groups: "individual and group sessions",
    },
    {
      name: "Peter Ngugi",
      title: "Tennis Coach",
      sport: "Tennis",
      academy: "Upper Hill Nairobi",
      bio: "With 5 years of coaching experience and ITF Play and Stay certificati I work with players at all levels. My sessions run from early morning to evening",
      email: "activitytennis@gmail.com",
      phoneNumber: "+254717391077",
      profilePicture: tour10,
      workinghrs: "6:30 AM - 7:00 PM Daily",
      levels: "All levels",
      Groups: "individual and group sessions",
    },
  ];

  const handleCoachClick = (coach) => {
    setSelectedCoach(coach);
  };

  const handleCloseProfile = () => {
    setSelectedCoach(null);
  };

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

const CoachCard = ({ name, title, sport, academy, bio, email, phoneNumber, profilePicture, onCardClick }) => (
  <div
    className="bg-black text-white shadow-md rounded-lg p-4 cursor-pointer"
    onClick={onCardClick}
  >
    <img
      src={profilePicture}
      alt={`Profile picture of ${name}`}
      className="w-full h-48 object-cover rounded-t-md mb-4"
    />
    <h2 className="text-lg font-bold mb-2">{name}</h2>
    <p className="text-sm font-semibold mb-2">{title}</p>
    <p className="text-sm mb-2">{sport}</p>
    <p className="text-sm mb-2">{academy}</p>
    <p className="text-sm mb-2">{bio}</p>
    <p className="text-sm mb-2">Email: {email}</p>
    <p className="text-sm mb-2">Phone: {phoneNumber}</p>
  </div>
);

const CoachProfile = ({ coach, onClose }) => (
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
        src={coach.profilePicture}
        alt={`Profile picture of ${coach.name}`}
        className="w-32 h-32 rounded-full mb-4"
      />
      <p className="text-lg font-semibold">{coach.title}</p>
      <p className="text-md font-semibold">{coach.sport}</p>
      <p className="text-sm mb-2">Working Hours: {coach.workinghrs}</p>
      <p className="text-sm mb-2">Levels: {coach.levels}</p>
      <p className="text-sm mb-2">Groups: {coach.Groups}</p>
      
      {/* Display CoachSessionsButton with the coach's name */}
      <CoachSessionsButton coachName={coach.name} />
    </div>
  </div>
);

export default CoachesPage;
