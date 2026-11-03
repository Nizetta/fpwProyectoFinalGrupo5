import {RouterProvider} from 'react-router-dom'
import router from './routes/routes.jsx'
import { PuntajeProvider } from "./context/PuntajeContext.jsx";


function App() {
  return (
    <div className="bg-light min-vh-100 w-100 p-0 m-0">
    <PuntajeProvider>
      <RouterProvider router={router} />
    </PuntajeProvider>
    </div>
  )
}

export default App