import React, { useContext, useState } from "react";
import { CheckListContext } from "../../context/CheckListContext";
import { useFilter } from "../../hooks/useFilter";
import { Loader } from "../icon/Loader";
import { Modal } from "../ui/Modal";

import { ItemTable } from "./ItemTable";

export const Table = () => {
  const { loader } = useContext(CheckListContext);
  const [selectItem, setSelectItem] = useState({ opciones: "0" });
  const { opciones } = selectItem;

  const [newData] = useFilter(opciones);

  const handleInput = ({ target }) => {
    setSelectItem({
      ...selectItem,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <div className="relative min-h-screen rounded-md bg-white p-8">
        <div className=" flex flex-col pb-3">
          <div className="mb-2 flex items-center">
            <h3 className="mr-2 text-gray-600">Selecciona filtro</h3>
            <form>
              <select
                name="opciones"
                id="opciones"
                className="block rounded-md bg-gray-50 p-2 px-3 outline-none"
                onChange={handleInput}
                value={opciones}
              >
                <option value="0">All</option>
                <option value="1. IDENTIFICAR (ID)">IDENTIFICAR</option>
                <option value="2. PROTEGER (PR)">PROTEGER</option>
                <option value="3. DETECTAR (DE)">DETECTAR</option>
                <option value="4. RESPONDER (RS)">RESPONDER</option>
                <option value="5. RECUPERAR (RC)">RECUPERAR</option>
              </select>
            </form>
          </div>
          {/*  <div className="flex items-center rounded-md bg-gray-50 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              autoComplete="off"
              className="ml-1 block bg-gray-50 outline-none "
              type="text"
              name="search"
              id="search"
              placeholder="search..."
            />
          </div> */}
        </div>

        {loader ? (
          <div className="flex w-full items-center justify-center">
            <Loader />
          </div>
        ) : (
          <div>
            <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Función
                      </th>
                      <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Categoria
                      </th>
                      <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Descripción_Categoria
                      </th>
                      <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Sub categoria
                      </th>
                      <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Descripción Subcategoria
                      </th>
                      <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Respuesta / Comentario
                      </th>
                      <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                        Valoración % Cumplimiento
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {newData.map((item) => (
                      <ItemTable key={item.id} item={item} />
                    ))}
                  </tbody>
                </table>
                {/* <div className="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5          ">
                <span className="xs:text-sm text-xs text-gray-900">
                  Showing 1 to 4 of 50 Entries
                </span>
                <div className="xs:mt-0 mt-2 inline-flex">
                  <button className="rounded-l bg-indigo-600 py-2 px-4 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500">
                    Anterior
                  </button>
                  &nbsp; &nbsp;
                  <button className="rounded-r bg-indigo-600 py-2 px-4 text-sm font-semibold text-indigo-50 transition duration-150 hover:bg-indigo-500">
                    Siguiente
                  </button>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        )}

        <Modal />
      </div>
    </>
  );
};
