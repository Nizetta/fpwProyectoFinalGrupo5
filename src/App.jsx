import {RouterProvider} from 'react-router-dom';
import router from './routes/routes.jsx';
import { PuntajeProvider } from "./context/PuntajeContext.jsx";


const App = () => {
  return (
    <PuntajeProvider>
      <RouterProvider router={router} />
    </PuntajeProvider>
   
  );
};

export default App