import Latex from 'react-latex-next';
import InputBox from './InputBox';

export default function MinimalTable({ list, isInput = true }) {

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                <thead>
                    <tr className="bg-gray-100 select-none">
                        {
                            list?.map((item, index) => {
                                return (
                                    <th key={index} className="px-4 py-2 text-center whitespace-nowrap overflow-hidden text-ellipsis" title={item.textHover}>
                                        <Latex>{`$${item.label}$`}</Latex>
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            list?.map((item, index) => {
                                return (
                                    <td key={index} className="px-4 py-2 text-center whitespace-nowrap overflow-hidden text-ellipsis">
                                        {isInput ? <InputBox
                                            key={index}
                                            props={{
                                                name: item.name,
                                                titleInputBox: item.titleInputBox,
                                                placeholder: 'Inserisci valore...',
                                                type: 'number',
                                                value: item.value,
                                                handleInputChange: item.handleInputChange,
                                                isLatexTitle: ''
                                            }}
                                        /> :
                                            <p title={item.textHover}>
                                                {item.value}
                                            </p>
                                        }
                                    </td>
                                )
                            })
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}