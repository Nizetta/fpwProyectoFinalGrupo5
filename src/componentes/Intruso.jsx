import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preguntas } from "../data/juego2";
import { usePuntaje } from "../context/PuntajeContext.jsx";
import { Image } from "react-bootstrap";
import correcto from "../assets/correcto.png";
import incorrecto from "../assets/incorrecto.png";


const Intruso = () => {
  const [indice, setIndice] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const { puntajeJuego2, sumarPuntoJuego2 } = usePuntaje();

  const [nombreRonda, ronda] = Object.entries(preguntas[indice])[0];

  const seleccionarOpcion = (opcion) => {
    if (mensaje) return;

    const esCorrecta = opcion.toLowerCase() === ronda.Intruso.toLowerCase();
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
      <h1 className="h1">¿Quién es el intruso?</h1>
      <p className="puntaje">Puntaje: {puntajeJuego2}</p>
      <h2 className="h2">Ronda {indice + 1}</h2>
      <h2>Selecciona el intruso</h2>
      <div className="div">
        {ronda.opciones.map((opcion) => (
          <button
            className="boton-intruso"
            key={opcion}
            onClick={() => seleccionarOpcion(opcion.nombre)}
            disabled={Boolean(mensaje)}
          >
            <img src={opcion.imagen} width={90} />
            {opcion.nombre}
          </button>
        ))}
      </div>
      {mensaje && (
        <Image
          src={mensaje === "¡Correcto!" ? correcto : incorrecto}
          width={100}
          role="status"
        />
      )}
    </div>
  );
}

export default Intruso;