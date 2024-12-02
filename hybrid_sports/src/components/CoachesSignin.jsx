import React, { useState } from "react";

const CoachesAdmin = ({ coach }) => {
  const [formData, setFormData] = useState(coach || {});
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/coaches/update",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Coach updated successfully!");
        setIsEditing(false);
      } else {
        alert("Failed to update coach.");
      }
    } catch (error) {
      console.error("Error updating coach:", error);
      alert("An error occurred while updating the coach.");
    }
  };

  const renderSchedule = (schedule) => {
    if (!schedule || !Array.isArray(schedule)) {
      return "No schedule available";
    }

    return (
      <ul className="list-disc list-inside text-gray-700">
        {schedule.map((item, index) => (
          <li key={index}>
            {item.day}: {item.times}
          </li>
        ))}
      </ul>
    );
  };

  if (!coach) {
    return <div>No coach data available.</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      {/* Display Section */}
      <div className={`w-1/2 p-4 ${isEditing ? "hidden md:block" : ""}`}>
        <div className="bg-white p-6 shadow-md rounded border border-gray-200">
          <h1 className="text-2xl font-bold mb-4">Coach Details</h1>
          <h3 className="text-lg font-bold text-blue-800">{coach.name}</h3>
          <p className="text-gray-700 mb-2">Title: {coach.title}</p>
          <p className="text-gray-700 mb-2">Sport: {coach.sport}</p>
          <p className="text-gray-700 mb-2">Academy: {coach.academy}</p>
          <p className="text-gray-700 mb-2">Bio: {coach.bio}</p>
          <p className="text-gray-700 mb-2">Email: {coach.email}</p>
          <p className="text-gray-700 mb-2">Phone: {coach.phoneno}</p>
          <p className="text-gray-700 mb-2">Working Hours: {coach.working_hours}</p>
          
          <p className="text-gray-700 mb-2">Groups: {coach.groups}</p>
          <p className="text-gray-700 mb-2">
            <span className="font-bold">Schedule:</span> {renderSchedule(coach.schedule)}
          </p>
          {coach.profile_picture && (
            <img
              src={coach.profile_picture}
              alt="Profile"
              className="w-1/2 h-48 object-cover mb-2 rounded"
            />
          )}
          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        </div>
      </div>

      {/* Edit Section */}
      {isEditing && (
        <div className="w-1/2 p-4">
          <div className="bg-white p-6 shadow-md rounded border border-gray-200">
            <h1 className="text-2xl font-bold mb-4">Edit Coach Details</h1>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Sport:</label>
                <input
                  type="text"
                  name="sport"
                  value={formData.sport || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number:</label>
                <input
                  type="text"
                  name="phoneno"
                  value={formData.phoneno || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Profile Picture URL:</label>
                <input
                  type="text"
                  name="profile_picture"
                  value={formData.profile_picture || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Working Hours:</label>
                <input
                  type="text"
                  name="working_hours"
                  value={formData.working_hours || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700">Groups:</label>
                <input
                  type="text"
                  name="groups"
                  value={formData.groups || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Schedule (JSON):</label>
                <textarea
                  name="schedule"
                  value={formData.schedule || ""}
                  onChange={handleChange}
                  className="border border-gray-300 rounded w-full p-2"
                ></textarea>
              </div>
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoachesAdmin;
