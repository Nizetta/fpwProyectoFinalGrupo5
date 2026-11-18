export const guardarResultado = (resultado) => {

  const resultadosGuardados =
    JSON.parse(localStorage.getItem("resultadosAlumnos")) || [];

  resultadosGuardados.push(resultado);

  localStorage.setItem(
    "resultadosAlumnos",
    JSON.stringify(resultadosGuardados)
  );
};
export const obtenerResultados = () => {

  const resultadosGuardados =
    JSON.parse(localStorage.getItem("resultadosAlumnos")) || [];

  return resultadosGuardados;
};