import useArticles from "../../hooks/useArticles";
import { useAppContext } from "../../AppProvider";
import useScreenSize from '../../hooks/useScreenSize';
import Card from '../Card';
import { Container } from "./articles.styled";
import { getVariant, getClassFromType, isMobile } from "../../utils/screenSizeUtils";

const Articles = () => {
    const { articles, setArticles } = useArticles();
    const { dropdownData } = useAppContext();
    const { currentScreenWidth } = useScreenSize();
    const type = dropdownData.selectedOption;

    return(
        <Container className={getClassFromType(type, isMobile(currentScreenWidth))}>
            {
                articles.map((article, index)=>(
                    <Card 
                        key={index} 
                        article={article}
                        setArticles={setArticles}
                        variant={getVariant(currentScreenWidth, type)}
                    />
                ))
            }
        </Container>
    )
}

export default Articles;