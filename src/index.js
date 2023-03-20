import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import { Product } from './pages/Products/Products';
import { Registration } from './pages/Registration/Registration';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { InfoAboutMe } from './pages/InfoAboutMe/InfoAboutMe';
import { Signin } from './pages/Signin/Signin';

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
        path: 'registration',
        element: <Registration />,
      },
      {
        path: 'myPage',
        element: <InfoAboutMe />,
      },
      {
        path: "/signin",
        element: <Signin />
      },
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
