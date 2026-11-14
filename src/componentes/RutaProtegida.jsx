import { Navigate } from "react-router-dom";
import { usePuntaje } from "../context/PuntajeContext.jsx";

const RutaProtegida = ({ children }) => {
  const { esMaestra } = usePuntaje();

  if (!esMaestra) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaProtegida;