import React, { useState, useEffect } from 'react';

const Tickets = () => {
  const [showMore, setShowMore] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editBooking, setEditBooking] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const apiUrl = "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/tickets/getPlayers";
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

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://hybridsports-69backend-85bb3e426b16.herokuapp.com/tickets/delete`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setBookings((prev) => prev.filter((booking) => booking.id !== id));
      } else {
        console.error("Error deleting ticket: ", response.statusText);
        alert('Failed to delete ticket');
      }
    } catch (error) {
      console.error("Error deleting ticket: ", error);
      alert('Failed to delete ticket');
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`https://hybridsports-69backend-85bb3e426b16.herokuapp.com/tickets/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editBooking),
      });

      if (response.ok) {
        fetchData(); // Refresh the list after successful update
        setEditBooking(null); // Reset edit mode
      } else {
        console.error("Error updating ticket: ", response.statusText);
        alert('Failed to update ticket');
      }
    } catch (error) {
      console.error("Error updating ticket: ", error);
      alert('Failed to update ticket');
    }
  };

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const renderTickets = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.isArray(bookings) &&
        bookings.slice(0, showMore ? bookings.length : 5).map((booking) => (
          <div key={booking.id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            {editBooking && editBooking.id === booking.id ? (
              <>
                <input
                  type="text"
                  value={editBooking.fullName}
                  onChange={(e) => setEditBooking({ ...editBooking, fullName: e.target.value })}
                  className="w-full mb-2 border rounded px-2 py-1"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  value={editBooking.email}
                  onChange={(e) => setEditBooking({ ...editBooking, email: e.target.value })}
                  className="w-full mb-2 border rounded px-2 py-1"
                  placeholder="Email"
                />
                <p className="mb-2 text-gray-700">ID Number: {booking.idNo}</p>
                <input
                  type="text"
                  value={editBooking.phoneNo}
                  onChange={(e) => setEditBooking({ ...editBooking, phoneNo: e.target.value })}
                  className="w-full mb-2 border rounded px-2 py-1"
                  placeholder="Phone Number"
                />
                <p className="mb-2 text-gray-700">Gender: {booking.gender}</p>
                <p className="mb-2 text-gray-700">Country: {booking.country}</p>
                <p className="mb-2 text-gray-700">Physical Condition: {booking.physicalCondition}</p>
                <p className="mb-2 text-gray-700">Price: {booking.price}</p>
                <div className="flex justify-end">
                  <button onClick={() => handleUpdate(booking.id)} className="bg-green-500 text-white py-1 px-4 rounded mr-2">
                    Save
                  </button>
                  <button onClick={() => setEditBooking(null)} className="bg-gray-500 text-white py-1 px-4 rounded">
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{booking.fullName}</h3>
                <p className="text-gray-700 mb-2">Email: {booking.email}</p>
                <p className="text-gray-700 mb-2">ID Number: {booking.idNo}</p>
                <p className="text-gray-700 mb-2">Phone Number: {booking.phoneNo}</p>
                <p className="text-gray-700 mb-2">Gender: {booking.gender}</p>
                <p className="text-gray-700 mb-2">Country: {booking.country}</p>
                <p className="text-gray-700 mb-2">Physical Condition: {booking.physicalCondition}</p>
                <p className="text-gray-700 mb-2">Price: {booking.price}</p>
                <div className="flex justify-end">
                  <button onClick={() => setEditBooking(booking)} className="bg-yellow-500 text-white py-1 px-4 rounded mr-2">
                    Update
                  </button>
                  <button onClick={() => handleDelete(booking.id)} className="bg-red-500 text-white py-1 px-4 rounded">
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <section id="tickets" className="my-8 opacity-75">
      <h2 className="text-blue-800 text-2xl font-bold mb-4">HybridSports Tickets</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {renderTickets()}
      <button onClick={toggleShowMore} className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
        {showMore ? 'See Less' : 'See More'}
      </button>
    </section>
  );
};

export default Tickets;
