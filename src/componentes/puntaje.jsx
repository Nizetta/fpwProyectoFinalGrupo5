import { usePuntaje } from "../context/PuntajeContext.jsx";

export const Puntaje = () => {
  const { puntaje } = usePuntaje();

  return (
    <main>
      <h1>Resultado final</h1>
      <p className="puntaje">Puntaje: {puntaje}</p>
    </main>
  );
};

export default Puntaje;