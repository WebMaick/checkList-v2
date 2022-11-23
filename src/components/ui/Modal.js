import React, { useContext, useEffect, useState } from "react";
import { CheckListContext } from "../../context/CheckListContext";

const initialState = {
  Categoría: "",
  Descripción_Subcategoría: "",
  Descripción_categoría: "",
  Función: "",
  Respuesta_comentario: "",
  Subcategoría: "",
  Valoración_cumplimiento: "",
  id: "",
};

export const Modal = () => {
  const { statusModal, closeModal, selectItemActual, updateValores } =
    useContext(CheckListContext);
  const [formValues, setFormValues] = useState(initialState);

  useEffect(() => {
    if (!selectItemActual) return;

    setFormValues(selectItemActual);
  }, [selectItemActual]);

  let { Valoración_cumplimiento } = formValues;

  const handleInput = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Valoración_cumplimiento) return null;

    // Envio de formulario
    formValues.Valoración_cumplimiento = parseInt(
      formValues.Valoración_cumplimiento
    );
    updateValores(formValues);

    // Reset de Formulario
    closeModal();
  };

  return (
    <>
      {statusModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 h-full w-full bg-black opacity-40"
              onClick={() => closeModal()}
            ></div>
            <div className="flex min-h-screen items-center px-4 py-8">
              <div className="relative mx-auto w-full max-w-lg rounded-md bg-white p-4 shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="mx-auto flex h-12 w-12 flex-none items-center justify-center rounded-full bg-red-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <h4 className="text-lg font-medium text-gray-800">
                      Actualizar Valoración ?
                    </h4>

                    <form onSubmit={handleSubmit}>
                      <input
                        autoFocus
                        autoComplete="off"
                        type="number"
                        name="Valoración_cumplimiento"
                        id="valoracion"
                        placeholder="Nuevo valor entre 1-100"
                        className="mt-3 block w-full rounded-md bg-gray-50 p-2 text-center outline-none  focus:ring-2"
                        onChange={handleInput}
                        value={Valoración_cumplimiento}
                      />
                      <p className="mt-2 text-[12px] leading-relaxed text-sky-700">
                        El campo solamente aceptara valores numericos.
                      </p>
                      <div className="mt-3 items-center gap-2 sm:flex">
                        <button
                          className="mt-2 w-full flex-1 rounded-md bg-green-500 p-2.5 text-white outline-none ring-green-600 ring-offset-2 focus:ring-2"
                          type="submit"
                        >
                          Actualizar
                        </button>
                        <button
                          className="mt-2 w-full flex-1 rounded-md border bg-red-500 p-2.5 text-white outline-none ring-crimson-600 ring-offset-2 focus:ring-2"
                          onClick={() => closeModal()}
                        >
                          Cancelar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
