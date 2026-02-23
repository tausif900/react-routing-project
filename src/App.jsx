import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './components/Home';
import Register from './components/Register';
import { RouterProvider } from 'react-router-dom';
import Product from './components/Product';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Reducer from './components/Reducer';
import Memoization from './components/Memoization';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'products/:id',
        element: <Product />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'reducer',
        element: <Reducer />,
      },
      {
        path:"memoization",
        element:<Memoization/>
      },
      {
        path: '*',        //* means hamare die hue page ke alawa koi bhi page search hota h  to kya show krna h
        element: <NotFound />,
      }
    ]
  }
])

function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
