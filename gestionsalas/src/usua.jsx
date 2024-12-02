import React, { useState, useEffect } from "react";
import ReservaForm from "./reservaForm";

const User = () => {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    const fetchSalas = async () => {
      const response = await fetch("http://localhost:3000/api/salas");
      const data = await response.json();
      setSalas(data);
    };
    fetchSalas();
  }, []);

  return (
    <div>
      <h2>Usuario</h2>
      <h3>Salas disponibles</h3>
      {salas.length > 0 ? (
        salas.map((sala) => (
          <div key={sala.id}>
            <p>
              <strong>{sala.nombre}</strong> - Capacidad: {sala.capacidad}
            </p>
            <ReservaForm salaId={sala.id} />
          </div>
        ))
      ) : (
        <p>No hay salas disponibles</p>
      )}
    </div>
  );
};

export default User;
