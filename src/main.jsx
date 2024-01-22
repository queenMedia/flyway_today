import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home, Thanks } from '@routes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { globals } from "@styles/globals"
import { Global } from '@emotion/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globals} /> 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
