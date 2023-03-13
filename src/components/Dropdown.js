import { useState } from "react";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCLick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // Close dropdown
        setIsOpen(!isOpen);
        // What option did the user click on?
        onChange(option);
    }

    const renderedOptions = options.map((option) => {
        return <div onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    return (
        <div>
            <div onClick={handleCLick}>
                {value?.label || 'Select'}</div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    );
}

export default Dropdown;