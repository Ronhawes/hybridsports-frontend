import { useState } from "react";
import styles from "./style";
import { Navbar, Footer, Testimonials, SignIn,Academies, Academyregistration, } from "./components";
import { soccer, racket, racket2, racket3 ,tour16,tour17} from './assets';

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
        <h1 className="text-5xl italic font-bold mb-4 text-center ">ACADEMIES</h1><br />
       
        <div className="flex flex-col md:flex-row items-center justify-center mb-6">
  {/* Section 1: Image */}
  <div className="w-full md:w-1/2 p-2">
    <img src={tour16} alt="Coaching Image" className="w-[600px] h-72 object-cover rounded-lg" />
  </div>

  {/* Section 2: Text Content */}
  <div className="w-full md:w-1/2 p-2">
    <h1 className="text-center text-white max-w-[900px] text-3xl font-bold italic ">
    Join our academies for comprehensive training in Tennis and Padel.
    </h1>
  </div>
</div>

<br />
<br />
<br />
     
        <div className={`${styles.paragraph} max-w-[470px] mt-5`}>   
          <div className="flex  mt-50">
            
        
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
        <Academyregistration
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
          
        </div>
      </div>
      <div className='bg-slate-900'><Footer/></div>
    </div>
  );
};

const AcademyCard = ({ name, description, image, onClick, sport, dayOfOperating, workingHours, rates, pitches }) => {
  return (
    <div className="bg-black text-white shadow-md rounded p-4 cursor-pointer" onClick={onClick}>
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t" />
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-sm mb-2 font-semibold">{sport}</p>
      <p className="text-sm mb-2">{pitches}</p>
      <p className="text-sm mb-2">{description}</p>
      <p className="text-sm mb-2"><strong>Days:</strong> {dayOfOperating}</p>
      <p className="text-sm mb-2"><strong>Working Hours:</strong> {workingHours}</p>
      <p className="text-sm mb-2"><strong>Rates:</strong> {rates}</p>
    </div>
  );


};

const AcademyProfile = ({ academy, onClose, onRegister }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center ">
      <div className="bg-blue-950 p-5 rounded shadow-md w-full max-w-lg mx-4">
        <h2 className="text-xl text-white font-bold">{academy.name}</h2>
        <img src={academy.image} alt={academy.name} className="w-32 h-32 rounded-full mb-4" />
        <p className="text-md text-white"><strong>Days:</strong> {academy.dayOfOperating}</p>
        <p className="text-md text-white"><strong>Working Hours:</strong> {academy.workingHours}</p>
        <p className="text-md text-white"><strong>Rates:</strong> {academy.rates}</p>
        <p className="text-md text-white"><strong>Phone:</strong> {academy.phoneNo}</p>
        <p className="text-md text-white"><strong>Email:</strong> {academy.email}</p>
        <p className="text-md text-white"><strong>Address:</strong> {academy.address}</p>

        <button onClick={onRegister} className="mt-4 bg-black text-white p-2 rounded">
          Join Academy
        </button>
        <br></br>
        <button onClick={onClose} className="mt-4 bg-gray-500 text-white p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};


























































export default AcademiesPage;
