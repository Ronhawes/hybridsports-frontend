import React from 'react';
import styles from "../style";
import Navbar from './Navbar';
import Footer from './Footer';
import Testimonials from './Testimonials';

const BlockBooking = () => {
  const courts = [
    {
      name: "Green Valley Tennis Club",
      sport: "Tennis",
      numberOfCourts: 4,
      charges: "Ksh 2,000 per hour",
      daysOfOperation: "Monday - Friday: 8:00 AM - 8:00 PM",
      courtManager: {
        name: "John Doe",
        phone: "+1234567890",
        email: "johndoe@greenvalley.com",
      },
      blockBooking: "Available for weekends, 10% discount on 4+ hours booking"
    },
    {
      name: "Sunnydale Sports Complex",
      sport: "Tennis",
      numberOfCourts: 6,
      charges: "Ksh 1,800 per hour",
      daysOfOperation: "Monday - Sunday: 6:00 AM - 10:00 PM",
      courtManager: {
        name: "Jane Smith",
        phone: "+0987654321",
        email: "janesmith@sunnydale.com",
      },
      blockBooking: "Available for weekdays, 15% discount on 5+ hours booking"
    },
    {
      name: "Riverside Tennis Academy",
      sport: "Tennis",
      numberOfCourts: 5,
      charges: "Ksh 2,200 per hour",
      daysOfOperation: "Monday - Saturday: 7:00 AM - 9:00 PM",
      courtManager: {
        name: "Bob Johnson",
        phone: "+1122334455",
        email: "bobjohnson@riverside.com",
      },
      blockBooking: "Available for mornings, 20% discount on 3+ hours booking"
    },
  ];

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">Courts Available for Block Booking</h1>
        <p className="text-lg mb-8 text-blue-800">
          Explore our available courts and enjoy special discounts on block bookings.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courts.map((court, index) => (
            <CourtCard key={index} {...court} />
          ))}
        </div>
      </div>

      
    </div>
  );
};

const CourtCard = ({ name, sport, numberOfCourts, charges, daysOfOperation, courtManager, blockBooking }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-sm mb-1">Sport: {sport}</p>
      <p className="text-sm mb-1">Number of Courts: {numberOfCourts}</p>
      <p className="text-sm mb-1">Charges: {charges}</p>
      <p className="text-sm mb-1">Days of Operation: {daysOfOperation}</p>
      <p className="text-sm mb-1">Court Manager: {courtManager.name}</p>
      <p className="text-sm mb-1">Phone: {courtManager.phone}</p>
      <p className="text-sm mb-1">Email: {courtManager.email}</p>
      <p className="text-sm font-semibold mt-4">Block Booking: {blockBooking}</p>
    </div>
  );
};

export default BlockBooking;
