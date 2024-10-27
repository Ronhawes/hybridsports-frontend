import { useState } from 'react';
import styles from "./style";
import { Navbar, Footer, Testimonials, Player2Registration } from "./components";
import { player01, player02, player03, player04, player05, player06 , tour16,tour17} from './assets';

const PlayersPage = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const players = [
    {
      name: "Mark Mabonga",
      age: 28,
      gender: "Male",
      sport: "Tennis",
      nationality: "Kenyan",
      dateOfBirth: "1996-08-16",
      dominantFootHand: "Right-handed",
      statisticsRankings: { currentRank: 12, winLossRecord: "45-20" },
      briefHistory: "Mark started playing tennis at the age of 6 and has participated in various international tournaments.",
      personalStatement: "My goal is to break into the top 10 and represent my country in the Olympics.",
      contactInfo: { phone: "+1234567890", email: "mark@example.com", socialMedia: "@marktennis" },
      profilePicture: player02,
    },
   
    
      {
        name: "Okenye",
        age: 25,
        gender: "Male",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "1999-05-10",
        dominantFootHand: "Right-handed",
        statisticsRankings: {
          currentRank: 18,
          winLossRecord: "40-15",
        },
        briefHistory: "Okenye has been playing tennis for over 10 years and has competed in regional championships.",
        personalStatement: "My goal is to become the top-ranked player in Kenya and participate in international tournaments.",
        contactInfo: {
          phone: "+254711234567",
          email: "okenye@example.com",
          socialMedia: "@okenye_tennis",
        },
        profilePicture: player03, // Placeholder image
      },
     
        
      {
        name: "Esther",
        age: 28,
        gender: "Female",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "1995-10-30",
        dominantFootHand: "Right-handed",
        statisticsRankings: {
          currentRank: 9,
          winLossRecord: "55-13",
        },
        briefHistory: "Esther has been a dominant figure in women's tennis in Kenya for several years.",
        personalStatement: "I am dedicated to pushing the boundaries of women's tennis in Kenya.",
        contactInfo: {
          phone: "+254722345678",
          email: "esther@example.com",
          socialMedia: "@esther_tennis",
        },
        profilePicture: player02, // Placeholder image
      }
    ];
    
  

  const handlePlayerClick = (player) => setSelectedPlayer(player);

  const handleCloseProfile = () => setSelectedPlayer(null);

  return (
    <div className="bg-gray-500 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
          <Player2Registration />
        </div>
      </div>

      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 ">
        <h1 className="text-black-800 text-5xl italic font-bold mb-4 text-center">
        PLAYERS
        </h1> <br />
<div className="flex flex-col md:flex-row items-center justify-center mb-6">
  <div className="w-full md:w-1/2 p-2">
  <p className=" mb-6 text-white max-w-[900px] text-3xl font-bold italic text-center">Player Management:</p>
    <ul className="text-center text-white max-w-[900px] text-3xl font-bold italic">
      <li>Tournament registration and scheduling</li>
      <li>Travel arrangements (flights, accommodation)</li>
      <li>Training programs during tournaments</li>
      <li>Professional profile creation for athletes</li>
    </ul>
  </div>
  <div className="w-full md:w-1/2 p-2">
    <img src={tour17} alt="Coaching Image" className="w-[600px] h-72 object-cover rounded-lg" />
  </div>
</div>


        <h1 className="text-3xl font-bold mb-4 text-dimWhite">See our players</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {players.map((player, index) => (
            <PlayerCard
              key={index}
              {...player}
              onClick={() => handlePlayerClick(player)}
            />
          ))}
        </div>

        {selectedPlayer && (
          <PlayerProfile
            player={selectedPlayer}
            onClose={handleCloseProfile}
          />
        )}
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Testimonials />
        </div>
      </div>
      <Footer className="bg-slate-900" />
    </div>
  );
};

const PlayerCard = ({ name, age, gender, sport, nationality, profilePicture, onClick }) => {
  return (
    <div className="bg-black text-white shadow-md rounded p-4 cursor-pointer" onClick={onClick}>
      <img
        src={profilePicture}
        alt={`Profile picture of ${name}`}
        className="w-full h-48 object-cover rounded-t"
      />
      <div>
        <h2 className="text-lg font-bold mb-2">{name}</h2>
        <p className="text-sm">{sport}</p>
        <p className="text-xs">{nationality}</p>
      </div>
    </div>
  );
};

const PlayerProfile = ({ player, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-blue-950 p-5 rounded shadow-md w-full max-w-lg mx-4">
        <h2 className="text-xl font-bold text-dimwhite">{player.name}</h2>
        <img src={player.profilePicture} alt={`Profile picture of ${player.name}`} className="w-32 h-32 rounded-full mb-4" />
        <p className="text-lg font-semibold text-dimwhite">Sport: {player.sport}</p>
        <p className="text-md text-white">Age: {player.age}</p>
        <p className="text-md text-white">Gender: {player.gender}</p>
        <p className="text-md text-white">Nationality: {player.nationality}</p>
        <p className="text-md text-white">Date of Birth: {player.dateOfBirth}</p>
        <p className="text-md text-white">Dominant Foot/Hand: {player.dominantFootHand}</p>
        <p className="text-md text-white">Current Rank: {player.statisticsRankings.currentRank}</p>
        <p className="text-md text-white">Win/Loss Record: {player.statisticsRankings.winLossRecord}</p>
        <p className="text-md text-white">Brief History: {player.briefHistory}</p>
        <p className="text-md text-white">Personal Statement: {player.personalStatement}</p>
        <p className="text-md text-white">Contact Information:</p>
        <ul className="text-md text-white">
          <li>Phone: {player.contactInfo.phone}</li>
          <li>Email: {player.contactInfo.email}</li>
          <li>
            Instagram: 
            {player.contactInfo.socialMedia ? (
              <a 
                href={`https://www.instagram.com/${player.contactInfo.socialMedia.replace('@', '')}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 underline"
              >
                {player.contactInfo.socialMedia}
              </a>
            ) : (
              " Not provided"
            )}
          </li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};


export default PlayersPage;
