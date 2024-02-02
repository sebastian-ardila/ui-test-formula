import { Container, Description, Buttons, Button } from "./votes.styled";
import Thumb from "../Thumb";
import { DOWN, UP } from "../../constants/thumbConstants";
import { getTimeDescriptionFromLastUpdated } from "../../utils/dateUtils";

const Votes = ({variant, lastUpdated, category}) => {
    const isVoted = false;
    return(
        <Container className={`votes-${variant}`}>
            <Description 
                className="vote-description">
                    {`${isVoted ? "Thank you for your vote!" : getTimeDescriptionFromLastUpdated(lastUpdated)}
                    in ${category}`}
            </Description>
            <Buttons>   
                <Thumb variant={variant} state={UP}/>
                <Thumb variant={variant} state={DOWN}/>
                <Button className="vote-now-button">
                    <span>Vote Now</span>
                </Button>
            </Buttons>
        </Container>
    )
};

export default Votes;