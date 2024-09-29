import React, { useState } from 'react';
import { FaBars, FaArrowLeft, FaCog, FaChevronDown, FaFilePdf } from 'react-icons/fa';
import { Link } from "react-router-dom";


export const sidebarItem = [
  {
    name: "Combinazioni di carcio",
    link: "/loadCombination"
  },
  {
    name: "Progetto",
    link: "/project"
  },
  {
    name: "Verifiche SLU",
    link: "/checksslu"
  },
  {
    name: "Verifiche SLE",
    link: "/checkssle"
  },
  {
    name: "Travi speciali",
    link: "/specialBeams"
  },
  {
    name: "Collegamenti",
    link: "/joins"
  }
]

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCogClick = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleSidebarClick = (e) => {
    if (e.target.closest('.fa-cog')) {
      return;
    }
    setIsOpen(!isOpen);
  };

  const toggleSection = (index) => {
    setOpenSections(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={handleSidebarClick} className="flex flex-col top-0 z-20">
        <div className={`w-64 bg-[#7C6A55] h-screen text-white p-6 pr-0 fixed transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-52'}`}>
          <div className='relative flex flex-col h-full'>
            <button onClick={toggleSidebar} className={`scale-150 pr-4 self-end top-0 right-0 ${!isOpen ? 'visible' : 'hidden'}`}>
              <FaBars />
            </button>
            <button onClick={toggleSidebar} className={`scale-150 pr-4 self-end top-0 right-0 ${isOpen ? 'visible' : 'hidden'}`}>
              <FaArrowLeft />
            </button>
            <ul className="list-none mt-8">
              {sidebarItem.map((item, index) => {
                const isOpenSection = openSections[index];
                return (
                  <li key={index} className="py-2 w-fit">
                    {item.fields ? (
                      <div>
                        <div className="flex items-center cursor-pointer" onClick={(e) => { e.stopPropagation(); toggleSection(index); }}>
                          <span>{item.title}</span>
                          <FaChevronDown className={`ml-1 w-3 h-3 transform transition-transform duration-300 ${isOpenSection ? 'rotate-0' : '-rotate-90'}`} />
                        </div>
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpenSection ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <ul className="list-none ml-4 mt-2">
                            {item.fields.map((subItem, subIndex) => (
                              <li key={subIndex} className="py-1 hover:bg-[#9A8161] hover:text-gray-300 rounded cursor-pointer">
                                <Link to={subItem.link} onClick={handleLinkClick} className="block px-2">
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div onClick={(e) => { e.stopPropagation(); }}>
                        <Link to={item.link} onClick={handleLinkClick} className="block px-2 py-1 hover:bg-[#9A8161] hover:text-gray-300 rounded cursor-pointer">
                          {item.name}
                        </Link>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            <Link
              to="/madepdf"
              onClick={handleCogClick}
              className="absolute bottom-9 right-4 transform transition-transform duration-300  hover:animate-wobble"
            >
              <FaFilePdf />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
