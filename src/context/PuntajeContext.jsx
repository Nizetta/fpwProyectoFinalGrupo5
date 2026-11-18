import { createContext, useContext, useState } from "react";
import usuarios from "../data/usuarios.json";

const PuntajeContext = createContext(null);

export const PuntajeProvider = ({ children }) => {
  const [nombreJugador, setNombreJugador] = useState("");
  const [puntajeJuego1, setPuntajeJuego1] = useState(0);
  const [puntajeJuego2, setPuntajeJuego2] = useState(0);

   const [usuarioActual, setUsuarioActual] = useState(() => {
  const usuarioGuardado = localStorage.getItem("usuarioActual");
  return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
});

const [esMaestra, setEsMaestra] = useState(() => {
  const usuarioGuardado = localStorage.getItem("usuarioActual");

  if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado);
    return usuario.rol === "admin";
  }

  return false;
});

  const sumarPuntoJuego1 = () => {
    setPuntajeJuego1((actual) => actual + 10);
  };

  const sumarPuntoJuego2 = () => {
    setPuntajeJuego2((actual) => actual + 10);
  };

  const iniciarSesion = (email, contrasena) => {
    const usuarioEncontrado = usuarios.find(
      (usuario) =>
        usuario.email.toLowerCase() === email.trim().toLowerCase() &&
        usuario.password === contrasena
    );

      if (usuarioEncontrado) {
  setUsuarioActual(usuarioEncontrado);

  if (usuarioEncontrado.rol === "admin") {
    setEsMaestra(true);

    const datosMaestra = {
      id: usuarioEncontrado.id,
      nombre: usuarioEncontrado.nombre,
      email: usuarioEncontrado.email,
      rol: usuarioEncontrado.rol,
    };

    localStorage.setItem(
      "usuarioActual",
      JSON.stringify(datosMaestra)
    );

  } else {
    setEsMaestra(false);
    localStorage.removeItem("usuarioActual");
    setNombreJugador(usuarioEncontrado.nombre);
  }

  return usuarioEncontrado;
}
    

    return null;
  };


  const cerrarSesionMaestra = () => {
  setEsMaestra(false);
  setUsuarioActual(null);
  setNombreJugador("");

  localStorage.removeItem("usuarioActual");
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
      reiniciarJuego,
      esMaestra, usuarioActual,
       iniciarSesion, cerrarSesionMaestra,
      
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