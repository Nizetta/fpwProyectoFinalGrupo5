import { createBrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio.jsx";
import Error from "../pages/error.jsx";
import HoraComer from "../componentes/HoraComer.jsx";
import Intruso from "../componentes/Intruso.jsx";
import Puntaje from "../componentes/puntaje.jsx";
import LoginMaestra from "../pages/LoginMaestra.jsx";
import Resultados from "../pages/resultados.jsx";

const router = createBrowserRouter([
  { 
    path: "/LoginMaestra", 
    element: <LoginMaestra /> 
  },
  { path: "/resultados", element: <Resultados /> },
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/Error",
    element: <Error />,
  },
  {
    path: "/HoraComer",
    element: <HoraComer />,
  },
  {
    path: "/Intruso",
    element: <Intruso />,
  },
  {
    path: "/Puntaje",
    element: <Puntaje />,
  },
]);

export default router;