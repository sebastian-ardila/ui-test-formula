import { useAppContext } from "../../AppProvider";
import useScreenSize from "../../hooks/useScreenSize";
import Dropdown from "../Dropdown";
import { Container, Title } from "./header.styled";

const getFontSize = (currentScreenWidth, screen) => {
    if(currentScreenWidth < screen.desktop) return 24;
    return 45;
};
const Header = () => {
    const { screen, dropdownData } = useAppContext();
    const { currentScreenWidth } = useScreenSize();
    
    return(
        <Container>
            <Title size={getFontSize(currentScreenWidth, screen)}>Previous Rulings</Title>
            { (currentScreenWidth > screen.mobile) && 
                <Dropdown options={dropdownData.options} onSelect={dropdownData.onSelect} defaultOption={dropdownData.selectedOption}/> 
            }
        </Container>
    );
};

export default Header;