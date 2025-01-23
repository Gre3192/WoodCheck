import { useState } from "react";
import { FaCirclePlus, FaTrash } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import costruzioneEdile from "../../Assets/costruzione-edile.jpg";
import Modal from "../../Components/ElementUI/Modal";
import NewProjectModal from "../../Components/ModalElement/NewProjectModal";
import DeleteProjectModal from "../../Components/ModalElement/DeleteProjectModal";

export default function EntryPoint() {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [openNewProjectModal, setOpenNewProjectModal] = useState(false);
  const [openDeleteProjectModal, setOpenDeleteProjectModal] = useState(false);
  const navigate = useNavigate();



  function handleButtonProject() {
    navigate('/SezioniNormali');
  }

  function handleButtonNewProject() {
    setOpenNewProjectModal(!openNewProjectModal);
  }
  function handleButtonTrash(e) {
    setOpenDeleteProjectModal(!openDeleteProjectModal);
    e.stopPropagation();
  }


  const listProjects = [
    { label: "Via S.Eligio, 5B" },
    { label: "Via Teodosio, 18" },
    { label: "Via B.Russel, 86" },
    { label: "Via dei coralli, 34" },
    { label: "Via Bersani, 56" },
    { label: "Via Lavinia,76" },
    { label: "Via Etnea, 19" },
    { label: "Via Garibaldi, 34" },
    { label: "Via Galermo, 87" },
    { label: "Via Dalla Chiesa, 16" },
    { label: "Via Facone, 74" },
    { label: "Via Borsellino, 25" },
    { label: "Via Giuliano, 134" },
    { label: "Via Montana, 98" },
  ];

  // Filtra i progetti in base alla ricerca
  const filteredProjects = listProjects.filter((project) =>
    project.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>

      <div className="select-none flex h-screen p-8">
        <div className="w-1/2 flex flex-col h-full">
          <div className="text-5xl font-bold">UniStruct</div>

          <button
            onClick={handleButtonNewProject}
            className="mt-6 w-48 p-5 rounded-xl flex items-center gap-3 bg-white shadow-lg hover:scale-110 duration-300">
            <FaCirclePlus />
            <div className="whitespace-nowrap font-semibold">Nuovo Progetto</div>
          </button>

          <div className="mr-6 flex h-full flex-col flex-grow">
            <div className="flex justify-between my-6 items-center">
              <div className="text-3xl font-semibold">Progetti</div>
              {/* Input con icona */}
              <div className="relative w-52">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cerca progetto..."
                  className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Contenitore scrollabile con altezza dinamica */}
            <div className="overflow-auto p-5 border border-gray-300 rounded-lg">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((item, index) => (
                  <button
                    key={index}
                    onClick={handleButtonProject}
                    className="w-full flex items-center justify-between bg-white p-3 rounded-lg duration-300 shadow-lg hover:scale-105 mb-2"
                  >
                    {item.label}
                    <button onClick={(e) => handleButtonTrash(e)}>
                      <FaTrash className="text-gray-400 hover:text-gray-500" />
                    </button>
                  </button>
                ))
              ) : (
                <div className="text-gray-500 text-center">Nessun risultato trovato</div>
              )}
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-green-200 rounded-2xl">
          <img src={costruzioneEdile} className="w-full h-full rounded-2xl shadow-2xl" />
        </div>
      </div>


      <Modal open={openNewProjectModal} handleClose={() => setOpenNewProjectModal(false)} children={<NewProjectModal />} />
      <Modal open={openDeleteProjectModal} handleClose={() => setOpenDeleteProjectModal(false)} children={<DeleteProjectModal />} />
    </>
  );
}
