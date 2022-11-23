import { types, typesModal } from "../types/types";

export const checkListReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CARGA__DATA:
      return {
        ...state,
        dataCheck: action.payload,
        data: action.payload,
      };

    case types.FILTRAR__DATA:
      return {
        ...state,
        data: state.dataCheck.filter(
          (itemcheck) => itemcheck.Función === action.payload
        ),
      };

    case types.FILTRAR__DATA__ALL:
      return {
        ...state,
        data: state.data,
        dataCheck: state.dataCheck,
      };

    case typesModal.OPEN__MODAL:
    case typesModal.CLOSE__MODAL:
      return {
        ...state,
        statusModal: action.payload,
      };

    // SELECCION DE ITEM ACTUAL
    case types.SELECT__ITEM__DATA:
      return {
        ...state,
        selectItemActual: action.payload,
      };

    case types.EDITA__VALOR:
      return {
        ...state,
        data: state.dataCheck.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        dataCheck: state.dataCheck.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        selectItemActual: null,
      };
    default:
      return state;
  }
};
