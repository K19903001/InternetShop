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

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "myPage",
        element: <InfoAboutMe />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "*",
        element: <NotFound />,
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
