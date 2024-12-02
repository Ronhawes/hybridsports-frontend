import { useState } from 'react';
import styles from "./style";
import { Navbar, Footer, Testimonials, SignIn, BlockBooking,CoachSessionsButton, CourtSessionsButton} from "./components";
import { court01, court02, court03 ,tour16,tour17} from './assets';
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
      schedule: [
        { day: 'Monday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
        { day: 'Tuesday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
        { day: 'Wednesday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
        { day: 'Thursday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
        { day: 'Friday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
        { day: 'Saturday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
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
      schedule: [
        { day: 'Monday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
        { day: 'Tuesday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
        { day: 'Wednesday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
        { day: 'Thursday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
        { day: 'Friday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
        { day: 'Saturday', times: ['9-10 AM', '10-11 AM', '11-12 PM'] },
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
      




        <h1 className="text-5xl font-bold italic mb-3 ">Courts Available</h1><br /><br />

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
        <p className="text-sm mb-2 font-semibold">Courts: {numberOfCourts}</p>
      </div>
    </div>
  );
};


const CourtProfile = ({ court, onClose }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day === selectedDay ? null : day); // Toggle selected day
    setSelectedTime(null); // Reset selected time when changing the day
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time === selectedTime ? null : time); // Toggle selected time
  };

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
        
        {/* Display days in two rows */}
        <div className="flex flex-wrap mt-4">
          <div className="flex space-x-2 mb-2">
            {court.schedule.slice(0, 3).map(({ day }) => (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                className={`px-4 py-2 rounded-full ${
                  selectedDay === day ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="flex space-x-2">
            {court.schedule.slice(3).map(({ day }) => (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                className={`px-4 py-2 rounded-full ${
                  selectedDay === day ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Display times for the selected day */}
        {selectedDay && (
          <div className="flex flex-wrap gap-2 mt-4">
            {court.schedule
              .find(({ day }) => day === selectedDay)
              .times.map((time, index) => (
                <button
                  key={index}
                  onClick={() => handleTimeClick(time)}
                  className={`text-sm px-3 py-1 rounded ${
                    selectedTime === time ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'
                  }`}
                >
                  {time}
                </button>
              ))}
          </div>
        )}

        <CourtSessionsButton courtName={court.name} />
        <button onClick={onClose} className="mt-4 bg-gray-500 text-white p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};


export default CourtsPage;
