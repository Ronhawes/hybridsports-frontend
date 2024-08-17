import { useState } from 'react';
import styles from "./style";
import { Navbar, Footer, Testimonials, CoachRegistration, SignIn, CoachesSession } from "./components";
import { people01, people02, people03 } from './assets';


const CoachesPage = () => {
  const [selectedCoach, setSelectedCoach] = useState(null); // State to hold selected coach info

  const coaches = [
    {
      name: "Mark Mabonga",
      title: "Head Coach",
      sport: "Tennis",
      academy: "Hybrid Sports",
      bio: "I have 10 years of experience in the sport and I work with clients of all levels. I am flexible for both night and day sessions with prices fitting for all levels.",
      email: "mark@example.com",
      phoneNumber: "+1234567890",
      profilePicture: people02,
      workinghrs:"6am-6pm",
      prices:"$15 per class",
      levels:"All levels",
      Groups:"individual and group sessions",
      sessions:[
        { date: "2024-08-16", time: "10:00 AM - 11:00 AM" },
        { date: "2024-08-17", time: "2:00 PM - 3:00 PM" },
      ]
    },
    {
      name: "Jane Smith",
      title: "Personal Trainer",
      sport: "Basketball",
      academy: "Basketball Academy",
      bio: "Jane specializes in weight loss and nutrition planning. She has a passion for helping clients achieve their goals.",
      email: "jane@example.com",
      phoneNumber: "+0987654321",
      profilePicture: people01,
    },
    {
      name: "Bob Johnson",
      title: "Swimming Coach",
      sport: "Swimming",
      academy: "Swimming Academy",
      bio: "Bob has a background in strength and conditioning and has worked with athletes of all levels.",
      email: "bob@example.com",
      phoneNumber: "+1122334455",
      profilePicture: people03,
    },
    {
      name: "Sarah Lee",
      title: "Yoga Instructor",
      sport: "Yoga",
      academy: "Yoga Sports",
      bio: "Sarah is a certified yoga instructor with a focus on mindfulness and relaxation techniques.",
      email: "sarah@example.com",
      phoneNumber: "+2233445566",
      profilePicture: people01,
    },
    {
      name: "Mike Davis",
      title: "Fitness Coach",
      sport: "Gym",
      academy: "Gymnastics Fitness",
      bio: "Mike has a degree in exercise science and has worked with clients of all ages and fitness levels.",
      email: "mike@example.com",
      phoneNumber: "+3344556677",
      profilePicture: people02,
    },
  ];

  const handleCoachClick = (coach) => {
    setSelectedCoach(coach);
  };

  const handleCloseProfile = () => {
    setSelectedCoach(null);
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <CoachRegistration />
        </div>
      </div>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4 text-green-500">Coaches Available</h1>
        <p className="text-lg mb-8 text-green-500">
          Our team of experienced coaches and trainers are dedicated to helping you achieve your fitness goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coaches.map((coach, index) => (
            <CoachCard
              key={index}
              {...coach}
              onClick={() => handleCoachClick(coach)} // Pass the coach data to the click handler
            />
          ))}
        </div>
      </div>

      {selectedCoach && (
        <CoachProfile
          coach={selectedCoach}
          onClose={handleCloseProfile} // Close profile handler
        />
      )}

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Testimonials />
          <Footer />
        </div>
      </div>
    </div>
  );
};

const CoachCard = ({ name, title, sport, academy, bio, email, phoneNumber, profilePicture, onClick }) => {
  return (
    <article className="bg-white shadow-md rounded p-4 cursor-pointer" onClick={onClick}>
      <div className="flex items-center mb-4">
        <img src={profilePicture} alt={`${name}'s Profile`} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm mb-1">{title}</p>
          <p className="text-sm mb-1">{sport}</p>
          <p className="text-sm mb-1">{academy}</p>
        </div>
      </div>
      <p className="text-sm mb-1">{bio}</p>
      <p className="text-sm">Email: {email}</p>
      <p className="text-sm">Phone: {phoneNumber}</p>
    </article>
  );
};

const CoachProfile = ({ coach, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-yellow-100 p-5 rounded shadow-md w-full max-w-lg mx-4">
        <h2 className="text-xl font-bold">{coach.name}</h2>
        <img src={coach.profilePicture} alt={`${coach.name}'s Profile`} className="w-32 h-32 rounded-full mb-4" />
        <p className="text-lg font-semibold">{coach.title}</p>
        <p className="text-md">{coach.sport}</p>
        <p className="text-md">{coach.academy}</p>
        <p className="text-md">{coach.workinghrs}</p>
        <p className="text-md">{coach.prices}</p>
        <p className="text-md">{coach.levels}</p>
        <p className="text-md">{coach.Groups}</p>
        <p className="text-sm mt-4">{coach.bio}</p>
        <p className="text-sm">Email: {coach.email}</p>
        <p className="text-sm">Phone: {coach.phoneNumber}</p>
        <SignIn>My Account</SignIn>
        <CoachesSession></CoachesSession>
        
        
        <button onClick={onClose} className="mt-4 bg-gray-500 text-white p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default CoachesPage;
