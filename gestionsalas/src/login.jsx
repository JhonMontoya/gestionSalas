import React, { useState } from "react";
import "./login.css"; // Opcional para estilos

const Login = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      if (password === confirmPassword) {
        alert("User registered successfully!");
        setIsRegistering(false);
      } else {
        alert("Passwords do not match");
      }
    } else {
      onLogin(email, password);
    }
  };

  return (
    <div className="login-container">
      <h1>{isRegistering ? "Register" : "Login"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {isRegistering && (
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">
          {isRegistering ? "Registrar" : "Iniciar Secion"}
        </button>
      </form>
      <p>
        {isRegistering
          ? "¿Ya tienes una cuenta?"
          : "si no tienes una cuenta, crea una aqui"}{" "}
        <span
          className="toggle-link"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "Iniciar Sesion" : "Registrar"}
        </span>
      </p>
    </div>
  );
};

export default Login;
