import React from "react";

export default function DeleteProjectModal() {
  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* Titolo */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Elimina Progetto</h2>

      {/* Messaggio di Conferma */}
      <p className="text-gray-600">
        Sei sicuro di voler eliminare il progetto{" "}
        <span className="font-bold">Nome Progetto</span>?<br />
        Questa azione non può essere annullata.
      </p>

      {/* Pulsanti di Azione */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
        >
          Annulla
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Elimina
        </button>
      </div>
    </form>
  );
}
