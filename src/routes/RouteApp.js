import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Grafica } from "../pages/Grafica";
import { Inicio } from "../pages/Inicio";
import { PagesError } from "../pages/PagesError";
import { RutaPublica } from "./RutaPublica";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RutaPublica />,
    errorElement: <PagesError />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/inicio",
        element: <Inicio />,
      },
      {
        path: "/grafica",
        element: <Grafica />,
      },
    ],
  },
]);

export const RouteApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
