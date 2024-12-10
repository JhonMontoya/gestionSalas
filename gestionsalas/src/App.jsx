import React, { useState } from "react";
import Login from "./login";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (nameUse, password) => {
    if (nameUse === "obama" && password === "123") {
      setIsLoggedIn(true);
    } else {
      alert("Credenciales inválidas.");
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>¡Bienvenido!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Cerrar sesión</button>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
