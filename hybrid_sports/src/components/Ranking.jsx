import React, { useState, useEffect } from 'react';

const Ranking = () => {
  const [selectedCategory, setSelectedCategory] = useState('menSingles');
  const [showMore, setShowMore] = useState(false);
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = selectedCategory === 'menSingles'
          ? "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/menSingles/getPlayers"
          : "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/womenSingles/getPlayers"; // Switch API URL based on category

        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          // Sort by points (highest to lowest)
          const sortedData = data.data.sort((a, b) => b.points - a.points);
          setRankings(sortedData);
          setLoading(false);
        } else {
          console.error("Error: ", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [selectedCategory]); // Fetches data again when selectedCategory changes

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowMore(false); // Reset the "Show More" state when switching categories
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const renderTable = () => (
    <table className="min-w-full border border-transparent mb-4">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Rank</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Age</th>
          <th className="py-2 px-4 border-b">Points</th>
        </tr>
      </thead>
      <tbody>
        {rankings.slice(0, showMore ? rankings.length : 5).map((player, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b text-center">{index + 1}</td> {/* Adjusted rank based on sorted position */}
            <td className="py-2 px-4 border-b">{player.name}</td>
            <td className="py-2 px-4 border-b text-center">{player.age}</td>
            <td className="py-2 px-4 border-b text-center">{player.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <section id="ranking" className="my-8 opacity-75">
      <h2 className="text-blue-800 text-2xl font-bold mb-4">MERCAVI_TOUR Rankings</h2>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => handleCategoryChange('menSingles')}
          className={`py-2 px-4 rounded ${selectedCategory === 'menSingles' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}
        >
          Men Singles
        </button>
        <button
          onClick={() => handleCategoryChange('womenSingles')}
          className={`py-2 px-4 rounded ${selectedCategory === 'womenSingles' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}
        >
          Women Singles
        </button>
      </div>

      {renderTable()}
      <button onClick={toggleShowMore} className="bg-blue-500 text-white py-2 px-4 rounded">
        {showMore ? 'See Less' : 'See More'}
      </button>
    </section>
  );
};

export default Ranking;
