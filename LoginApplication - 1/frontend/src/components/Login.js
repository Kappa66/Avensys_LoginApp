import React, { useState } from "react";
import "./Login.css"; // Import the Login.css file


const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
  setError("");
  try {
    const response = await fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      onLogin(data.body);
    } else if (response.status === 401) {
        setError("Invalid userid or password");
    }  else {
      console.error("Login failed:");
      setError("Invalid userid or password");
    }
  } catch (error) {
    console.error("Error occurred during login:", error);
    setError("Error occurred during login");
  }
};

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="login-header">Login</h1>
        <div className="form-group">
          <label className="label">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group">
          <button onClick={handleLogin} className="button">
          Login
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
