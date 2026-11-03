import { createContext, useContext, useState } from "react";

const PuntajeContext = createContext(null);

export function PuntajeProvider({ children }) {
  const [nombreJugador, setNombreJugador] = useState("");
  const [puntajeJuego1, setPuntajeJuego1] = useState(0);
  const [puntajeJuego2, setPuntajeJuego2] = useState(0);

  const sumarPuntoJuego1 = () => {
    setPuntajeJuego1((actual) => actual + 10);
  };

  const sumarPuntoJuego2 = () => {
    setPuntajeJuego2((actual) => actual + 10);
  };

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
      reiniciarJuego 
    }}>
      {children}
    </PuntajeContext.Provider>
  );
}

export function usePuntaje() {
  const context = useContext(PuntajeContext);
  if (!context) {
    throw new Error("usePuntaje debe usarse dentro de PuntajeProvider");
  }
  return context;
}