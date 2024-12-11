import React, { useState } from "react";
import "./login.css";
import logo from "./img/Logo.png"

const Login = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [idNumber, setIdNumber] = useState("");

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
    <div className="page-container">
      
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" style={{width:45}}/>
        </div>
        <div className="search-container">
          <p>
            EVENTHUB
          </p>
        </div>
        <div className="flex-items-center">
        <button className="inicio-input" onClick={()=>setIsRegistering(!isRegistering)}>
          Iniciar sesión o Registrarse
          </button>
        </div>
      </nav>
      
      
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
      </div><br />
      <footer className="footer">
        <h3>Nuestra información de contacto:</h3>
        <p>Teléfono: +57 123 456 7890</p>
        <p>Correo electrónico: contacto@ejemplo.com</p>
        <p>Dirección: Calle 123, Ciudad, País</p>
      </footer>
    </div>
  );
};

export default Login;
