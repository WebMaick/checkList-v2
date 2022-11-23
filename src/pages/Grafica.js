import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useData } from "../hooks/useData";
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const Grafica = () => {
  const [dataGrafica] = useData();

  return (
    <div className="h-screen w-full">
      <div className="h-full w-full pt-4 md:flex md:items-center md:justify-center">
        <Radar data={dataGrafica} />
      </div>
    </div>
  );
};
