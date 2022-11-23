import React from "react";

import { Outlet } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";

export const RutaPublica = () => {
  return (
    <div className="relative min-h-screen bg-gray-200">
      <Navbar />

      <main className="py-16 px-2">
        <Outlet />
      </main>

      <footer className="absolute bottom-0 left-0 w-full rounded-t-md bg-gray-200 p-4 text-center text-gray-800">
        <h3 className="">Diseños Web</h3>
        <small className="text-[11px]">@Derechos Reservados - 2022</small>
      </footer>
    </div>
  );
};
