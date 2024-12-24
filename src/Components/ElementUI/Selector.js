import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Label, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { FaCheck, FaChevronDown, FaExclamationTriangle, FaExclamationCircle } from 'react-icons/fa';
import { useState } from 'react'

export default function Selector({label, listItem, handleCheck, value, placeholder = "Seleziona un'opzione..."}) {

    const [isOpenDialog, setIsOpenDialog] = useState(false)

    function openDialog() {
        setIsOpenDialog(true)
    }

    function closeDialog() {
        setIsOpenDialog(false)
    }

    return (
        <div className='w-fit'>
            <Listbox value={value} onChange={handleCheck}>
                <div className='flex mb-2 items-center gap-2 justify-between'>
                    <Label className="block text-sm/6 font-medium text-gray-900">{label}</Label>
                    <FaExclamationCircle onClick={openDialog} className='text-gray-400 focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white cursor-pointer' />
                </div>
                <div className="relative">
                    <ListboxButton className="grid w-56 cursor-pointer grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400 sm:text-sm/6 ">
                        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                            <span className={`block truncate ${value ? '' :'text-[#9ca3af]'}`}>
                            {value ? value : placeholder}
                            </span>
                        </span>
                        <FaChevronDown
                            aria-hidden="true"
                            className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-3"
                        />
                    </ListboxButton>

                    <ListboxOptions
                        transition
                        className="bg-white z-10 origin-top top-0 left-60 transition rounded-md duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 w-56 absolute"
                    >
                        {listItem.map((item, index) => (
                            <ListboxOption
                                key={index}
                                value={item.value}
                                className="cursor-pointer group rounded-md relative select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-blue-400 data-[focus]:text-white data-[focus]:outline-none"
                            >
                                <div className="flex items-center">
                                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                        {item.label}
                                    </span>
                                </div>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-400 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                                    <FaCheck aria-hidden="true" className="size-4" />
                                </span>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>




            <Dialog open={isOpenDialog} onClose={closeDialog} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                        <FaExclamationTriangle aria-hidden="true" className="size-6 text-red-600" />
                                    </div>
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                                            Deactivate account
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to deactivate your account? All of your data will be permanently removed.
                                                This action cannot be undone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={closeDialog}
                                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >
                                    Deactivate
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={closeDialog}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >
                                    Cancel
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>

        </div>
    )
}





