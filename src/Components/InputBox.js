import Latex from 'react-latex-next';

export default function InputBox({ props }) {

    const {
        titleInputBox = "Default Title",
        placeholder = "Default Placeholder...",
        type = "Default Text",
        value = "",
        name = "",
        handleInputChange = () => { },
        isLatexTitle = false,
        isTitle = false
    } = props;

    return (
        <div className='flex flex-col'>

{isLatexTitle ? (
                <label className="block text-left text-lg mb-1">
                    <Latex>{`$${titleInputBox}$`}</Latex>
                </label>
            ) : (
                <label className="block text-left text-lg mb-1">
                    <p>{titleInputBox}</p>
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleInputChange}
                className="border border-gray-300 rounded px-3 py-2 w-full text-left"
            />
        </div>
    )
}