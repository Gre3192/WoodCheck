import { Button } from "@headlessui/react"


export default function CustomButton({ text, onClick, keyObjName, icon, value }) {


    return (
        <>
            <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 p-2 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                onClick={onClick}
                name={keyObjName}
                value={value}
            >
                {icon ? icon : null}
                {text ? text : null}
            </Button>
        </>
    )
}