import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("user", username);
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div>
      <h1>Welcome to SkillQuest</h1>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Homepage;
