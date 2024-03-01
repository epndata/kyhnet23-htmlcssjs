import React, { useEffect, useState } from 'react'

const DropDownButton = ({options, useIcon = false}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState(options[0]?.text);

    const handleOptionClick = (text) => {
        setSelectedOption(text);
        setIsOpen(false);
    };

    useEffect(() => {
        setSelectedOption(options[0]?.text)
    }, [options])


    return (
        <div className="btn-dropdown">
            <div className="dropdown-selected" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption}
            </div>
            {
                isOpen 
                ? (<i className="dropdown-icon fa-regular fa-chevron-up"></i>) 
                : (<i className="dropdown-icon fa-regular fa-chevron-down"></i>)
            }

            {isOpen && (
                <ul className="dropdown-options">
                {options.map((option, index) => (
                    <li key={index} className="dropdown-option" onClick={() => handleOptionClick(option.text)}>
                        {option.text}
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}

export default DropDownButton