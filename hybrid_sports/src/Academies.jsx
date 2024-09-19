import { useState } from "react";
import styles from "./style";
import { Navbar, Footer, Testimonials, SignIn,Academies, PlayerRegistration} from "./components";
import { soccer, racket, racket2, racket3 } from './assets';

const AcademiesPage = () => {
  const [selectedAcademy, setSelectedAcademy] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    paymentMethod: ''
  });

  const academies = [
    {
      name: "SOCCER",
      description: "Our  academy offers training programs for players of all ages and skill levels.",
      image: soccer,
      link: "/academies/football",
      sport: "soccer",
      dayOfOperating: "Monday-Saturday",
      workingHours: "8:00 AM - 6:00 PM",
      rates: "$20 per hour",
      phoneNo: "+2547891828483",
      email: "soccer@gmail.com",
      address: "P.O. Box 12345",
      pitches: "5 pitches available"
    },
    {
      name: "PADEL",
      description: "Our  academy provides training programs focused on skill development and team play.",
      image: racket,
      link: "/academies/basketball",
      sport: "padel",
      dayOfOperating: "Monday-Saturday",
      workingHours: "9:00 AM - 5:00 PM",
      rates: "$25 per hour",
      phoneNo: "+2547891828483",
      email: "hybridsports@gmail.com",
      address: "P.O. Box 89000",
      pitches: "2 courts available"
    },
    {
      name: "TENNIS",
      description: "Our academy offers private and group lessons for players of all ages and skill levels.",
      image: racket3,
      link: "/academies/tennis",
      sport: "tennis",
      dayOfOperating: "Monday-Saturday",
      workingHours: "7:00 AM - 8:00 PM",
      rates: "$30 per hour",
      phoneNo: "+2547891828483",
      email: "hybridsports@gmail.com",
      address: "P.O. Box 20000",
      pitches: "8 courts available"
    },
    {
      name: "SWIMMING",
      description: "Our  academy offers training programs for swimmers of all ages and skill levels.",
      image: racket2,
      link: "/academies/swim",
      sport: "swimming",
      dayOfOperating: "Monday-Saturday",
      workingHours: "6:00 AM - 9:00 PM",
      rates: "$15 per hour",
      phoneNo: "+2547891828483",
      email: "hybridsports@gmail.com",
      address: "P.O. Box 272600",
      pitches: "A full pool available"
    }
  ];

  const handleAcademyClick = (academy) => {
    setSelectedAcademy(academy);
    setShowRegistrationForm(false);
  };

  const handleCloseProfile = () => {
    setSelectedAcademy(null);
  };

  const handleRegister = () => {
    alert("Registration successfully submitted!");
    setShowRegistrationForm(false);
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="bg-gray-500 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          
        </div>
      </div>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-blue-800 text-3xl font-bold mb-4">HYBRID SPORTS ACADEMY</h1>
        <h1 className="text-3xl font-bold mb-4 text-blue-800">We offer the following sports 🎾</h1>
        <h1 className="text-xl3 sm:text-xl4 leading-xl sm:leading-xl2 font-bold text-black factorial__headingFontFamily">
        At HybridSports, we're revolutionizing the world of sports by bringing together traditional and emerging sports through our cutting-edge platform. As the largest sports booking app and SaaS for venues, we're not just focusing on racket sports—we're bridging the gap between various disciplines, from tennis and padel to new-age hybrid sports that blend the best of both worlds.

With a global footprint in over 49 countries, we've partnered with 4,800 clubs, offering access to 21,000 courts and connecting 3.1 million players. Our community is passionate about exploring new ways to play, blending classic sports with innovative hybrids that challenge the status quo.

Whether you're a fan of traditional racket sports or curious about trying something new, HybridSports is your gateway to a diverse sports experience. Join us as we push the boundaries of sports engagement, connecting players and venues in ways that inspire creativity and competition.

Explore the future of sports with HybridSports—where innovation meets passion, and everyone can find their perfect game.
Our team of experienced coaches and trainers are dedicated to helping you achieve your fitness goals.
        </h1>
        <div className={`${styles.paragraph} max-w-[470px] mt-5`}>   
          <div className="flex  mt-50">
            <PlayerRegistration/>
        
          </div>
        </div>
        <br></br>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {academies.map((academy, index) => (
            <AcademyCard
              key={index}
              {...academy}
              onClick={() => handleAcademyClick(academy)}
            />
          ))}
        </div>
      </div>

      {selectedAcademy && (
        <AcademyProfile
          academy={selectedAcademy}
          onClose={handleCloseProfile}
          onRegister={() => setShowRegistrationForm(true)}
        />
      )}

      {showRegistrationForm && (
        <RegistrationForm
          academy={selectedAcademy}
          registrationData={registrationData}
          onChange={handleRegistrationChange}
          onRegister={handleRegister}
          onClose={() => setShowRegistrationForm(false)}
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

const AcademyCard = ({ name, description, image, onClick, sport, dayOfOperating, workingHours, rates, pitches }) => {
  return (
    <div className="bg-blue-950 text-fuchsia-200 shadow-md rounded p-4 cursor-pointer" onClick={onClick}>
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t" />
      <h2 className="text-lg  text-fuchsia-700 font-bold mb-2">{name}</h2>
      <p className="text-sm mb-2 font-semibold">{sport}</p>
      <p className="text-sm mb-2">{pitches}</p>
      <p className="text-sm mb-2">{description}</p>
      <p className="text-sm mb-2"><strong>Days:</strong> {dayOfOperating}</p>
      <p className="text-sm mb-2"><strong>Working Hours:</strong> {workingHours}</p>
      <p className="text-sm mb-2 text-blue-800"><strong>Rates:</strong> {rates}</p>
      
    </div>
  );
};

const AcademyProfile = ({ academy, onClose, onRegister }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-blue-950 p-5 rounded shadow-md w-full max-w-lg mx-4">
        <h2 className="text-xl font-bold">{academy.name}</h2>
        <img src={academy.image} alt={academy.name} className="w-32 h-32 rounded-full mb-4" />
        <p className="text-md"><strong>Days:</strong> {academy.dayOfOperating}</p>
        <p className="text-md"><strong>Working Hours:</strong> {academy.workingHours}</p>
        <p className="text-md text-blue-800"><strong>Rates:</strong> {academy.rates}</p>
        <p className="text-md"><strong>Phone:</strong> {academy.phoneNo}</p>
        <p className="text-md"><strong>Email:</strong> {academy.email}</p>
        <p className="text-md"><strong>Address:</strong> {academy.address}</p>
        
        <br></br>
        <button onClick={onRegister} className="mt-4 bg-blue-500 text-white p-2 rounded">
          Join Academy
        </button><br></br>
        <button onClick={onClose} className="mt-4 bg-gray-500 text-white p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

const RegistrationForm = ({ academy, registrationData, onChange, onRegister, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-yellow-100  p-5 rounded shadow-md w-full max-w-lg mx-4">
        <h2 className="text-xl font-bold">Register for {academy.name}</h2>

        <label className="mt-4 text-gray-700">Name:</label>
        <input 
          type="text" 
          name="name" 
          value={registrationData.name} 
          onChange={onChange} 
          className="bg-gray-200 border p-2 mb-4 w-full" 
          required 
        />

        <label className="mt-4 text-gray-700">Email:</label>
        <input 
          type="email" 
          name="email" 
          value={registrationData.email} 
          onChange={onChange} 
          className="bg-gray-200 border p-2 mb-4 w-full" 
          required 
        />

        <label className="mt-4 text-gray-700">Phone Number:</label>
        <input 
          type="tel" 
          name="phoneNumber" 
          value={registrationData.phoneNumber} 
          onChange={onChange} 
          className="bg-gray-200 border p-2 mb-4 w-full" 
          required 
        />

        <label className="mt-4 text-gray-700">Payment Method:</label>
        <select 
          name="paymentMethod" 
          value={registrationData.paymentMethod} 
          onChange={onChange} 
          className="bg-gray-200 border p-2 mb-4 w-full" 
          required 
        >
          <option value="">Select a payment method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="Mobile Money">Mobile Money</option>
        </select>

        <button
          type="button"
          onClick={onRegister}
          className="mt-4 bg-green-500 text-white p-2 rounded"
        >
          Register
        </button><br></br>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 bg-gray-500 text-white p-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AcademiesPage;
