import React, { createContext, useEffect, useReducer, useState } from "react";
import { types, typesModal } from "../types/types";
import { checkListReducer } from "./checkListReducer";

export const CheckListContext = createContext();

const init = () => {
  return {
    data: [],
    statusModal: false,
    selectItemActual: null,
  };
};

export const CheckListProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [state, dispatch] = useReducer(checkListReducer, {}, init);

  useEffect(() => {
    cargarData();
  }, []);

  const cargarData = async () => {
    setLoader(true);
    const res = await fetch(
      "https://quiet-otter-3f4f5b.netlify.app/json/detalle.json"
    );
    const json = await res.json();
    setLoader(false);

    dispatch({
      type: types.CARGA__DATA,
      payload: json,
    });
  };

  // Funcion para seleccionar Item a hacer click
  const selectItem = (item) => {
    dispatch({
      type: types.SELECT__ITEM__DATA,
      payload: item,
    });
  };

  // Funcion para abrir el modal
  const openModal = () => {
    dispatch({
      type: typesModal.OPEN__MODAL,
      payload: true,
    });
  };

  // Funcion para cerrar Modal
  const closeModal = () => {
    dispatch({
      type: typesModal.CLOSE__MODAL,
      payload: false,
    });
  };

  // Funcion para actualizar valor
  const updateValores = (item) => {
    dispatch({
      type: types.EDITA__VALOR,
      payload: item,
    });
  };

  return (
    <CheckListContext.Provider
      value={{
        data: state.data,
        statusModal: state.statusModal,
        selectItemActual: state.selectItemActual,
        loader,
        selectItem,
        openModal,
        closeModal,
        updateValores,
      }}
    >
      {children}
    </CheckListContext.Provider>
  );
};
