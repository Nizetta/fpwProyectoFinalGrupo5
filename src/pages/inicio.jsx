
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { usePuntaje } from "../context/PuntajeContext.jsx";
import Alumno from "../componentes/Alumno.jsx";

export const Inicio = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();
  const { iniciarSesion } = usePuntaje();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioEncontrado = iniciarSesion(email, contrasena);

    if (usuarioEncontrado) {
      if (usuarioEncontrado.rol === "admin") {
        navigate("/resultados");
      } else {
        navigate("/HoraComer");
      }
    } else {
      setMensaje("Email o contraseña incorrectos.");
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
                <h1 className="text-success fw-bold mb-4 display-4">
                  La Granja
                </h1>

                <Form
                  onSubmit={handleSubmit}
                  className="p-3 mx-auto"
                  style={{ maxWidth: "400px" }}
                >
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Ingresa tu email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setMensaje("");
                      }}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      value={contrasena}
                      onChange={(e) => {
                        setContrasena(e.target.value);
                        setMensaje("");
                      }}
                      required
                    />
                  </Form.Group>

                  {mensaje && (
                    <p className="text-danger" role="alert">
                      {mensaje}
                    </p>
                  )}

                  <Button
                    variant="success"
                    type="submit"
                    className="px-4"
                  >
                    Ingresar
                  </Button>
                </Form>
              </Container>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inicio;
