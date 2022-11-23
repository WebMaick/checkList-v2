import { useContext } from "react";
import { CheckListContext } from "../context/CheckListContext";

export const useData = () => {
  const { data: dataBD } = useContext(CheckListContext);

  const groupData = {
    dato1: 0,
    dato2: 0,
    dato3: 0,
    dato4: 0,
    dato5: 0,
  };
  let { dato1, dato2, dato3, dato4, dato5 } = groupData;

  // const data1 =

  const newData1 = dataBD.slice(0, 29);
  const sumall = newData1
    .map((item) => item.Valoración_cumplimiento)
    .reduce((prev, curr) => prev + curr, 0);
  dato1 = Math.round((sumall * 100) / 2900);

  const newData2 = dataBD.slice(29, 68);
  const sumall2 = newData2
    .map((item) => item.Valoración_cumplimiento)
    .reduce((prev, curr) => prev + curr, 0);
  dato2 = Math.round((sumall2 * 100) / 3900);

  const newData3 = dataBD.slice(68, 86);
  const sumall3 = newData3
    .map((item) => item.Valoración_cumplimiento)
    .reduce((prev, curr) => prev + curr, 0);
  dato3 = Math.round((sumall3 * 100) / 1800);

  const newData4 = dataBD.slice(86, 102);
  const sumall4 = newData4
    .map((item) => item.Valoración_cumplimiento)
    .reduce((prev, curr) => prev + curr, 0);
  dato4 = Math.round((sumall4 * 100) / 1600);

  const newData5 = dataBD.slice(102, 108);
  const sumall5 = newData5
    .map((item) => item.Valoración_cumplimiento)
    .reduce((prev, curr) => prev + curr, 0);
  dato5 = Math.round((sumall5 * 100) / 600);

  const dataGrafica = {
    labels: [
      "IDENTIFICAR (ID)",
      "PROTEGER (PR)",
      "DETECTAR (DE)",
      "RESPONDER (RS)",
      "RECUPERAR (RC)",
    ],
    datasets: [
      {
        label: "# Puntuaciones y/o Calificaciones",
        data: [dato1, dato2, dato3, dato4, dato5],
        backgroundColor: "rgba(220, 20, 60, 0.5)",
        borderColor: "red",
        borderWidth: 1,

        pointBackgroundColor: "crimson", // color de los puntos de interseccion
        pointBorderColor: "red", // border de los puntos
        pointHoverBackgroundColor: "yellow", // color de los puntos al hover
        pointHoverBorderColor: "red", // color de borde al hacer hover
      },
    ],
  };
  return [dataGrafica];
};
