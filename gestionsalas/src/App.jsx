import React, { useState } from "react";
import Login from "./login";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulación de autenticación
  const handleLogin = (email, password) => {
    if (email === "user@example.com" && password === "password123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Welcome!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
