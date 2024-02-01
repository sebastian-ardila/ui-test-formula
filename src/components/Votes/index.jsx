import styled from "styled-components";
import Thumb from "../Thumb";

const getTimeDescriptionFromLastUpdated = (lastUpdated) => {
    const lastDate = new Date(lastUpdated);
    const currentDate = new Date();

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisecondsPerMonth = millisecondsPerDay * 30.44;
    const millisecondsPerYear = millisecondsPerDay * 365.25;

    const difference = currentDate - lastDate;

    if (difference >= millisecondsPerYear) {
        const years = Math.floor(difference / millisecondsPerYear);
        return `${years} ${years === 1 ? 'year' : 'years'}`;
    } else if (difference >= millisecondsPerMonth) {
        const months = Math.floor(difference / millisecondsPerMonth);
        return `${months} ${months === 1 ? 'month' : 'months'}`;
    } else {
        const days = Math.floor(difference / millisecondsPerDay);
        return `${days} ${days === 1 ? 'day' : 'days'}`;
  }
};

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
                <Thumb state="Up"/>
                <Thumb state="Down"/>
                <Button className="vote-now-button">
                    <span>Vote Now</span>
                </Button>
            </Buttons>
        </Container>
    )
};

const Button = styled.button`
    border: 1px solid #FFF;
    background: rgba(0, 0, 0, 0.60);
    cursor: pointer;

    span{
        color: #FFF;
        text-align: center;
        font-family: Lato;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

const Buttons = styled.div`
    display: flex;
    width: 100%;
    gap: 12px;
    justify-content: end;
    align-items: center;
`;

const Description = styled.span`
    color: #FFF;
    text-align: right;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;


const Container = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
    padding: 12px;
    justify-content: flex-start;
    align-items: end;

    &.votes-card{
        .vote-description {
            font-size: 12px;
        }

        .vote-now-button{
            width: 107px;
            height: 38px;
            flex-shrink: 0;

            .span{
                font-size: 15px;
            }

        }

    }

    &.votes-mobile-list{
        .vote-description {
            font-size: 12px;
        }

        .vote-now-button{
            width: 107px;
            height: 38px;
            flex-shrink: 0;

            .span{
                font-size: 15px;
            }
        }
    }

    &.votes-desktop-list{
        .vote-description {
            font-size: 15px;
        }

        .vote-now-button{
            width: 135px;
            height: 45px;
            flex-shrink: 0;

            .span{
                font-size: 18px;
            }
        }
    }

    
`;

export default Votes;