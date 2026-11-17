
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";
import { usePuntaje } from "../context/PuntajeContext.jsx";
import { obtenerResultados } from "../services/servicioResultados.js";


const Resultados = () => {
  const [resultados, setResultados] = useState([]);
  const navigate = useNavigate();
  const { esMaestra, cerrarSesionMaestra } = usePuntaje();

    const handleCerrarSesion = () => {
  cerrarSesionMaestra();
  navigate("/");
};
const juego1 = () => {
  navigate("/HoraComer");
}
const juego2 = () => {
  navigate("/Intruso");
}

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

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
        <Button variant="danger" onClick={handleCerrarSesion}>
          Cerrar sesión
        </Button>
        <Button variant="primary" onClick={juego1}>
          ir al juego 1
        </Button>
        <Button variant="primary" onClick={juego2}>
          ir al juego 2
        </Button>
      </div>
      <h1 className="text-success fw-bold text-center mb-4">
        Resultados de los alumnos
      </h1>

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
          {resultados.length > 0 ? (
            resultados.map((alumno) => (
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
                Todavía no hay resultados registrados.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Resultados;
