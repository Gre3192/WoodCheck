import { FaChevronDown } from 'react-icons/fa'
import { Input } from '@headlessui/react'

export default function InputBox({ label = 'label', keyObjName, displayValue = '', displayValueSelector='', type, onInputChange, onSelectChange = () => { }, selectList = ['a', 'b', 'c'] }) {
    return (
        <div className='w-56'>
            <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900 mb-2">
                {label}
            </label>
            <div>
                <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
                    {/* <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">$</div> */}
                    <Input
                        name={keyObjName}
                        type={type}
                        placeholder="0.00"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                        onChange={onInputChange}
                        value={displayValue ? displayValue : ""}
                    />
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                            name={keyObjName}
                            aria-label="Currency"
                            className="cursor-pointer col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400 sm:text-sm/6"
                            onChange={onSelectChange}
                            value={displayValueSelector}
                        >
                            {selectList.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })}
                        </select>
                        <FaChevronDown
                            aria-hidden="true"
                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-3"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
