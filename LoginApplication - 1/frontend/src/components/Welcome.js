// Welcome.js
import React from "react";
import "./Welcome.css"; // Import the updated Welcome.css file

const Welcome = ({ user, onLogout, onRestrictedPage }) => {
  const { name, username, role } = user;

  return (
    <div className="container">
      <div className="welcome-container">
        <h1 className="welcome-message">Welcome, {name}!</h1>
        <p className="info-label">Username:</p>
        <p>{username}</p>
        <p className="info-label">Role:</p>
        <p>{role}</p>
        {role === "manager" && (
          <button onClick={onRestrictedPage} className="logout-button">
            Go to Restricted Page
          </button>
        )}
        <button onClick={onLogout} className="logout-button">
        Logout 
        </button>
      </div>
    </div>
  );
};

export default Welcome;
