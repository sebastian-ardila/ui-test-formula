import { createContext, useContext, useState } from "react";
import { LIST, GRID } from "./constants/viewModes"

const AppContext = createContext();

export const AppProvider = ({children}) => {
    const [selectedOption, setSelectedOption] = useState(LIST);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };

    const dropdownData = {
        options: [LIST, GRID],
        selectedOption: selectedOption,
        onSelect: handleOptionSelect,
    }

    return(
        <AppContext.Provider value={{ dropdownData }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
}