import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//paginas:
import HttpKittens from './pages/app-randomCat/kittens'
import RandomDog from './pages/app-randomDog/puppey'
import Login from './pages/app-login/Login'
import Index from './pages/index/Index'
import RandomUsers from './pages/app-usuarios/usuarios.js'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Index/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/kittens",
        element: <HttpKittens/>
      },
      {
        path: "/puppey",
        element: <RandomDog/>
      },
      {
        path: "/users",
        element: <RandomUsers/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
