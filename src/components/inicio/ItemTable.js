import React, { useContext } from "react";
import { CheckListContext } from "../../context/CheckListContext";

export const ItemTable = ({ item }) => {
  const { openModal, selectItem } = useContext(CheckListContext);
  const {
    Categoría,
    Descripción_Subcategoría,
    Descripción_categoría,
    Función,
    Respuesta_comentario,
    Subcategoría,
    Valoración_cumplimiento,
    // id,
  } = item;

  const clickItemModal = () => {
    openModal();
  };

  const clickItemSelect = (item) => {
    selectItem(item);
  };

  return (
    <tr>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="whitespace-no-wrap text-gray-900">{Función}</p>
          </div>
        </div>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">{Categoría}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">
          {Descripción_categoría}
        </p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">{Subcategoría}</p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">
          {Descripción_Subcategoría}
        </p>
      </td>
      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
        <p className="whitespace-no-wrap text-gray-900">
          {Respuesta_comentario}
        </p>
      </td>
      <td
        onDoubleClick={() => clickItemModal()}
        className="border-b border-gray-200 bg-white px-5 py-5 text-sm"
        onClick={() => clickItemSelect(item)}
      >
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-green-200 opacity-50"
          ></span>
          <span className="relative">{Valoración_cumplimiento}</span>
        </span>
      </td>
    </tr>
  );
};
