import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const screen = {
        mobile: 500,
        tablet: 768,
        desktop: 1100,
    };

    const [selectedOption, setSelectedOption] = useState("List");

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };

    const dropdownData = {
        options: ['List', 'Grid'],
        selectedOption: selectedOption,
        onSelect: handleOptionSelect,
    }

    return(
        <AppContext.Provider value={{screen, dropdownData }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
}