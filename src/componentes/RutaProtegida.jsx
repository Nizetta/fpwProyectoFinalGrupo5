import { Navigate } from "react-router-dom";
import { usePuntaje } from "../context/PuntajeContext.jsx";

const RutaProtegida = ({ children }) => {
  const { esMaestra } = usePuntaje();

  if (!esMaestra) {
    return (
      <Navigate
        to="/Error"
        replace
        state={{ mensaje: "Error: no tienes permisos para acceder a esta página" }}
      />
    );
  }

  return children;
};

export default RutaProtegida;