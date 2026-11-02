import { createContext, useContext, useState } from "react";

const PuntajeContext = createContext(null);

export function PuntajeProvider({ children }) {
  const [puntaje, setPuntaje] = useState(0);

  const sumarPunto = () => {
    setPuntaje((actual) => actual + 10);
  };

  return (
    <PuntajeContext.Provider value={{ puntaje, sumarPunto }}>
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
