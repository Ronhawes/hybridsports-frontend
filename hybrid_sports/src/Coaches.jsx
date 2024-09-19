import { useState } from 'react';
import styles from "./style";
import { Navbar, Footer, Testimonials, CoachRegistration, SignIn, CoachesSession, PlayerRegistration } from "./components";
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
    <div className="bg-gray-600 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          
        </div>
      </div>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Life is Better When We Play Together 🎾</h1>
        <h1 className="text-xl3 sm:text-xl4 leading-xl sm:leading-xl2 font-bold text-black factorial__headingFontFamily">
        At HybridSports, we're revolutionizing the world of sports by bringing together traditional and emerging sports through our cutting-edge platform. As the largest sports booking app and SaaS for venues, we're not just focusing on racket sports—we're bridging the gap between various disciplines, from tennis and padel to new-age hybrid sports that blend the best of both worlds.

With a global footprint in over 49 countries, we've partnered with 4,800 clubs, offering access to 21,000 courts and connecting 3.1 million players. Our community is passionate about exploring new ways to play, blending classic sports with innovative hybrids that challenge the status quo.

Whether you're a fan of traditional racket sports or curious about trying something new, HybridSports is your gateway to a diverse sports experience. Join us as we push the boundaries of sports engagement, connecting players and venues in ways that inspire creativity and competition.

Explore the future of sports with HybridSports—where innovation meets passion, and everyone can find their perfect game.
Our team of experienced coaches and trainers are dedicated to helping you achieve your fitness goals.
        </h1><br></br>
        <h1 className="text-3xl font-bold mb-3 text-blue-800">Coaches Available</h1>
        <div className="space-y-4">
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
    <article className="bg-blue-950 shadow-md rounded p-4 cursor-pointer" onClick={onClick}>
      <div className="flex items-center mb-4">
        <img src={profilePicture} alt={`${name}'s Profile`} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-lg  text-fuchsia-700 font-bold">{name}</h2>
          <p className="text-sm text-fuchsia-200 mb-1">{title}</p>
          <p className="text-sm text-fuchsia-200 mb-1">{sport}</p>
          <p className="text-sm text-fuchsia-200 mb-1">{academy}</p>
        </div>
      </div>
      <p className="text-sm text-fuchsia-200 mb-1">{bio}</p>
      <p className="text-sm text-fuchsia-200">Email: {email}</p>
      <p className="text-sm text-fuchsia-200">Phone: {phoneNumber}</p>
    </article>
  );
};

const CoachProfile = ({ coach, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-blue-950 p-5 rounded shadow-md w-full max-w-lg mx-4">
        <h2 className="text-xl font-bold">{coach.name}</h2>
        <img src={coach.profilePicture} alt={`${coach.name}'s Profile`} className="w-32 h-32 rounded-full mb-4" />
        <p className="text-lg font-semibold">{coach.title}</p>
        <p className="text-md font-semibold">{coach.sport}</p>
        <p className="text-md font-semibold">{coach.academy}</p>
        <p className="text-md text-fuchsia-200">{coach.workinghrs}</p>
        <p className="text-md text-fuchsia-200">{coach.workinghrs}</p>
        <p className="text-md text-fuchsia-200">{coach.prices}</p>
        <p className="text-md text-fuchsia-200">{coach.levels}</p>
        <p className="text-md text-fuchsia-200">{coach.Groups}</p>
        <p className="text-sm mt-4 text-fuchsia-200">{coach.bio}</p>
        <p className="text-sm text-fuchsia-200">Email: {coach.email}</p>
        <p className="text-sm text-fuchsia-200">Phone: {coach.phoneNumber}</p>
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
