import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fuuimebjfyjltklszjex.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1dWltZWJqZnlqbHRrbHN6amV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE2NTQwMDgsImV4cCI6MjAzNzIzMDAwOH0.ZSY7iOelzOlkG-IvxoyYHaOQpQEOag42dcqHriCzV4s'; // Replace with your Supabase API key
const supabase = createClient(supabaseUrl, supabaseKey);

const Ranking = () => {
  const [selectedCategory, setSelectedCategory] = useState('menSingles');
  const [showMore, setShowMore] = useState(false);
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const fetchRankings = async () => {
      console.log('Fetching data from:', selectedCategory);
      const { data, error } = await supabase
        .from(selectedCategory) // Fetch from the selected table
        .select('*');

      if (error) {
        console.error('Error fetching rankings:', error);
      } else {
        console.log('Fetched data:', data);
        setRankings(data);
      }
    };

    fetchRankings();
  }, [selectedCategory]); // Re-fetch data when category changes

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowMore(false); // Reset the "Show More" state when switching categories
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const renderTable = (rankings) => (
    <table className="min-w-full border border-transparent mb-4">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Rank</th>
          <th className="py-2 px-4 border-b">Player</th>
          <th className="py-2 px-4 border-b">Age</th>
          <th className="py-2 px-4 border-b">Points</th>
        </tr>
      </thead>
      <tbody>
        {rankings.slice(0, showMore ? rankings.length : 5).map((player, index) => (
          <tr key={index}>
            <td className="py-2 px-4 border-b text-center">{player.rank}</td>
            <td className="py-2 px-4 border-b">{player.name}</td>
            <td className="py-2 px-4 border-b text-center">{player.age}</td>
            <td className="py-2 px-4 border-b text-center">{player.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <section id="ranking" className="my-8 opacity-75">
      <h2 className='text-blue-800 text-2xl font-bold mb-4'>MERCAVI_TOUR Rankings</h2>
      <div className="flex space-x-4 mb-8">
        <button onClick={() => handleCategoryChange('menSingles')} className={`py-2 px-4 rounded ${selectedCategory === 'menSingles' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}>
          Men Singles
        </button>
        <button onClick={() => handleCategoryChange('womenSingles')} className={`py-2 px-4 rounded ${selectedCategory === 'womenSingles' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}>
          Women Singles
        </button>
        <button onClick={() => handleCategoryChange('menDoubles')} className={`py-2 px-4 rounded ${selectedCategory === 'menDoubles' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}>
          Men Doubles
        </button>
        <button onClick={() => handleCategoryChange('womenDoubles')} className={`py-2 px-4 rounded ${selectedCategory === 'womenDoubles' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}>
          Women Doubles
        </button>
        <button onClick={() => handleCategoryChange('mixedDoubles')} className={`py-2 px-4 rounded ${selectedCategory === 'mixedDoubles' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black'}`}>
          Mixed Doubles
        </button>
      </div>

      {renderTable(rankings)}
      <button onClick={toggleShowMore} className="bg-blue-500 text-white py-2 px-4 rounded">
        {showMore ? 'See Less' : 'See More'}
      </button>
    </section>
  );
};

export default Ranking;
