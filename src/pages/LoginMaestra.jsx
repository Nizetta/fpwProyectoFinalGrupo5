
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { usePuntaje } from "../context/PuntajeContext.jsx";

const LoginMaestra = () => {
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();
  const { iniciarSesionMaestra } = usePuntaje();

  const handleSubmit = (e) => {
    e.preventDefault();

    const accesoCorrecto = iniciarSesionMaestra(email, contrasena);

    if (accesoCorrecto) {
      navigate("/resultados");
    } else {
      setMensaje("Email o contraseña incorrectos.");
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-success fw-bold mb-4 text-center">
        Acceso Maestra
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
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa tu contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </Form.Group>

        {mensaje && (
          <p className="text-danger" role="alert">
            {mensaje}
          </p>
        )}

        <div className="d-flex justify-content-center gap-2">
          <Button variant="success" type="submit">
            Ingresar
          </Button>

          <Button
            variant="secondary"
            type="button"
            onClick={() => navigate("/")}
          >
            Volver
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginMaestra;
