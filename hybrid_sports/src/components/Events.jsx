import { useState } from "react";
import { ongoingEvents } from "../constants"; // Make sure this is updated with your events data
import styles, { layout } from "../style";
import Button from "./Button";

const EventCard = ({ title, date, location, Image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex-shrink-0 w-full max-w-md mx-2 my-4">
      {/* Event image */}
      <div
        className="w-full h-[300px] rounded-[20px] overflow-hidden cursor-pointer"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        onClick={handleOpenModal} // Open modal when clicked
      />
      {/* Event details */}
      <div className="p-4 bg-slate-900 bg-opacity-60 rounded-b-[20px]">
        <h4 className="font-poppins font-semibold text-white text-[28px] leading-[32px] mb-3">
          {title}
        </h4>
        <p className="font-poppins font-normal text-gray-300 text-[20px] leading-[28px] mb-2">
          {date}
        </p>
        <p className="font-poppins font-normal text-gray-200 text-[18px] leading-[24px]">
          {location}
        </p>

        {/* Show Court Button */}
        <div className="flex justify-center mt-4">
          <Button styles={`mt-2`} label="Show Court" onClick={handleOpenModal} />
        </div>
      </div>

      {/* Full-screen Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-full max-w-4xl h-[90vh]"> {/* Added height limit */}
            <img
              src={Image}
              alt="Enlarged Court"
              className="object-contain w-full h-full rounded-[20px]"
            />
            {/* Close Button (X) */}
            <button 
              className="absolute top-4 right-4 bg-gray-500 text-white py-2 px-4 rounded-full"
              onClick={handleCloseModal}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const OngoingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < ongoingEvents.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="events" className="w-full bg-slate-900 py-10 flex justify-center items-center relative h-screen px-4">
      <button
        className="absolute left-0 p-4 bg-gray-700 text-white rounded-full shadow-lg"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>

      <div className="w-full max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex', flexDirection: 'row' }}
        >
          {ongoingEvents.map((event, index) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>

      <button
        className="absolute right-0 p-4 bg-gray-700 text-white rounded-full shadow-lg"
        onClick={handleNext}
        disabled={currentIndex === ongoingEvents.length - 1}
      >
        &gt;
      </button>
    </section>
  );
};

export default OngoingEvents;
