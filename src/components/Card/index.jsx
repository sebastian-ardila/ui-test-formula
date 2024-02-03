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
import { getThumbState } from "../../utils/thumbUtils";
import { shortText } from "../../utils/textUtils";

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
                            <Name title={article.name} className="title">
                                {(variant === "card" || variant === "mobile-list") ? shortText(article.name, 20): article.name}
                            </Name>
                            <Description title={article.description} className="description">
                                {shortText(article.description, 70)}
                            </Description>
                        </Text>
                    </div>
                    <Votes 
                        variant={variant} 
                        setArticles={setArticles} 
                        lastUpdated={article.lastUpdated} 
                        category={article.category}
                        name={article.name}
                    />
                </Details>
                <GaugeBar variant={variant} positives={article.votes.positive} negatives={article.votes.negative} />
            </ContentContainer>
        </Container>
    );
};

export default Card;