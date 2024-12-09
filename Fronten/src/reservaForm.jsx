import React, { useState } from "react";

const ReservaForm = ({ salaId }) => {
  const [form, setForm] = useState({ usuario: "", fecha: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/reservas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, salaId }),
      });

      const data = await response.json();
      setMensaje(data.message);
      setForm({ usuario: "", fecha: "" }); // Limpiar formulario
    } catch (error) {
      console.error("Error:", error);
      setMensaje("Hubo un error haciendo la reserva.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="usuario"
          placeholder="Tu nombre"
          value={form.usuario}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
        />
        <button type="submit">Reservar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default ReservaForm;
