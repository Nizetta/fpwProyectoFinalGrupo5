import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";
import { usePuntaje } from "../context/PuntajeContext.jsx";
import { obtenerResultados } from "../services/servicioResultados.js";
import Filtro from "../componentes/Filtro.jsx";

const Resultados = () => {
  const [resultados, setResultados] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();
  const { esMaestra, cerrarSesionMaestra } = usePuntaje();

  const handleCerrarSesion = () => {
    cerrarSesionMaestra();
    navigate("/");
  };

  const juego1 = () => {
    navigate("/HoraComer");
  };

  const juego2 = () => {
    navigate("/Intruso");
  };

  useEffect(() => {
    if (!esMaestra) {
      navigate("/");
      return;
    }

    const resultadosGuardados = obtenerResultados();
    setResultados(resultadosGuardados);
  }, [esMaestra, navigate]);

  if (!esMaestra) {
    return null;
  }

  const resultadosFiltrados = resultados.filter((alumno) =>
    (alumno.nombre || "")
      .toLowerCase()
      .includes(busqueda.trim().toLowerCase())
  );

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
        <Button variant="danger" onClick={handleCerrarSesion}>
          Cerrar sesión
        </Button>
        <Button variant="primary" onClick={juego1}>
          Ir al juego 1
        </Button>
        <Button variant="primary" onClick={juego2}>
          Ir al juego 2
        </Button>
      </div>

      <h1 className="text-success fw-bold text-center mb-4">
        Resultados de los alumnos
      </h1>

      {/* Buscador por nombre */}
      <Filtro busqueda={busqueda} setBusqueda={setBusqueda} />

      <Table striped bordered hover responsive>
        <thead className="table-success">
          <tr>
            <th>Alumno</th>
            <th>Juego 1</th>
            <th>Juego 2</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {resultadosFiltrados.length > 0 ? (
            resultadosFiltrados.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.nombre}</td>
                <td>{alumno.puntajeJuego1}</td>
                <td>{alumno.puntajeJuego2}</td>
                <td>
                  <strong>{alumno.puntajeTotal}</strong>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                {resultados.length === 0
                  ? "Todavía no hay resultados registrados."
                  : `No se encontraron alumnos con el nombre "${busqueda}".`}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Resultados;