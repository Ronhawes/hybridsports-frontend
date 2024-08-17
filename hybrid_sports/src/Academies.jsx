import { useState } from "react";
import styles from "./style";
import { Navbar, Footer, Testimonials, SignIn } from "./components";
import { soccer, racket, racket2, racket3 } from './assets';

const AcademiesPage = () => {
  const [selectedAcademy, setSelectedAcademy] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const academies = [
    {
      name: "Soccer Academy",
      description: "Our football academy offers training programs for players of all ages and skill levels.",
      image: soccer,
      link: "/academies/football",
      sport: "soccer",
      Day_of_Operating: "Monday-Saturday",
      phoneNo: "+2547891828483",
      Email: "soccer@gmail.com",
      Address: "P.O. Box 12345",
      pitches: "5 pitches available"
    },
    {
      name: "Padel Academy",
      description: "Our basketball academy provides training programs focused on skill development and team play.",
      image: racket,
      link: "/academies/basketball",
      sport: "padel",
      Day_of_Operating: "Monday-Saturday",
      phoneNo: "+2547891828483",
      Email: "hybridsports@gmail.com",
      Address: "P.O. Box 89000",
      pitches: "2 courts available"
    },
    {
      name: "HYBRID TENNIS COMMUNITY",
      description: "Our tennis academy offers private and group lessons for players of all ages and skill levels.",
      image: racket3,
      link: "/academies/tennis",
      sport: "tennis",
      Day_of_Operating: "Monday-Saturday",
      phoneNo: "+2547891828483",
      Email: "hybridsports@gmail.com",
      Address: "P.O. Box 20000",
      pitches: "8 courts available"
    },
    {
      name: "Swimming Academy",
      description: "Our swim academy offers training programs for swimmers of all ages and skill levels.",
      image: racket2,
      link: "/academies/swim",
      sport: "soccer",
      Day_of_Operating: "Monday-Saturday",
      phoneNo: "+2547891828483",
      Email: "hybridsports@gmail.com",
      Address: "P.O. Box 272600",
      pitches: "A full pool available"
    }
  ];

  const handleAcademyClick = (academy) => {
    setSelectedAcademy(academy);
    setShowRegistrationForm(false); // Reset form visibility
  };

  const handleCloseProfile = () => {
    setSelectedAcademy(null);
  };

  const handleRegister = () => {
    // Handle registration logic
    alert("Registration successfully submitted!");
    setShowRegistrationForm(false);
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <SignIn>Sign in to your Academy</SignIn>
        </div>
      </div>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-green-700 text-3xl font-bold mb-4">Our Academies</h1>
        <p className="text-green-700 mb-8">
          Our academies offer specialized training programs for athletes and individuals looking to improve their skills and performance.
        </p>

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

const AcademyCard = ({ name, description, image, onClick, sport, pitches }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 cursor-pointer" onClick={onClick}>
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t" />
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-sm mb-4">{sport}</p>
      <p className="text-sm mb-4">{pitches}</p>
      <p className="text-sm mb-4">{description}</p>
      <button className="btn btn-primary underline">Visit page</button>
    </div>
  );
};

const AcademyProfile = ({ academy, onClose, onRegister }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-green-700 p-5 rounded shadow-md w-full max-w-lg mx-4">
        <h2 className="text-xl font-bold">{academy.name}</h2>
        <img src={academy.image} alt={academy.name} className="w-32 h-32 rounded-full mb-4" />
        <p className="text-md">{academy.Day_of_Operating}</p>
        <p className="text-md">{academy.phoneNo}</p>
        <p className="text-md">{academy.Email}</p>
        <p className="text-md">{academy.Address}</p>
        <SignIn>My Account</SignIn>
        <a href={academy.link} className="mt-4 bg-blue-500 text-white p-2 rounded inline-block">
          Visit Academy
        </a>
        <button onClick={onRegister} className="mt-4 bg-blue-500 text-white p-2 rounded">
          Join Academy
        </button>
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
      <div className="bg-white p-5 rounded shadow-md w-full max-w-lg mx-4">
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

        <button
          type="button"
          onClick={onRegister}
          className="mt-4 bg-green-500 text-white p-2 rounded"
        >
          Register
        </button>

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
