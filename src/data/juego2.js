import perro from "../assets/perro.png";
import gato from "../assets/gato.png";
import leon from "../assets/leon.png";
import vaca from "../assets/vacaa.png";
import oveja from "../assets/oveja.png";
import cocodrilo from "../assets/cocodrilo.png";
import gallina from "../assets/gallina.png";
import chancho from "../assets/chancho.png";
import elefante from "../assets/elefante.png";
import caballo from "../assets/caballo.png";
import tiburon from "../assets/tiburon.png";
import pingüino from "../assets/pinguino.png";
export const preguntas = [
  {
    ronda1: {
      opciones: [
        { nombre: "Perro", imagen: perro },
        { nombre: "Gato", imagen: gato },
        { nombre: "León", imagen: leon },
      ],
      Intruso: "León",
    },
  },
  {
    ronda2: {
      opciones: [
        { nombre: "Vaca", imagen: vaca },
        { nombre: "Oveja", imagen: oveja },
        { nombre: "Cocodrilo", imagen: cocodrilo },
      ],
      Intruso: "Cocodrilo",
    },
  },
  {
    ronda3: {
      opciones: [
        { nombre: "Gallina", imagen: gallina },
        { nombre: "Chancho", imagen: chancho },
        { nombre: "Elefante", imagen: elefante },
      ],
      Intruso: "Elefante",
    },
  },
  {
    ronda4: {
      opciones: [
        { nombre: "Caballo", imagen: caballo },
        { nombre: "Vaca", imagen: vaca },
        { nombre: "Tiburón", imagen: tiburon },
      ],
      Intruso: "Tiburón",
    },
  },
  {
    ronda5: {
      opciones: [
        { nombre: "Oveja", imagen: oveja },
        { nombre: "Perro", imagen: perro },
        { nombre: "Pingüino", imagen: pingüino },
      ],
      Intruso: "Pingüino",
    },
  },
];