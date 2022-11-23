import { useContext, useEffect, useState } from "react";
import { CheckListContext } from "../context/CheckListContext";

export const useFilter = (opcion = "0") => {
  const { data } = useContext(CheckListContext);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    if (opcion === "0") {
      setNewData(data);
    } else {
      const resul = data.filter((item) => item.Función === opcion);
      setNewData(resul);
    }
  }, [opcion, data]);

  return [newData];
};
