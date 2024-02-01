import useArticles from "../../hooks/useArticles";
import { useAppContext } from "../../AppProvider";
import useScreenSize from '../../hooks/useScreenSize';
import styled from "styled-components";
import Card from '../Card';
import { MOBILE, TABLET } from "../../constants/screenSizes";
import { LIST, GRID, CAROUSEL } from "../../constants/viewModes";
import { MOBILE_LIST, DESKTOP_LIST, CARD } from "../../constants/cardVariants";

const getClassFromType = (type, isMobile) => {
    if(isMobile) return CAROUSEL;
    return type.toLowerCase() === LIST ? LIST : GRID;
}

const getVariant = (currentScreenWidth, type) => {
    if (currentScreenWidth <= MOBILE.size) return CARD;
    if (currentScreenWidth <= TABLET.size) return type === LIST ? MOBILE_LIST : CARD;
    if (currentScreenWidth > TABLET.size) return type === LIST ? DESKTOP_LIST : CARD;
};

const Articles = () => {
    const { articles, setArticles } = useArticles();
    const { dropdownData } = useAppContext();
    const { currentScreenWidth } = useScreenSize();
    const type = dropdownData.selectedOption;
    const isMobile = MOBILE.size > currentScreenWidth;
    const variant = getVariant(currentScreenWidth, type);

    return(
        <Container className={getClassFromType(type, isMobile)}>
            {
                articles.map((article)=>(
                    <Card 
                        key={crypto.randomUUID()} 
                        article={article} 
                        setArticles={setArticles}
                        variant={variant}
                    />
                ))
            }
        </Container>
    )
}

const Container = styled.div`

    &.carousel {
        min-width: 300px;
        display: flex;
        overflow: auto;
        gap: 12px;
    }

    &.grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 18px;
    }

    &.list {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

`;

export default Articles;