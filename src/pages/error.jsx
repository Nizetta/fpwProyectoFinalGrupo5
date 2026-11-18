import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

export const Error = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [segundos, setSegundos] = useState(3);

  const mensaje =
    location.state?.mensaje ||
    (location.pathname === "/Error" || location.pathname === "/error"
      ? "Error debe completar correctamente los campos"
      : "Error: la página no existe o la URL ingresada no es válida");

  useEffect(() => {
    const timer = setInterval(() => {
      setSegundos((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Container className="d-flex justify-content-center">
        <Card
          className="text-center shadow p-4 border-danger"
          style={{ maxWidth: "480px", width: "100%" }}
        >
          <Card.Body>
            <div className="mb-3 text-danger fs-1">⚠️</div>
            <Card.Title className="text-danger fw-bold fs-4 mb-3">
              {mensaje}
            </Card.Title>
            <Card.Text className="text-muted mb-4">
              Volviendo a la página principal en <strong>{segundos}</strong>{" "}
              {segundos === 1 ? "segundo" : "segundos"}...
            </Card.Text>
            <Button variant="danger" onClick={() => navigate("/")}>
              Volver ahora
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Error;
