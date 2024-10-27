import React, { useState, useEffect } from "react";
import styles from "./style";
import { Navbar, Footer, Events, Booking1 } from "./components";
import Login from "./components/Login"; // Import the Login component
import jsPDF from "jspdf"; // Import jsPDF
import "jspdf-autotable"; // For better table formatting


const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/juniors/getPlayers";
        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
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
  }, []);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const handleEditPlayer = (player) => {
    setEditMode(true);
    setCurrentPlayer(player);
  };

  const handleUpdatePlayer = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://hybridsports-69backend-85bb3e426b16.herokuapp.com/juniors/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentPlayer),
      });

      if (response.ok) {
        const updatedPlayer = await response.json();
        setRankings((prevRankings) =>
          prevRankings.map((player) =>
            player.id === updatedPlayer.id ? updatedPlayer : player
          )
        );
        setEditMode(false);
      } else {
        console.error("Error updating player:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating player:", error);
    }
  };


  const generatePDF = async (playerId) => {
    try {
      const response = await fetch(`https://hybridsports-69backend-85bb3e426b16.herokuapp.com/getPlayer?id=${playerId}`);

      if (response.ok) {
        const player = await response.json();

        const doc = new jsPDF();
        doc.text("Player Information", 20, 10);
        doc.autoTable({
          head: [["Field", "Value"]],
          body: [
            ["Full Name", player.fullName],
            ["Age", player.age],
            ["Partner", player.partner],
            ["Coach/Academy", player.coach_Academy],
            ["Phone Number", player.phoneNo],
            ["Gender", player.gender],
          ],
        });

        doc.save(`${player.fullName}_player_info.pdf`);
      } else {
        console.error("Error fetching player data:", response.statusText);
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const handleDeletePlayer = async (playerId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this player?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`https://hybridsports-69backend-85bb3e426b16.herokuapp.com/delete?id=${playerId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setRankings((prevRankings) => prevRankings.filter((player) => player.id !== playerId));
      } else {
        console.error("Error deleting player:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  const renderPlayerCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
      {rankings.slice(0, showMore ? rankings.length : 5).map((player, index) => (
        <div key={index} className="shadow-lg rounded-lg p-4 text-center border bg-white">
          <h3 className="text-lg font-bold mb-2">{player.fullName}</h3>
          <p className="text-gray-700"><span className="font-semibold">Age: </span>{player.age}</p>
          <p className="text-gray-700"><span className="font-semibold">Partner: </span>{player.partner}</p>
          <p className="text-gray-700"><span className="font-semibold">Coach/Academy: </span>{player.coach_Academy}</p>
          <p className="text-gray-700"><span className="font-semibold">Phone Number: </span>{player.phoneNo}</p>
          <p className="text-gray-700"><span className="font-semibold">Gender: </span>{player.gender}</p>
          <button onClick={() => handleEditPlayer(player)} className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
          <button onClick={() => handleDeletePlayer(player.id)} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          <button onClick={() => generatePDF(player.id)} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">generatePDF</button>
        </div>
      ))}
    </div>
  );

  const renderEditForm = () => (
    <form onSubmit={handleUpdatePlayer} className="p-4 max-w-md mx-auto bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Edit Player Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
        <input type="text" value={currentPlayer.fullName} onChange={(e) => setCurrentPlayer({ ...currentPlayer, fullName: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
        <input type="number" value={currentPlayer.age} onChange={(e) => setCurrentPlayer({ ...currentPlayer, age: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Partner</label>
        <input type="text" value={currentPlayer.partner} onChange={(e) => setCurrentPlayer({ ...currentPlayer, partner: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Coach/Academy</label>
        <input type="text" value={currentPlayer.coach_Academy} onChange={(e) => setCurrentPlayer({ ...currentPlayer, coach_Academy: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
        <input type="text" value={currentPlayer.phoneNo} onChange={(e) => setCurrentPlayer({ ...currentPlayer, phoneNo: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
        <select value={currentPlayer.gender} onChange={(e) => setCurrentPlayer({ ...currentPlayer, gender: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
      <button type="button" onClick={() => setEditMode(false)} className="ml-2 bg-blue-950 text-white px-4 py-2 rounded">Cancel</button>
    </form>
  );

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="bg-gray-600 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.flexCenter} flex-col`}>
        
          
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        <h2 className="text-2xl font-bold mb-4">National Junior Circuit Rankings</h2>
          {loading ? <div>Loading ...</div> : editMode ? renderEditForm() : renderPlayerCards()}
          {!editMode && (
            <button onClick={toggleShowMore} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
              {showMore ? "Show Less" : "Show More"}
            </button>
            
          )}
          <Booking1/>
        
      </div>
    <Footer  className="bg-black"/>
    </div>
  );
};

export default Admin;                                                                                          