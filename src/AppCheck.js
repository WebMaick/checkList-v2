import React from "react";
import { CheckListProvider } from "./context/CheckListContext";
import { RouteApp } from "./routes/RouteApp";

export const AppCheck = () => {
  return (
    <CheckListProvider>
      <RouteApp />
    </CheckListProvider>
  );
};
