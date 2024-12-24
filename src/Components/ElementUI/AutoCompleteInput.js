import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react'
import { FaCheck, FaChevronDown } from 'react-icons/fa'
import { useState } from 'react'

const people = [
  { id: 1, name: 'Tom Cook gre' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb gre' },
]

export default function AutoCompleteInput({ label = 'label', listItem = people, onChange = () => { }, displayValue = '', placeholder = "Inserisci un'opzione..." }) {

  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState('')


  function handleSelectedValue(value) {
    setSelected(value)
    onChange(value)
  }

  const filteredItem =
    query === ''
      ? listItem
      : listItem.filter((item) => {
        return item.name.toLowerCase().includes(query.toLowerCase())
      })

  return (
    <div className="w-56">
      <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900  mb-2">
        {label}
      </label>
      <Combobox value={selected} onChange={(value) => handleSelectedValue(value)} onClose={() => setQuery('')}>

        <div className="relative flex items-center rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-blue-400">
          <ComboboxInput
            className={
              'w-full rounded-md outline-gray-300  bg-white py-1.5 pr-8 pl-3 text-sm/6 text-black focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
            }
            displayValue={(item) => (item ? item.name : displayValue)}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
            <FaChevronDown className="size-3 fill-black/60 group-data-[hover]:fill-black" />
          </ComboboxButton>
        </div>

        <ComboboxOptions
          anchor="bottom"
          transition
          className={
            'w-[var(--input-width)] absolute top-52 z-50 h-96 rounded-ms border border-black/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          }
        >
          {filteredItem.map((item, index) => (
            <ComboboxOption
              key={index}
              value={item}
              className="group flex justify-between cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
            >
              <div className="text-sm/6 text-black">{item.name}</div>
              <FaCheck className="invisible size-4 text-blue-400 group-data-[selected]:visible" />
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combobox>
    </div>
  )
}
