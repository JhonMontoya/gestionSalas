import React, { useState } from 'react';

const SalaForm = () => {
  const [nombreSala, setNombreSala] = useState('');
  const [capacidad, setCapacidad] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [estado, setEstado] = useState('activa'); // Por defecto, la sala se guarda como activa.
  const [salas, setSalas] = useState([]); // Lista de salas guardadas.

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!nombreSala || !capacidad || !ubicacion) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Crear una nueva sala y agregarla a la lista
    const nuevaSala = {
      id: Date.now(), // ID único basado en la marca de tiempo
      nombreSala,
      capacidad,
      ubicacion,
      estado,
    };

    setSalas([...salas, nuevaSala]);
    // Limpiar el formulario
    setNombreSala('');
    setCapacidad('');
    setUbicacion('');
    setEstado('activa');
  };

  // Alternar el estado de una sala
  const toggleEstado = (id) => {
    setSalas(salas.map(sala => 
      sala.id === id ? { ...sala, estado: sala.estado === 'activa' ? 'inactiva' : 'activa' } : sala
    ));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Campo para el nombre de la sala */}
        <div className="mb-3">
          <label htmlFor="nombreSala" className="form-label">Nombre de la Sala</label>
          <input
            type="text"
            className="form-control"
            id="nombreSala"
            placeholder="Escribe el nombre de la sala"
            value={nombreSala}
            onChange={(e) => setNombreSala(e.target.value)}
            required
          />
        </div>

        {/* Capacidad */}
        <div className="mb-3">
          <label htmlFor="capacidad" className="form-label">Capacidad</label>
          <input
            type="number"
            className="form-control"
            id="capacidad"
            placeholder="Capacidad máxima de la sala"
            value={capacidad}
            onChange={(e) => setCapacidad(e.target.value)}
            required
          />
        </div>

        {/* Ubicación */}
        <div className="mb-3">
          <label htmlFor="ubicacion" className="form-label">Ubicación</label>
          <input
            type="text"
            className="form-control"
            id="ubicacion"
            placeholder="Ubicación de la sala"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            required
          />
        </div>

        {/* Estado */}
        <div className="mb-3">
          <label htmlFor="estado" className="form-label">Estado</label>
          <select
            className="form-select"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            required
          >
            <option value="activa">Activa</option>
            <option value="inactiva">Inactiva</option>
          </select>
        </div>

        {/* Botón */}
        <div className="d-grid">
          <button type="submit" className="btn btn-madera">Guardar Sala</button>
        </div>
      </form>

      {/* Listado de salas */}
      {salas.length > 0 && (
        <div className="mt-5">
          <h2>Lista de Salas</h2>
          <ul className="list-group">
            {salas.map((sala) => (
              <li
                key={sala.id}
                className={`list-group-item d-flex justify-content-between align-items-center ${sala.estado === 'activa' ? 'list-group-item-success' : 'list-group-item-danger'}`}
              >
                <div>
                  <strong>{sala.nombreSala}</strong> (Capacidad: {sala.capacidad}, Ubicación: {sala.ubicacion})
                </div>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => toggleEstado(sala.id)}
                >
                  {sala.estado === 'activa' ? 'Marcar como Inactiva' : 'Marcar como Activa'}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SalaForm;
