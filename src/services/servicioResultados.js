// Guardar los resultados de un alumno
export const guardarResultado = (resultado) => {

  // Recuperar los resultados guardados anteriormente
  const resultadosGuardados =
    JSON.parse(localStorage.getItem("resultadosAlumnos")) || [];

  // Agregar el nuevo resultado
  resultadosGuardados.push(resultado);

  // Guardar la lista actualizada
  localStorage.setItem(
    "resultadosAlumnos",
    JSON.stringify(resultadosGuardados)
  );
};
// Obtener los resultados guardados
export const obtenerResultados = () => {

  const resultadosGuardados =
    JSON.parse(localStorage.getItem("resultadosAlumnos")) || [];

  return resultadosGuardados;
};