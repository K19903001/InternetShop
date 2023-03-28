import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Products } from "./pages/Products/Products";
import { Registration } from "./pages/Registration/Registration";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { InfoAboutMe } from "./pages/InfoAboutMe/InfoAboutMe";
import { Signin } from "./pages/Signin/Signin";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NotFound } from "./pages/notFound/notFound";
import { Main } from "./pages/Main/Main";
import { Cart } from "./pages/Cart/cart";
import { Favorites } from "./pages/Favorites/Favorites";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "main",
        element: <Main />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "user/me",
        element: <InfoAboutMe />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
