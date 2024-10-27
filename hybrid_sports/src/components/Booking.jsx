import React, { useState, useEffect } from 'react';

const Booking1 = () => {
  const [selectedCategory, setSelectedCategory] = useState('coachesBooking');
  const [showMore, setShowMore] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error before fetching
      try {
        const apiUrl =
          selectedCategory === 'coachesBooking'
            ? "http://localhost:2345/coachesBooking/getPlayers"
            : "http://localhost:2345/courts/getPlayers";

        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          setBookings(data); // Update state with the fetched data
        } else {
          console.error("Error: ", response.statusText);
          setError('Failed to fetch data');
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowMore(false); // Reset the "Show More" state when switching categories
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const renderTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-transparent mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">ID Number</th>
            <th className="py-2 px-4 border-b">Phone Number</th>
            <th className="py-2 px-4 border-b">Time</th>
            <th className="py-2 px-4 border-b">Coach</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(bookings) &&
            bookings.slice(0, showMore ? bookings.length : 5).map((booking, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{booking.fullName}</td>
                <td className="py-2 px-4 border-b">{booking.email}</td>
                <td className="py-2 px-4 border-b text-center">{booking.idNo}</td>
                <td className="py-2 px-4 border-b text-center">{booking.phoneNo}</td>
                <td className="py-2 px-4 border-b text-center">{booking.time}</td>
                <td className="py-2 px-4 border-b text-center">{booking.coach}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <section id="ranking" className="my-8 opacity-75">
      <h2 className="text-blue-800 text-2xl font-bold mb-4">HybridSports Bookings</h2>
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => handleCategoryChange('coachesBooking')}
          className={`py-2 px-4 rounded transition-colors duration-300 ${
            selectedCategory === 'coachesBooking' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'
          }`}
        >
          CoachesBooking
        </button>
        <button
          onClick={() => handleCategoryChange('courts')}
          className={`py-2 px-4 rounded transition-colors duration-300 ${
            selectedCategory === 'courts' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'
          }`}
        >
          CourtBooking
        </button>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}
      {renderTable()}
      <button onClick={toggleShowMore} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        {showMore ? 'See Less' : 'See More'}
      </button>
    </section>
  );
};

export default Booking1;
