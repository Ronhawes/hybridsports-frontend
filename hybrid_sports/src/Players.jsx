import { useState } from 'react';
import styles from "./style";
import { Navbar, Footer, Testimonials, PlayerRegistration } from "./components";
import { player01, player02, player03, player04, player05, player06 } from './assets';

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
        name: "Musembi",
        age: 28,
        gender: "Male",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "1995-08-12",
        dominantFootHand: "Left-handed",
        statisticsRankings: {
          currentRank: 22,
          winLossRecord: "35-12",
        },
        briefHistory: "Musembi has been a tennis enthusiast since childhood and has competed in various national tournaments.",
        personalStatement: "I am committed to refining my skills and representing Kenya on the global tennis stage.",
        contactInfo: {
          phone: "+254722345678",
          email: "musembi@example.com",
          socialMedia: "@musembi_tennis",
        },
        profilePicture: player04, // Placeholder image
      },
      {
        name: "Mulei",
        age: 30,
        gender: "Male",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "1993-03-22",
        dominantFootHand: "Right-handed",
        statisticsRankings: {
          currentRank: 17,
          winLossRecord: "45-10",
        },
        briefHistory: "Mulei has consistently ranked in the top 20 players in Kenya and is known for his powerful serves.",
        personalStatement: "I aim to push myself to the limits and represent Kenya in international competitions.",
        contactInfo: {
          phone: "+254733456789",
          email: "mulei@example.com",
          socialMedia: "@mulei_tennis",
        },
        profilePicture: player05, // Placeholder image
      },
      {
        name: "Nata",
        age: 24,
        gender: "Female",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "1999-06-18",
        dominantFootHand: "Right-handed",
        statisticsRankings: {
          currentRank: 12,
          winLossRecord: "50-20",
        },
        briefHistory: "Nata has competed in national tournaments since her teenage years and has shown great promise.",
        personalStatement: "I am determined to be a role model for young girls aspiring to play tennis in Kenya.",
        contactInfo: {
          phone: "+254744567890",
          email: "nata@example.com",
          socialMedia: "@nata_tennis",
        },
        profilePicture: player06, // Placeholder image
      },
      {
        name: "Solomon Karani",
        age: 27,
        gender: "Male",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "1996-09-05",
        dominantFootHand: "Right-handed",
        statisticsRankings: {
          currentRank: 10,
          winLossRecord: "55-15",
        },
        briefHistory: "Solomon is a veteran in the Kenyan tennis scene, with multiple national titles under his belt.",
        personalStatement: "My passion is to bring home an international title and raise the standard of tennis in Kenya.",
        contactInfo: {
          phone: "+254755678901",
          email: "solomon@example.com",
          socialMedia: "@solomon_tennis",
        },
        profilePicture: player02, // Placeholder image
      },
      {
        name: "Sam",
        age: 22,
        gender: "Male",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "2002-01-12",
        dominantFootHand: "Right-handed",
        statisticsRankings: {
          currentRank: 25,
          winLossRecord: "28-10",
        },
        briefHistory: "Sam is an up-and-coming tennis player with a lot of potential in the junior circuit.",
        personalStatement: "I aim to become a top-ranked player in the next few years and compete internationally.",
        contactInfo: {
          phone: "+254766789012",
          email: "sam@example.com",
          socialMedia: "@sam_tennis",
        },
        profilePicture: player01, // Placeholder image
      },
      {
        name: "Ronnie",
        age: 26,
        gender: "Male",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "1997-04-18",
        dominantFootHand: "Left-handed",
        statisticsRankings: {
          currentRank: 16,
          winLossRecord: "40-18",
        },
        briefHistory: "Ronnie has been a consistent performer in local tennis tournaments and is known for his agility on the court.",
        personalStatement: "I strive to continue improving and make my mark on the tennis world.",
        contactInfo: {
          phone: "+254777890123",
          email: "ronnie@example.com",
          socialMedia: "@ronnie_tennis",
        },
        profilePicture: player03, // Placeholder image
      },
      {
        name: "Edgar",
        age: 29,
        gender: "Male",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "1994-11-02",
        dominantFootHand: "Right-handed",
        statisticsRankings: {
          currentRank: 19,
          winLossRecord: "35-14",
        },
        briefHistory: "Edgar has a reputation for his endurance on the tennis court, participating in several marathon matches.",
        personalStatement: "I want to be the best tennis player I can be and inspire others to pursue their dreams.",
        contactInfo: {
          phone: "+254788901234",
          email: "edgar@example.com",
          socialMedia: "@edgar_tennis",
        },
        profilePicture: player04, // Placeholder image
      },
      {
        name: "Kinyua Paul",
        age: 24,
        gender: "Male",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "1999-03-15",
        dominantFootHand: "Right-handed",
        statisticsRankings: {
          currentRank: 14,
          winLossRecord: "45-20",
        },
        briefHistory: "Kinyua Paul is a young and talented player known for his speed and precision on the court.",
        personalStatement: "I am focused on perfecting my game and representing Kenya internationally.",
        contactInfo: {
          phone: "+254799012345",
          email: "kinyua@example.com",
          socialMedia: "@kinyua_tennis",
        },
        profilePicture: player05, // Placeholder image
      },
      {
        name: "Shakira",
        age: 23,
        gender: "Female",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "2000-08-25",
        dominantFootHand: "Left-handed",
        statisticsRankings: {
          currentRank: 13,
          winLossRecord: "42-16",
        },
        briefHistory: "Shakira has won multiple junior championships and is climbing the ranks in the senior category.",
        personalStatement: "My aim is to inspire young women to take up sports and become champions.",
        contactInfo: {
          phone: "+254700123456",
          email: "shakira@example.com",
          socialMedia: "@shakira_tennis",
        },
        profilePicture: player06, // Placeholder image
      },
      {
        name: "Christabel",
        age: 27,
        gender: "Female",
        sport: "Tennis",
        nationality: "Kenyan",
        dateOfBirth: "1996-01-20",
        dominantFootHand: "Right-handed",
        statisticsRankings: {
          currentRank: 11,
          winLossRecord: "50-12",
        },
        briefHistory: "Christabel has been a consistent performer in national tennis tournaments.",
        personalStatement: "I aspire to represent Kenya on the world stage and bring home trophies.",
        contactInfo: {
          phone: "+254711234567",
          email: "christabel@example.com",
          socialMedia: "@christabel_tennis",
        },
        profilePicture: player01, // Placeholder image
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
          <PlayerRegistration />
        </div>
      </div>

      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-black-800 text-3xl font-bold mb-4">
          Life is Better When We Play Together 🎾
        </h1>
        <p className="text-base mb-6 max-w-[900px]">Player Management:</p>
        <ul className="list-disc pl-5 mb-6">
          <li>Tournament registration and scheduling</li>
          <li>Travel arrangements (flights, accommodation)</li>
          <li>Training programs during tournaments</li>
          <li>Professional profile creation for athletes</li>
        </ul>

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
    <div className="bg-blue-950 text-white shadow-md rounded p-4 cursor-pointer" onClick={onClick}>
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
