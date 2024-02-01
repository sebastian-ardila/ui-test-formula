import { useAppContext } from "../../AppProvider";
import useScreenSize from "../../hooks/useScreenSize";
import Dropdown from "../Dropdown";
import { Container, Title } from "./header.styled";
import { DESKTOP, MOBILE } from "../../constants/screenSizes";

const getFontSize = (currentScreenWidth, size) => {
    if(currentScreenWidth < size) return 24;
    return 45;
};
const Header = () => {
    const { dropdownData } = useAppContext();
    const { currentScreenWidth } = useScreenSize();
    
    return(
        <Container>
            <Title size={getFontSize(currentScreenWidth, DESKTOP.size)}>Previous Rulings</Title>
            { (currentScreenWidth > MOBILE.size) && 
                <Dropdown options={dropdownData.options} onSelect={dropdownData.onSelect} defaultOption={dropdownData.selectedOption}/> 
            }
        </Container>
    );
};

export default Header;