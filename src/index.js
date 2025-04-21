import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './App.js'
import Musicas from './routes/musicas.jsx'
import Error from './routes/error.jsx'
import Sobre from './routes/sobre.jsx';

const router = createBrowserRouter([
  {
    errorElement: <Error />
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'musicas',
    element: <Musicas />,
  },
  {
    path: 'sobre',
    element: <Sobre />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
