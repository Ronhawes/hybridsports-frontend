import React, { useState } from "react";
import CoachesAdmin from "./CoachesSignin";

const Login = () => {
  const [loggedInCoach, setLoggedInCoach] = useState(null);

  const handleLoginSuccess = (coach) => {
    setLoggedInCoach(coach);
  };

  return (
    <>
      {!loggedInCoach ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <CoachesAdmin coach={loggedInCoach} />
      )}
    </>
  );
};

const LoginForm = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://hybridsports-69backend-85bb3e426b16.herokuapp.com/coaches/getAllCoaches"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from the server.");
      }

      const coaches = await response.json();

      const matchedCoach = coaches.find(
        (coach) => coach.username === username && coach.password === password
      );

      if (matchedCoach) {
        onLoginSuccess(matchedCoach);
      } else {
        setError("Invalid username or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-600">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-center text-2xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter password"
            />
          </div>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
