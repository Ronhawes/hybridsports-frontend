import { useState } from 'react';
import styles from "./style";
import { Navbar, Footer, Testimonials, CoachRegistration, SignIn, CoachesSession, PlayerRegistration } from "./components";
import { people01, people02, people03, tour10, tour11, tour12, tour14 } from './assets';


const CoachesPage = () => {
  const [selectedCoach, setSelectedCoach] = useState(null); // State to hold selected coach info

  const coaches = [
    {
      name: "Mark Mabonga",
      title: "Head Coach",
      sport: "Tennis/ Padel",
      academy: "Hybrid Sports",
      bio: "I have a good experience in the sport and I work with clients of all levels. I am flexible for both night and day sessions with prices fitting for all levels.",
      email: "mark@example.com",
      phoneNumber: "+254710735834",
      profilePicture: people02,
      workinghrs: "6am-6pm",
      prices: "N/A",
      levels: "All levels",
      Groups: "individual and group sessions",
      sessions: [
        { date: "2024-08-16", time: "10:00 AM - 11:00 AM" },
        { date: "2024-08-17", time: "2:00 PM - 3:00 PM" },
      ],
    },
    {
      name: "Stella Kanyi",
      title: "Gym Instructor",
      sport: "Fitness",
      academy: "N/A",
      bio: "I am a gym instructor with a diploma in fitness and wellness. I am based in Ongata Rongai and work 7-8 hours a day, helping clients achieve their fitness goals.",
      email: "stellakanyi@gmail.com",
      phoneNumber: "+254708906644",
      profilePicture: tour14, // Replace with Stella's profile picture
      workinghrs: "7-8 hours",
      prices: "N/A",
      levels: "All levels",
      Groups: "individual and group sessions",
    },
    {
      name: "Petty Andanda",
      title: "Tennis Coach",
      sport: "Tennis",
      academy: "N/A",
      bio: "With 8 years of experience, I am an ITF Level 1 certified tennis coach, working from 6 AM to 6:30 PM, helping players of all levels.",
      email: "pettyandanda@gmail.com",
      phoneNumber: "+254111769929",
      profilePicture: tour11, // Replace with Petty's profile picture
      workinghrs: "6 AM - 6:30 PM",
      prices: "N/A",
      levels: "All levels",
      Groups: "individual and group sessions",
    },
    {
      name: "Peter Ngugi",
      title: "Tennis Coach",
      sport: "Tennis",
      academy: "Upper Hill Nairobi",
      bio: "With 5 years of coaching experience and ITF Play and Stay certification, I work with players at all levels. My sessions run from early morning to evening.",
      email: "activitytennis@gmail.com",
      phoneNumber: "+254717391077",
      profilePicture: tour10, // Replace with Peter's profile picture
      workinghrs: "6:30 AM - 7:00 PM Daily",
      prices: "N/A",
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
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        
      <h1 className="text-black-800 text-3xl font-bold mb-4 ">Empowering Young Champions, Enhancing Your Lifestyle🎾</h1>
      <h1 className="text-base mb-6 max-w-[900px] text-center">
    Experienced, certified coaches (ITF, ATP, and Padel professionals), passionate and dedicated trainers, sports psychologists, and fitness experts provide a comprehensive Player Development Program that includes:
</h1>
<ul className="list-disc ml-4 mb-6">
    <li>Expert coaching for Tennis and Padel (group and private sessions)</li>
    <li>Customized training plans for beginners and advanced players</li>
    <li>Fitness and conditioning programs designed to enhance performance</li>
    <li>Mental performance coaching to improve focus and resilience</li>
</ul>

        <h1 className="text-3xl font-bold mb-3 text-black">Coaches Available</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coaches.map((coach, index) => (
            <CoachCard
              key={index}
              {...coach}
              onClick={() => handleCoachClick(coach)} // Pass the coach data to the click handler
            />
          ))}
        </div>
        <div className={`${styles.paragraph} max-w-[470px] mt-5`}>   
          <div className="flex  mt-50">
            <PlayerRegistration/>
          </div>
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
          
        </div>
      </div>
      <div className='bg-slate-900'><Footer/></div>
    </div>
  );
};

const CoachCard = ({ name, title, sport, academy, bio, email, phoneNumber, profilePicture, onClick }) => {
  return (
    <div className="bg-black text-white shadow-md rounded-lg p-4 cursor-pointer" onClick={onClick}>
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
};


const CoachProfile = ({ coach, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
      onClick={onClose}
      aria-label="Close coach profile"
    >
      <div
        className="bg-blue-950 p-5 rounded shadow-md w-full max-w-lg mx-4 relative"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
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
        <CoachesSession />
        {/* Other coach details */}
      </div>
    </div>
  );
};


export default CoachesPage;
