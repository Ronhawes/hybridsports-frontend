import { useState } from "react";
import { ongoingEvents } from "../constants";
import Button from "./Button";
import TicketRegistration from "./Button3";

const EventCard = ({ title, date, location, Image, onShowForm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex-shrink-0 w-full max-w-md mx-2 my-4">
      <div
        className="w-full h-[300px] rounded-[20px] overflow-hidden cursor-pointer"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        onClick={handleOpenModal}
      />
      <div className="p-4 bg-slate-900 bg-opacity-60 rounded-b-[20px]">
        <h4 className="font-poppins font-semibold text-white text-[28px] mb-3">{title}</h4>
        <p className="font-poppins font-normal text-gray-300 text-[20px] mb-2">{date}</p>
        <p className="font-poppins font-normal text-gray-200 text-[18px]">{location}</p><br />
        
        <div className="flex space-x-2 mt-2">
          <div className="relative flex-1 p-4 w-full md:w-1/2">
            <Button styles="w-full" label="Show Court" onClick={onShowForm} /> 
          </div>
          <div className="relative flex-1 p-4 w-full md:w-1/2">
            <TicketRegistration styles="w-full" label="Ticket Registration" onClick={onShowForm} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-full max-w-4xl h-[90vh] overflow-y-auto bg-white p-4 rounded-[20px]">
            <img src={Image} alt="Enlarged Court" className="object-contain w-full h-full rounded-[20px]" />
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
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const handleShowForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section id="events" className="w-full bg-slate-900 py-10 flex justify-center items-center relative min-h-screen px-4">
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
            <EventCard key={event.id} {...event} onShowForm={handleShowForm} />
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

      {isFormOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl h-[90vh] overflow-y-auto bg-white p-6 rounded-[20px] shadow-lg">
            <TicketRegistration />
            <button
              className="absolute top-4 right-4 bg-gray-500 text-white py-2 px-4 rounded-full"
              onClick={handleCloseForm}
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default OngoingEvents;
