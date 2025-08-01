import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import GridBackground from './Components/Backround/GridBackground';




const router = createBrowserRouter([
  {
    path: "/",
    element: <GridBackground>
      <Root></Root>
    </GridBackground>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
