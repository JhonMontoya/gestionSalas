import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap (opcional, ya está en App)

function App()  {
  const [usuarioActual, setUsuarioActual] = useState(null);
  const [salas, setSalas] = useState([ 
    { id: 1, nombre: "Sala A", capacidad: 80, ubicacion: "Norte", estado: "activa", reservas: [] },
    { id: 2, nombre: "Sala B", capacidad: 150, ubicacion: "Centro", estado: "activa", reservas: [] },
    { id: 3, nombre: "Sala C", capacidad: 180, ubicacion: "Sur", estado: "activa", reservas: [] },
 ]); 
  const [formReserva, setFormReserva] = useState({
    celular: "",
    salaId: "",
    fecha: "",
    hora: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.loginEmail.value;
    const nombre = e.target.loginNombre.value;

    setUsuarioActual({ email, nombre });
    setFormReserva((prev) => ({ ...prev, salaId: salas[0]?.id || "" }));
  };

  const handleReservaSubmit = (e) => {
    e.preventDefault();

    const { celular, salaId, fecha, hora } = formReserva;
    const sala = salas.find((s) => s.id === parseInt(salaId));

    if (sala.reservas.some((r) => r.fecha === fecha && r.hora === hora)) {
      alert("La sala ya está reservada en la fecha y hora seleccionadas.");
      return;
    }

    const nuevaReserva = { nombre: usuarioActual.nombre, celular, fecha, hora };
    const nuevasSalas = salas.map((s) =>
      s.id === parseInt(salaId) ? { ...s, reservas: [...s.reservas, nuevaReserva] } : s
    );

    setSalas(nuevasSalas);
    alert(`Reserva realizada: Sala ${sala.nombre}, el ${fecha} a las ${hora}.`);
    setFormReserva({ celular: "", salaId: "", fecha: "", hora: "" });
  };

  const handleReservaChange = (e) => {
    setFormReserva((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="container py-5">
      {!usuarioActual ? (
        <div className="card mx-auto shadow-lg mb-5">
          <div className="card-body">
            <h1 className="card-title text-center mb-4">Iniciar Sesión</h1>
            <form onSubmit={handleLoginSubmit}>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="loginEmail" required />
              </div>
              <div className="mb-3">
                <label htmlFor="loginNombre" className="form-label">Nombre Completo</label>
                <input type="text" className="form-control" id="loginNombre" required />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className="card mx-auto shadow-lg mb-5">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Reservar Sala</h1>
              <form onSubmit={handleReservaSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre Completo</label>
                  <input type="text" className="form-control" id="nombre" value={usuarioActual.nombre} disabled />
                </div>
                <div className="mb-3">
                  <label htmlFor="celular" className="form-label">Celular</label>
                  <input type="tel" className="form-control" name="celular" value={formReserva.celular} onChange={handleReservaChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="sala" className="form-label">Sala</label>
                  <select className="form-select" name="salaId" value={formReserva.salaId} onChange={handleReservaChange} required>
                    {salas.map((sala) => (
                      <option key={sala.id} value={sala.id}>{`${sala.nombre} - Capacidad: ${sala.capacidad}`}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="fecha" className="form-label">Fecha</label>
                  <input type="date" className="form-control" name="fecha" value={formReserva.fecha} onChange={handleReservaChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="hora" className="form-label">Hora</label>
                  <input type="time" className="form-control" name="hora" value={formReserva.hora} onChange={handleReservaChange} required />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Reservar Sala</button>
                </div>
              </form>
            </div>
          </div>
          <div className="card mx-auto shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Salas Disponibles</h2>
              <ul className="list-group">
                {salas.map((sala) => (
                  <li key={sala.id} className="list-group-item">
                    <div>
                      <strong>{sala.nombre}</strong> (Capacidad: {sala.capacidad}, Ubicación: {sala.ubicacion})
                      {sala.reservas.map((r, index) => (
                        <div key={index}>
                          <em>Reservada el {r.fecha} a las {r.hora}</em>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
