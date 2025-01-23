import React from "react";

export default function NewProjectModal() {

    
  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* Titolo del Form */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nuovo Progetto</h2>

      {/* Nome Progetto */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Nome Progetto</label>
        <input
          type="text"
          className="w-full border p-2 rounded mt-1 focus:ring focus:ring-blue-300 outline-none"
          placeholder="Inserisci il nome del progetto"
        />
      </div>

      {/* Descrizione Progetto */}
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">Descrizione</label>
        <textarea
          className="w-full border p-2 rounded mt-1 focus:ring focus:ring-blue-300 outline-none"
          rows="3"
          placeholder="Inserisci una breve descrizione"
        ></textarea>
      </div>

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
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Aggiungi Progetto
        </button>
      </div>
    </form>
  );
}
