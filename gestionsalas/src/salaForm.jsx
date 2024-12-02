import { useState } from "react";

const SalaForm = () => {
  const [form, setForm] = useState({ nombre: "", capacidad: "" });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/salas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      setMensaje(data.message);
      setForm({ nombre: "", capacidad: "" }); // Limpiar formulario
    } catch (error) {
      console.error("Error:", error);
      setMensaje("Hubo un error creando la sala.");
    }
  };

  return (
    <div>
      <h3>Crear Sala</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre de la sala"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="capacidad"
          placeholder="Capacidad"
          value={form.capacidad}
          onChange={handleChange}
          required
        />
        <button type="submit">Crear Sala</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default SalaForm;
