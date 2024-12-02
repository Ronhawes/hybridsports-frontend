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
      setError(null);
      try {
        const apiUrl =
          selectedCategory === 'coachesBooking'
            ? "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/coachesBooking/getPlayers"
            : "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/courts/getPlayers";

        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          setBookings(data);
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
    setShowMore(false);
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const renderBoxes = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
      {Array.isArray(bookings) &&
        bookings.slice(0, showMore ? bookings.length : 5).map((booking, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-300"
          >
            <h3 className="text-lg font-semibold mb-2">{booking.fullName}</h3>
            <p><strong>Email:</strong> {booking.email}</p>
            <p><strong>ID Number:</strong> {booking.idNo}</p>
            <p><strong>Phone Number:</strong> {booking.phoneNo}</p>
            <p><strong>Day:</strong> {booking.day}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>{selectedCategory === 'coachesBooking' ? 'Coach' : 'Court'}:</strong> {selectedCategory === 'coachesBooking' ? booking.coach : booking.court}</p>
          </div>
        ))}
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
      {renderBoxes()}
      <button onClick={toggleShowMore} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        {showMore ? 'See Less' : 'See More'}
      </button>
    </section>
  );
};

export default Booking1;
