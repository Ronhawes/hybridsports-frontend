import { useState } from 'react';
import styles from "./style";
import { Navbar, Footer, Testimonials, PlayerRegistration, SignIn, } from "./components";
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
      statisticsRankings: {
        currentRank: 12,
        winLossRecord: "45-20"
      },
      briefHistory: "Mark started playing tennis at the age of 6 and has participated in various international tournaments.",
      personalStatement: "My goal is to break into the top 10 and represent my country in the Olympics.",
      contactInfo: {
        phone: "+1234567890",
        email: "mark@example.com",
        socialMedia: "@marktennis"
      },
      profilePicture: player02,
    },
    {
      name: "Jane Smith",
      age: 24,
      gender: "Female",
      sport: "Tennis",
      nationality: "American",
      dateOfBirth: "2000-05-25",
      dominantFootHand: "Left-handed",
      statisticsRankings: {
        currentRank: 5,
        winLossRecord: "60-10"
      },
      briefHistory: "Jane has been a key player in her college team, leading them to several championships.",
      personalStatement: "I aim to play in the Women's World Cup and inspire young girls to pursue tennis.",
      contactInfo: {
        phone: "+0987654321",
        email: "jane@example.com",
        socialMedia: "@janesmithtennis"
      },
      profilePicture: player01,
    },
    {
      name: "Bob Johnson",
      age: 30,
      gender: "Male",
      sport: "Tennis",
      nationality: "British",
      dateOfBirth: "1994-03-10",
      dominantFootHand: "Right-handed",
      statisticsRankings: {
        currentRank: 8,
        winLossRecord: "35-12"
      },
      briefHistory: "Bob has competed in several national tennis competitions and has a strong track record.",
      personalStatement: "Tennis is my passion, and I aim to continue improving my personal bests.",
      contactInfo: {
        phone: "+1122334455",
        email: "bob@example.com",
        socialMedia: "@bobtennis"
      },
      profilePicture: player03,
    },
    {
      name: "Alice Cooper",
      age: 26,
      gender: "Female",
      sport: "Tennis",
      nationality: "Australian",
      dateOfBirth: "1998-07-14",
      dominantFootHand: "Right-handed",
      statisticsRankings: {
        currentRank: 10,
        winLossRecord: "50-25"
      },
      briefHistory: "Alice has been playing tennis since she was 7 and has won several regional titles.",
      personalStatement: "I am determined to win a Grand Slam and inspire others in my community.",
      contactInfo: {
        phone: "+4455667788",
        email: "alice@example.com",
        socialMedia: "@alicecooper_tennis"
      },
      profilePicture: player04,
    },
    {
      name: "David Lee",
      age: 22,
      gender: "Male",
      sport: "Tennis",
      nationality: "Canadian",
      dateOfBirth: "2002-02-20",
      dominantFootHand: "Left-handed",
      statisticsRankings: {
        currentRank: 15,
        winLossRecord: "30-15"
      },
      briefHistory: "David is a rising star in the tennis world, known for his powerful serves.",
      personalStatement: "I want to be the best player in the world and bring pride to my country.",
      contactInfo: {
        phone: "+6677889900",
        email: "david@example.com",
        socialMedia: "@davidleetennis"
      },
      profilePicture: player05,
    },
    {
      name: "Sophia Martinez",
      age: 27,
      gender: "Female",
      sport: "Tennis",
      nationality: "Spanish",
      dateOfBirth: "1997-09-05",
      dominantFootHand: "Right-handed",
      statisticsRankings: {
        currentRank: 7,
        winLossRecord: "55-18"
      },
      briefHistory: "Sophia has represented her country in multiple international tournaments and has a strong winning streak.",
      personalStatement: "Tennis is not just a sport for me; it's a way of life. I aim to be an inspiration for the next generation.",
      contactInfo: {
        phone: "+2233445566",
        email: "sophia@example.com",
        socialMedia: "@sophiamartinez_tennis"
      },
      profilePicture: player06,
    },
  ];

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseProfile = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="bg-gray-600 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <PlayerRegistration />
        </div>
      </div>
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">Life is Better When We Play Together 🎾</h1>
        <h1 className="text-xl3 sm:text-xl4 leading-xl sm:leading-xl2 font-bold text-gray-500 factorial__headingFontFamily">
        At HybridSports, we're revolutionizing the world of sports by bringing together traditional and emerging sports through our cutting-edge platform. As the largest sports booking app and SaaS for venues, we're not just focusing on racket sports—we're bridging the gap between various disciplines, from tennis and padel to new-age hybrid sports that blend the best of both worlds.

With a global footprint in over 49 countries, we've partnered with 4,800 clubs, offering access to 21,000 courts and connecting 3.1 million players. Our community is passionate about exploring new ways to play, blending classic sports with innovative hybrids that challenge the status quo.

Whether you're a fan of traditional racket sports or curious about trying something new, HybridSports is your gateway to a diverse sports experience. Join us as we push the boundaries of sports engagement, connecting players and venues in ways that inspire creativity and competition.

Explore the future of sports with HybridSports—where innovation meets passion, and everyone can find their perfect game.
          Meet our talented athletes who are excelling in their respective sports.
        </h1>
        <br></br>
        <h1 className="text-3xl font-bold mb-4 text-blue-800">See our players</h1>
        <div className="space-y-4">
  {players.map((player, index) => (
    <PlayerCard
      key={index}
      {...player}
      onClick={() => handlePlayerClick(player)}
    />
  ))}
</div>

        <div className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <div className="flex  mt-50">
            <PlayerRegistration className="ml-4">Player Registration</PlayerRegistration>
          </div>
        </div>
        <br></br>
      </div>

      {selectedPlayer && (
        <PlayerProfile
          player={selectedPlayer}
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

const PlayerCard = ({ name, age, gender, sport, nationality, profilePicture, onClick }) => {
  return (
    <article className="bg-blue-950 shadow-md rounded p-4 cursor-pointer" onClick={onClick}>
      <div className="flex items-center mb-4">
        <img src={profilePicture} alt={`Profile picture of ${name}`} className="w-16 h-16 rounded-full mr-4" />
        <div>
          <h2 className="text-lg text-fuchsia-700 font-bold">{name}</h2>
          <p className="text-sm text-fuchsia-200 mb-1">Sport: {sport}</p>
          <p className="text-sm text-fuchsia-200 mb-1">Age: {age}</p>
          <p className="text-sm text-fuchsia-200 mb-1">Gender: {gender}</p>
          <p className="text-sm text-fuchsia-200 mb-1">Nationality: {nationality}</p>
        </div>
      </div>
    </article>
  );
};

const PlayerProfile = ({ player, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-blue-950 p-5 rounded shadow-md w-full max-w-lg mx-4">
        <h2 className="text-xl font-bold">{player.name}</h2>
        <img src={player.profilePicture} alt={`Profile picture of ${player.name}`} className="w-32 h-32 rounded-full mb-4" />
        <p className="text-lg font-semibold">Sport: {player.sport}</p>
        <p className="text-md">Age: {player.age}</p>
        <p className="text-md">Gender: {player.gender}</p>
        <p className="text-md">Nationality: {player.nationality}</p>
        <p className="text-md">Date of Birth: {player.dateOfBirth}</p>
        <p className="text-md">Dominant Foot/Hand: {player.dominantFootHand}</p>
        <p className="text-md">Current Rank: {player.statisticsRankings.currentRank}</p>
        <p className="text-md">Win/Loss Record: {player.statisticsRankings.winLossRecord}</p>
        <p className="text-md">Brief History: {player.briefHistory}</p>
        <p className="text-md">Personal Statement: {player.personalStatement}</p>
        <p className="text-md">Contact Information:</p>
        <ul className="text-md">
          <li>Phone: {player.contactInfo.phone}</li>
          <li>Email: {player.contactInfo.email}</li>
          <li>Social Media: {player.contactInfo.socialMedia}</li>
        </ul>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PlayersPage;
