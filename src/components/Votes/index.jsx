import { Container, Description, Buttons, Button } from "./votes.styled";
import Thumb from "../Thumb";
import { DOWN, UP } from "../../constants/thumbConstants";
import { getTimeDescriptionFromLastUpdated } from "../../utils/dateUtils";
import { useState } from "react";

const Votes = ({variant, setArticles, lastUpdated, category, name}) => {
    const [isVoted, setIsVoted] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleThumbChange = (event) =>{
        event.stopPropagation();
        setSelectedOption(event.target.value);
    }

    const handleVotes = (e, name) => {
        e.stopPropagation()
        setArticles(prev =>
            prev.map(person =>
                person.name === name
                ? { ...person, votes: {
                    positive: person.votes.positive + Number(selectedOption === UP),
                    negative: person.votes.negative + Number(selectedOption === DOWN)
                } }
                : person
            )
        );
        setIsVoted(true);
    }

    const handleVoteAgain = () => {
        setIsVoted(false);
    }


    return(
        <Container className={`votes-${variant}`}>
            <Description 
                className="vote-description">
                    {isVoted ? "Thank you for your vote!" : `${getTimeDescriptionFromLastUpdated(lastUpdated)} in ${category}`}
            </Description>
            <Buttons>   
                {
                    !isVoted && (
                        <>
                            <Thumb 
                                checked={selectedOption === UP} 
                                variant={variant} 
                                state={UP}
                                onClick={handleThumbChange}
                            />
                            <Thumb 
                                checked={selectedOption === DOWN} 
                                variant={variant} 
                                state={DOWN}
                                onClick={handleThumbChange}
                            />
                            <Button $enabled={selectedOption} onClick={(e)=>handleVotes(e, name)} className="vote-now-button">
                                <span>Vote Now</span>
                            </Button>
                        </>
                    )
                }
                {
                    isVoted && (
                        <Button $enabled={true} onClick={()=>handleVoteAgain()} className="vote-again">
                            <span>Vote Again</span>
                        </Button>
                    )
                }
                
            </Buttons>
        </Container>
    )
};

export default Votes;