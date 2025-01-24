import React, { useState } from 'react';
import WoodProject from '../WoodProject/WoodProject';
import WoodChecksSLU from '../WoodChecksSLU/WoodChecksSLU';
import WoodChecksSLE from '../WoodChecksSLE/WoodChecksSLE';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function ProjectPage() {

    const [sectionProp, setsectionProp] = useState(null)
    const [sectionGeometryMass, setSectionGeometryMass] = useState(null)
    const [isProject, setisProject] = useState(false)
    const [isCheckSLU, setisCheckSLU] = useState(false)
    const [isCheckSLE, setisCheckSLE] = useState(false)


    const travi = [
        {
            label: 'Trave 1'
        },
        {
            label: 'Trave 2'
        },
        {
            label: 'Trave 3'
        },
        {
            label: 'Trave 4'
        },
        {
            label: 'Trave 5'
        },
        {
            label: 'Trave 6'
        }
    ]

    function handleButtonTrave() {

        setisProject(true)

    }

    function handleButtonTrash(e) {
        e.stopPropagation()



    }

    return (
        <>


            {!isProject && !isCheckSLU && !isCheckSLE &&
                <div className='flex flex-col gap-5'>
                    {
                        travi.map((trave, index) => {
                            return (
                                <>
                                    <Link
                                    to={'/project'}
                                        onClick={handleButtonTrave}
                                        className='w-60 flex flex-col justify-start bg-white shadow-xl rounded-lg py-3 px-4 duration-300 hover:scale-105'>
                                        <div className='font-semibold text-lg flex justify-between w-full items-center'>
                                            Trave 1
                                            <button onClick={(e) => handleButtonTrash(e)}>
                                                <FaTrash className='text-gray-400 hover:text-gray-500' />
                                            </button>
                                        </div>
                                        {/* <div>
                                            <div className=' text-base'>
                                                Sezione 1
                                            </div>
                                            <div className=' text-base'>
                                                Sezione 2
                                            </div>
                                            <div className=' text-base'>
                                                Sezione 3
                                            </div>
                                        </div> */}
                                    </Link>
                                </>
                            )
                        })
                    }
                    <button className='bg-white absolute bottom-0 right-0 mb-8 mr-8 hover:scale-110 duration-300 w-11 h-11 shadow-black shadow-2xl rounded-full'>+</button>
                </div>
            }

            {/* {isProject && <WoodProject />}
            {isCheckSLU && <WoodChecksSLU />}
            {isCheckSLE && <WoodChecksSLE />} */}
        </>
    );
}
