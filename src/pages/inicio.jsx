import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { usePuntaje } from "../context/PuntajeContext.jsx";
import Alumno from "../componentes/Alumno.jsx";

export const Inicio = () => {
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();
  const { setNombreJugador, esMaestra } = usePuntaje();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim() !== "") {
      setNombreJugador(nombre);
      navigate("/HoraComer");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <table
        className="table table-borderless text-center w-100"
        style={{ tableLayout: "fixed" }}
      >
        <colgroup>
          <col style={{ width: "50%" }} />
          <col style={{ width: "70%" }} />
        </colgroup>
        <tbody>
          <tr>
            <td>
              <Alumno />
            </td>
            <td>
              <Container className="py-5">
                <h1 className="text-success fw-bold mb-4 display-4">Inicio</h1>

                <Form
                  onSubmit={handleSubmit}
                  className="p-3 mx-auto"
                  style={{ maxWidth: "400px" }}
                >
                  <Form.Group className="mb-2" controlId="nombreJugador">
                    <Form.Label>Nombre del jugador</Form.Label>

                    <Form.Control
                      className="mb-2"
                      type="text"
                      placeholder="Ingresa tu nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                      autoComplete="new-password"
                    />
                  </Form.Group>

                  <Button variant="success" type="submit">
                    Comenzar
                  </Button>
                </Form>

                <div className="text-center mt-4">
                  {!esMaestra ? (
                    <Button
                      variant="outline-primary"
                      onClick={() => navigate("/LoginMaestra")}
                    >
                      Acceso Maestra
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      onClick={() => navigate("/Resultados")}
                    >
                      Otra página
                    </Button>
                  )}
                </div>
              </Container>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inicio;
