import { useState, useRef } from "react";
import { ReactComponent as ArrowIcon } from "../../assets/img/arrow.svg"
import useComponentClick from "../../hooks/useComponentClick.js";
import { ViewPicker, ViewPickerHeader, ViewPickerList } from "./dropdown.styled.js";

const Dropdown = ({options, onSelect, defaultOption}) => {
    const viewPickerRef = useRef();
    const [selectedOption, setSelectedOption] = useState(defaultOption || null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    useComponentClick({elementRef: viewPickerRef, handler: setIsDropdownOpen})

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleClick = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setIsDropdownOpen(false);
    }

    return (
        <ViewPicker ref={viewPickerRef}>
            <ViewPickerHeader onClick={toggleDropdown} data-testid="dropdown-header">
                <span>{selectedOption}</span>
                <ArrowIcon className={isDropdownOpen ? "open" : ""}/>
            </ViewPickerHeader>
            {isDropdownOpen && (
                <ViewPickerList role='list'>
                {options.map((option, index) => (
                    <li key={index} onClick={() => handleClick(option)}>
                    {option}
                    </li>
                ))}
                </ViewPickerList>
            )}
        </ViewPicker>
    )
};



export default Dropdown