import { 
    Container, 
    Background, 
    ContentContainer, 
    Details, 
    Text, 
    Name, 
    Description 
} from "./card.styled";
import Thumb from "../Thumb";
import Votes from "../Votes";
import GaugeBar from "../GaugeBar";
import { DOWN, UP } from "../../constants/thumbConstants";



const shortText = (text, limit) => text.length > limit ? text.slice(0, limit) + '...' : text;

const getThumbState = (positives, negatives) => {
    if(positives > negatives) return UP;
    if(positives < negatives) return DOWN;
}

const Card = ({article, setArticles, variant}) => {
    return(
        <Container className={variant}>
            <Background className="picture" $picture={article.picture}/>
            <ContentContainer className="container">
                <Details className="details">
                    <div className="content">
                        
                        <Thumb 
                            variant={variant}
                            state={getThumbState(article.votes.positive, article.votes.negative)}
                            decoration={true}
                        />
                        
                        <Text>
                            <Name title={article.name} className="title">{(variant === "card" || variant === "mobile-list") ? shortText(article.name, 20): article.name}</Name>
                            <Description title={article.description} className="description">{shortText(article.description, 70)}</Description>
                        </Text>
                    </div>
                    <Votes variant={variant} lastUpdated={article.lastUpdated} category={article.category}/>
                </Details>
                <GaugeBar variant={variant} positives={article.votes.positive} negatives={article.votes.negative} />
            </ContentContainer>
        </Container>
    );
};

export default Card;