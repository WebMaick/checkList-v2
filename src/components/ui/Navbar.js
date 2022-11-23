import React from "react";
import { Logo } from "../icon/Logo";

import { NavLink } from "react-router-dom";

export const Navbar = () => {
  let activeStyle = {
    fontWeight: "bold",
    color: "rgb(29 78 216 / var(--tw-text-opacity))",
  };
  return (
    <nav className="fixed top-0 bottom-0 z-50 h-16 w-full bg-white/30 backdrop-blur">
      <div className="flex h-full items-center justify-between px-5 md:mx-auto md:w-10/12">
        <Logo />
        <div className="flex gap-x-2 text-blue-400">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            INICIO
          </NavLink>

          <NavLink
            to="grafica"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            GRAFICA
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
