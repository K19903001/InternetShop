import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { Product } from './pages/Products/Products';
import { Registr } from './pages/Registr/Registr';
import { Contacts } from './pages/Contacts/Contacts';
import { User } from './pages/User/User';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
            {
        path: 'products',
        element: <Product />
      },
      {
        path: 'registr',
        element: <Registr />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
      {
        path: 'user',
        element: <User />,
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
