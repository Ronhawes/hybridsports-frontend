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
    
  ];

  const handleCourtClick = (court) => {
    setSelectedCourt(court);
  };

  const handleCloseProfile = () => {
    setSelectedCourt(null);
  };

  return (
    <div className="bg-gray-500 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 text-center">
        <br />
        <br />
      <h1 className="text-3xl font-bold mb-4 ">Empowering Young Champions, Enhancing Your Lifestyle🎾</h1>




        <h1 className="text-3xl font-bold mb-3 ">Courts Available</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
    <div className="bg-black text-white shadow-md rounded p-4 cursor-pointer" onClick={onClick}>
        <img 
          src={profilePicture} 
          alt={`${name}'s Profile`} 
          className="w-full h-48 object-cover rounded-t"
        />
        <div>
          <h2 className="text-lg font-bold mb-2">{name}</h2> 
          <p className="text-sm mb-2 font-semibold">Sport: {sport}</p>
          <p className="text-sm mb-2 font-semibold"> Courts: {numberOfCourts}</p>
        </div>
      </div>
    
  );
};

const CourtProfile = ({ court, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4">
      <div className="bg-blue-950 p-8 rounded-lg shadow-lg max-w-lg w-full relative">
      
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
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite"><CoachesSession /> </p>
        <button onClick={onClose} className="mt-4 bg-gray-500 text-white p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};


export default CourtsPage;
