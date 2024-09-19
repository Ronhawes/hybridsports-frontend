import { useState } from 'react';
import styles from "./style";
import { Navbar, Footer, Testimonials, SignIn, BlockBooking,CoachesSession } from "./components";
import { court01, court02, court03 } from './assets';
import Button from './components/Academies';

const CourtsPage = () => {
  const [selectedCourt, setSelectedCourt] = useState(null);

  const courts = [
    {
      name: "Public Service",
      sport: "Tennis",
      numberOfCourts: 5,
      charges: "$15 per hour",
      daysOfOperation: [
        { day: "Monday-Friday", time: "7 AM - 7 PM", availability: "Available" },
        { day: "Saturday-Sunday", time: "8 AM - 4 PM", availability: "Limited" },
      ],
      courtManager: {
        name: "Michael Lee",
        contact: "+1122334455",
        email: "michael@example.com"
      },
      blockBooking: "Available",
      profilePicture: court03,
    },
    {
      name: "Nairobi Club",
      sport: "Tennis",
      numberOfCourts: 6,
      charges: "$30 per hour",
      daysOfOperation: [
        { day: "Monday-Friday", time: "8 AM - 9 PM", availability: "Available" },
        { day: "Saturday-Sunday", time: "9 AM - 7 PM", availability: "Available" },
      ],
      courtManager: {
        name: "Rebecca Adams",
        contact: "+4455667788",
        email: "rebecca@example.com"
      },
      blockBooking: "Available",
      profilePicture: court01,
    },
    {
      name: "Ruiru Sports Club",
      sport: "Tennis",
      numberOfCourts: 8,
      charges: "$22 per hour",
      daysOfOperation: [
        { day: "Monday-Friday", time: "6 AM - 8 PM", availability: "Available" },
        { day: "Saturday-Sunday", time: "7 AM - 5 PM", availability: "Limited" },
      ],
      courtManager: {
        name: "Paul Baker",
        contact: "+9988776655",
        email: "paul@example.com"
      },
      blockBooking: "Not Available",
      profilePicture: court02,
    },
    {
      name: "UoN",
      sport: "Tennis",
      numberOfCourts: 7,
      charges: "$35 per hour",
      daysOfOperation: [
        { day: "Monday-Friday", time: "9 AM - 10 PM", availability: "Available" },
        { day: "Saturday-Sunday", time: "10 AM - 6 PM", availability: "Available" },
      ],
      courtManager: {
        name: "Angela Carter",
        contact: "+6677889900",
        email: "angela@example.com"
      },
      blockBooking: "Available",
      profilePicture: court03,
    },
  ];

  const handleCourtClick = (court) => {
    setSelectedCourt(court);
  };

  const handleCloseProfile = () => {
    setSelectedCourt(null);
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
        <h1 className="text-xl3 sm:text-xl6 leading-xl sm:leading-xl2 font-bold text-black  factorial__headingFontFamily">
        At HybridSports, we're revolutionizing the world of sports by bringing together traditional and emerging sports through our cutting-edge platform. As the largest sports booking app and SaaS for venues, we're not just focusing on racket sports—we're bridging the gap between various disciplines, from tennis and padel to new-age hybrid sports that blend the best of both worlds.

With a global footprint in over 49 countries, we've partnered with 4,800 clubs, offering access to 21,000 courts and connecting 3.1 million players. Our community is passionate about exploring new ways to play, blending classic sports with innovative hybrids that challenge the status quo.

Whether you're a fan of traditional racket sports or curious about trying something new, HybridSports is your gateway to a diverse sports experience. Join us as we push the boundaries of sports engagement, connecting players and venues in ways that inspire creativity and competition.

Explore the future of sports with HybridSports—where innovation meets passion, and everyone can find their perfect game.
Our team of experienced coaches and trainers are dedicated to helping you achieve your fitness goals.
        </h1><br></br>
        <h1 className="text-3xl font-bold mb-3 text-blue-800">Courts Available</h1>
        <div className="space-y-4">
          {courts.map((court, index) => (
            <CourtCard
              key={index}
              {...court}
              onClick={() => handleCourtClick(court)}
            />
          ))}
        </div>
      </div>

      {selectedCourt && (
        <CourtProfile
          court={selectedCourt}
          onClose={handleCloseProfile}
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

const CourtCard = ({ name, sport, numberOfCourts, profilePicture, onClick }) => {
  return (
    <article 
      className="bg-blue-950  shadow-lg rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="flex items-center mb-4">
        <img 
          src={profilePicture} 
          alt={`${name}'s Profile`} 
          className="w-24 h-24 rounded-full mr-6"
        />
        <div>
          <h2 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h2> 
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Sport: {sport}</p>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite"> Courts: {numberOfCourts}</p>
        </div>
      </div>
    </article>
  );
};

const CourtProfile = ({ court, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4">
      <div className="bg-blue-950 p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-gray-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
        <h2 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{court.name}</h2>
        <img 
          src={court.profilePicture} 
          alt={`${court.name}'s Profile`} 
          className="w-32 h-32 rounded-full mb-4 mx-auto" 
        />
        
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Number of Courts: {court.numberOfCourts}</p>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Charges: {court.charges}</p>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Days of Operation:</p>
        <ul className="list-disc list-inside">
          {court.daysOfOperation.map((dayInfo, index) => (
            <li key={index} className="text-md">
              {dayInfo.day}: {dayInfo.time} - {dayInfo.availability}
            </li>
          ))}
        </ul>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Court Manager: {court.courtManager.name}</p>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Phone: {court.courtManager.contact}</p>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">Email: {court.courtManager.email}</p>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite"><Button><CoachesSession /></Button> </p>
        
      </div>
    </div>
  );
};


export default CourtsPage;
