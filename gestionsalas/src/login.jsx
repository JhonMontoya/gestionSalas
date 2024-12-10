import React, { useState } from "react";
import "./login.css"; // Asegúrate de importar los estilos

const Login = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState(""); // Campo para nombre
  const [username, setUsername] = useState(""); // Nombre de usuario
  const [idNumber, setIdNumber] = useState(""); // Campo para cédula

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      if (password === confirmPassword) {
        if (name && idNumber && username) {
          alert(`¡Usuario registrado exitosamente!\nNombre: ${name}\nCédula: ${idNumber}\nUsuario: ${username}`);
          setIsRegistering(false);
        } else {
          alert("Por favor, complete todos los campos.");
        }
      } else {
        alert("Las contraseñas no coinciden.");
      }
    } else {
      onLogin(username, password);
    }
  };

  return (
    <div className="login-container">
      <h1>{isRegistering ? "Registro" : "Inicio de sesión"}</h1>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <>
            <input
              type="text"
              placeholder="Nombre completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Cédula"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              required
            />
          </>
        )}
        {!isRegistering && (
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
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
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        )}
        <button type="submit">
          {isRegistering ? "Registrar" : "Iniciar sesión"}
        </button>
      </form>
      <p>
        {isRegistering
          ? "¿Ya tienes una cuenta?"
          : "¿No tienes una cuenta?"}{" "}
        <span
          className="toggle-link"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "Inicia sesión aquí" : "Regístrate aquí"}
        </span>
      </p>
    </div>
  );
};

export default Login;
