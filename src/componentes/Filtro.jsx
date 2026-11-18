import { Form } from "react-bootstrap";

const Filtro = ({ busqueda, setBusqueda }) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()} className="mb-3">
      <Form.Group controlId="filtroNombre">
        <Form.Label className="fw-bold">Buscar por nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresar un nombre..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default Filtro;