import Image from "react-bootstrap/Image";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preguntas } from "../data/juego1";
import { usePuntaje } from "../context/PuntajeContext.jsx";
import "./HoraComer.css";

function HoraComer() {
  const [indice, setIndice] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const { puntaje, sumarPunto } = usePuntaje();

  const numeroRonda = indice + 1;
  const [animal, ronda] = Object.entries(preguntas[indice])[0];

    const seleccionarOpcion = (opcion) => {
      if (mensaje) return;

      const esCorrecta =
        opcion.toLowerCase() === ronda.Correcta.toLowerCase();
      setMensaje(esCorrecta ? "¡Correcto!" : "Incorrecto");
      if (esCorrecta) sumarPunto();

    setTimeout(() => {
      if (indice === preguntas.length - 1) {
        navigate("/Intruso");
        return;
      }

        setIndice((actual) => actual + 1);
        setMensaje("");
    }, 1000);
  };

  return (
    <>
      <div>
        <p className="puntaje">Puntaje: {puntaje}</p>
        <h1 className="h1">Ronda {numeroRonda}</h1>
        <Image
          src={ronda.img}
          alt={`imagen de la ronda ${numeroRonda}`}
          width={300}
          roundedCircle
        />
        <h2>{animal}</h2>
        <div className="div">
          {ronda.opciones.map((opcion) => (
            <button
              className="boton"
              key={opcion}
              onClick={() => seleccionarOpcion(opcion)}
              disabled={Boolean(mensaje)}
            >
              {opcion}
            </button>
          ))}
        </div>
        {mensaje && <p role="status">{mensaje}</p>}
      </div>
    </>
  );
}

export default HoraComer;