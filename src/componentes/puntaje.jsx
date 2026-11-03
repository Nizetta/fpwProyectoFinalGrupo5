import { useNavigate } from "react-router-dom";
import { usePuntaje } from "../context/PuntajeContext.jsx";

export const Puntaje = () => {
  const { nombreJugador, puntajeJuego1, puntajeJuego2, reiniciarJuego } = usePuntaje();
  const navigate = useNavigate();

  const puntajeTotal = puntajeJuego1 + puntajeJuego2;

  let mensajeFelicitacion = "";
  if (puntajeTotal === 100) {
    mensajeFelicitacion = "¡Excelente! Eres un experto de la granja.";
  } else if (puntajeTotal >= 70) {
    mensajeFelicitacion = "¡Muy buen trabajo! Conoces mucho a los animales.";
  } else {
    mensajeFelicitacion = "¡Bien hecho! Sigue practicando para aprender más.";
  }

  const handleJugarDeNuevo = () => {
    reiniciarJuego();
    navigate("/");
  };

  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>¡Felicidades, {nombreJugador || "Jugador"}!</h1>
      
      <div style={{ margin: "2rem 0", fontSize: "1.2rem" }}>
        <p>Juego 1 (Hora de Comer): <strong>{puntajeJuego1} puntos</strong></p>
        <p>Juego 2 (El Intruso): <strong>{puntajeJuego2} puntos</strong></p>
        <h2 className="puntaje" style={{ color: "#198754", marginTop: "1rem" }}>
          Puntaje Total: {puntajeTotal} / 100
        </h2>
      </div>

      <h3 style={{ margin: "2rem 0", color: "#333" }}>{mensajeFelicitacion}</h3>

      <button 
        className="boton btn btn-success" 
        onClick={handleJugarDeNuevo}
        style={{ padding: "10px 20px", fontSize: "1.2rem", cursor: "pointer" }}
      >
        Jugar de nuevo
      </button>
    </main>
  );
};

export default Puntaje;