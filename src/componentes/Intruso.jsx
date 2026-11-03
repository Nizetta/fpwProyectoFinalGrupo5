import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preguntas } from "../data/juego2";
import { usePuntaje } from "../context/PuntajeContext.jsx";

function Intruso() {
  const [indice, setIndice] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const { puntajeJuego2, sumarPuntoJuego2 } = usePuntaje();

  const [nombreRonda, ronda] = Object.entries(preguntas[indice])[0];

  const seleccionarOpcion = (opcion) => {
    if (mensaje) return;

    const esCorrecta = opcion.toLowerCase() === ronda.Instruso.toLowerCase();
    setMensaje(esCorrecta ? "¡Correcto!" : "Incorrecto.");
    if (esCorrecta) sumarPuntoJuego2();

    setTimeout(() => {
      if (indice === preguntas.length - 1) {
        navigate("/Puntaje");
        return;
      }

      setIndice((actual) => actual + 1);
      setMensaje("");
    }, 1000);
  };

  return (
    <div>
      <h1>INTRUSO</h1>
      <p className="puntaje">Puntaje: {puntajeJuego2}</p>
      <h2 className="h1">Ronda {indice + 1}</h2>
      <h2>Selecciona el intruso</h2>
      <div className="div">
        {ronda.opciones.map((opcion) => (
          <button
            className="boton"
            key={opcion}
            onClick={() => seleccionarOpcion(opcion.nombre)}
            disabled={Boolean(mensaje)}
          >
            <img src={opcion.imagen} alt={opcion.nombre} width="100%" />
            <span>{opcion.nombre}</span>
          </button>
        ))}
      </div>
      {mensaje && <p role="status">{mensaje}</p>}
    </div>
  );
}

export default Intruso;