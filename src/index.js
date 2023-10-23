import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './views/Home/Home';
import {createBrowserRouter, RouterProvider} from  'react-router-dom';
import AddProduct from './views/Home/AddProduct/AddProduct';

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/AddProduct',
    element: <AddProduct/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router={router} /> );


reportWebVitals();
