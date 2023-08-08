// App.js
import React, { useState } from "react";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null); // Clear the user data to log out
  };

  const handleRestrictedPage = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/restricted", {
        method: "GET",
      });

      if (response.ok) {
        alert(await response.text()); // Display the restricted page content
      } else {
        alert("You are not authorized to access this page.");
      }
    } catch (error) {
      console.error("Error accessing restricted page:", error);
      alert("An error occurred while accessing the restricted page.");
    }
  };

  return (
    <div className="app-container">
    <header className="app-header">
        <h1>Login App</h1>
      </header>
      {user ? (
        <Welcome
          user={user}
          onLogout={handleLogout}
          onRestrictedPage={handleRestrictedPage}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
