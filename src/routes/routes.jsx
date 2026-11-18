import { createBrowserRouter, Outlet } from "react-router-dom";
import Inicio from "../pages/inicio.jsx";
import Error from "../pages/error.jsx";
import HoraComer from "../componentes/HoraComer.jsx";
import Intruso from "../componentes/Intruso.jsx";
import Puntaje from "../componentes/puntaje.jsx";
import Resultados from "../pages/resultados.jsx";
import RutaProtegida from "../componentes/RutaProtegida.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/resultados",
        element: (
          <RutaProtegida>
            <Resultados />
          </RutaProtegida>
        ),
      },
      {
        path: "/Error",
        element: <Error />,
      },
      {
        path: "/error",
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
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
