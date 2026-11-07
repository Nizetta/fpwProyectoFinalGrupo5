import { createContext, useContext, useState } from "react";
import administradores from "../data/administradores.json";

const PuntajeContext = createContext(null);

export const PuntajeProvider = ({ children }) => {
  const [nombreJugador, setNombreJugador] = useState("");
  const [puntajeJuego1, setPuntajeJuego1] = useState(0);
  const [puntajeJuego2, setPuntajeJuego2] = useState(0);

  const [esMaestra, setEsMaestra] = useState(false);

  const sumarPuntoJuego1 = () => {
    setPuntajeJuego1((actual) => actual + 10);
  };

  const sumarPuntoJuego2 = () => {
    setPuntajeJuego2((actual) => actual + 10);
  };

  const iniciarSesionMaestra = (email, contraseña) => {
  const administradorEncontrado = administradores.find(
    (admin) =>
      admin.email.toLowerCase() === email.trim().toLowerCase() &&
      admin.password === contraseña
  );

  if (administradorEncontrado) {
    setEsMaestra(true);
    return true;
  }

  return false;
};

  const cerrarSesionMaestra = () => {
    setEsMaestra(false);
  }

  const reiniciarJuego = () => {
    setNombreJugador("");
    setPuntajeJuego1(0);
    setPuntajeJuego2(0);
  };

  return (
    <PuntajeContext.Provider value={{ 
      nombreJugador, setNombreJugador, 
      puntajeJuego1, sumarPuntoJuego1, 
      puntajeJuego2, sumarPuntoJuego2,
      reiniciarJuego,
      esMaestra, iniciarSesionMaestra, cerrarSesionMaestra,
      
    }}>
      {children}
    </PuntajeContext.Provider>
  );
}

export const usePuntaje = () => {
  const context = useContext(PuntajeContext);
  if (!context) {
    throw new Error("usePuntaje debe usarse dentro de PuntajeProvider");
  }
  return context;
}