import React from "react";

import { useRouteError, Link } from "react-router-dom";
import { HiOutlineArrowSmLeft } from "react-icons/hi";

export const PagesError = () => {
  const error = useRouteError();
  return (
    <div className="bg-gray-200 w-full h-screen flex  items-center justify-center flex-col relative">
      <h2 className="text-5xl font-bold">404</h2>
      <h3 className="my-3">Pagina no Encontrada</h3>
      <p className="text-2xl">{error.statusText || error.message}</p>

      <div className="flex items-center absolute bottom-5 right-4">
        <HiOutlineArrowSmLeft className="text-crimson-700" />
        <Link to="/" className=" text-crimson-700">
          Volver a la pagina anterioor
        </Link>
      </div>
    </div>
  );
};
