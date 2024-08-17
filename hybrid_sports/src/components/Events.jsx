import { useState } from "react";
import { ongoingEvents } from "../constants"; // Make sure this is updated with your events data
import styles, { layout } from "../style";
import Button from "./Button";

const EventCard = ({ title, date, location, Image }) => (
  <div className="relative flex-shrink-0 w-full h-80 rounded-[20px] overflow-hidden my-4 mx-2">
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${Image})` }}
    ></div>
    <div className="relative z-10 flex-1 flex flex-col justify-center p-8 bg-black bg-opacity-50 rounded-[20px]">
      <h4 className="font-poppins font-semibold text-white text-[24px] leading-[28px] mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[26px]">
        {date} <br />
        {location}
      </p>
      <div className="flex mt-4">
        <Button styles={`mt-2`} label="Purchase Ticket" />
      </div>
    </div>
  </div>
);



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
    <section id="events" className="w-full bg-primary py-10 flex justify-center items-center relative">
      <button
        className="absolute left-0 p-2 bg-gray-500 text-white rounded-full"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>

      <div className="w-full max-w-lg overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {ongoingEvents.map((event, index) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>

      <button
        className="absolute right-0 p-2 bg-gray-500 text-white rounded-full"
        onClick={handleNext}
        disabled={currentIndex === ongoingEvents.length - 1}
      >
        &gt;
      </button>
    </section>
  );
};

export default OngoingEvents;
