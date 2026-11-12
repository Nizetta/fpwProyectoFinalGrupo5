import {Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { preguntas } from "../data/juego1";
import { usePuntaje } from "../context/PuntajeContext.jsx";
import correcto from "../assets/correcto.png";
import incorrecto from "../assets/incorrecto.png";
import sonidoCorrecto from "../assets/correct.wav";
import sonidoIncorrecto from "../assets/incorrect.wav";
import "./estilos.css";

const HoraComer = () => {
  const [indice, setIndice] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const { puntajeJuego1, sumarPuntoJuego1 } = usePuntaje();

  const numeroRonda = indice + 1;
  const [animal, ronda] = Object.entries(preguntas[indice])[0];

  const seleccionarOpcion = (opcion) => {
    if (mensaje) return;

    const esCorrecta =
      opcion.toLowerCase() === ronda.Correcta.toLowerCase();
    setMensaje(esCorrecta ? "¡Correcto!" : "Incorrecto");
    if (esCorrecta) sumarPuntoJuego1();

    setTimeout(() => {
      if (indice === preguntas.length - 1) {
        navigate("/Intruso");
        return;
      }

      setIndice((actual) => actual + 1);
      setMensaje("");
    }, 1000);
  };
  useEffect(() => {
    let archivoSonido;

    if (mensaje === "¡Correcto!") {
      archivoSonido = sonidoCorrecto;
    } else if (mensaje === "Incorrecto") {
      archivoSonido = sonidoIncorrecto;
    } else {
      return;
    }

    const audio = new Audio(archivoSonido);
    audio.play().catch((error) => {
      console.error("No se pudo reproducir el audio.", error);
    });
  }, [mensaje]);

  return (
    <>
      <div className="div">
        <h1 className="h1">¿Que come el {animal}?</h1>
        <p className="puntaje">Puntaje: {puntajeJuego1}</p>
        <h1 className="h1">Ronda {numeroRonda}</h1>
        <Image
          src={ronda.img}
          alt={`imagen de la ronda ${numeroRonda}`}
          width={230}

        />
        <h2>{animal}</h2>
        <div className="div">
          {ronda.opciones.map((opcion) => (
            <button
              className="boton-comer"
              key={opcion}
              onClick={() => seleccionarOpcion(opcion)}>
              {opcion}
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
    </>
  );
}

export default HoraComer;