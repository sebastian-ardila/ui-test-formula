import styled from "styled-components";
import Thumb from "../Thumb";
import Votes from "../Votes";

// const getPositiveVotes = (positives, negatives) => (positives / (positives + negatives)) * 100;
// const getNegativeVotes = (positives, negatives) => (negatives / (positives + negatives)) * 100;

const shortText = (text, limit) => text.length > limit ? text.slice(0, limit) + '...' : text;

const getThumbState = (positives, negatives) => {
    if(positives > negatives) return "Up";
    if(positives < negatives) return "Down";
}

const Card = ({article, setArticles, variant}) => {
    return(
        <Container className={variant}>
            <Background className="picture" picture={article.picture}/>
            <ContentContainer className="container">
                <div className="content">
                    <Thumb 
                        state={getThumbState(article.votes.positive, article.votes.negative)}
                        decoration={true}
                    />
                    <Text>
                        <Name className="title">{variant === "card" ? shortText(article.name, 20): article.name}</Name>
                        <span className="description">{shortText(article.description, 70)}</span>
                    </Text>
                    {/* 
                    {article.votes.positive}
                    {article.votes.negative} 
                    */}
                </div>
                <Votes variant={variant} lastUpdated={article.lastUpdated} category={article.category}/>
            </ContentContainer>
        </Container>
    );
};

export default Card;

const ContentContainer = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

const Name = styled.h1`

    margin: 0;
    color: #FFF;
    font-family: Lato;
    text-align: left;
    font-style: normal;
    font-weight: 400;
`;


const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 1rem;
`;

const Background = styled.div`
    background: url("${(props) => props.picture}") lightgray 50% / cover no-repeat;
    
`;

const Container = styled.article`

    &.card{
        position: relative;
        height: 300px;
        min-width: 300px;

        .picture{
            min-width: 300px;
            height: 100%;
        }

        .container{}
        
        .content{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .title{
            font-size: 30px;
            height: 74px;
            display: flex;
            line-height: normal;
            align-items: self-end;
        }

        .description{
            color: #FFF;
            font-family: Lato;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-align: left;
        }
    }

    &.mobile-list{
        position: relative;
        width: 100%;
        height: 138px;
        background: linear-gradient(to right, rgba(0,0,0,0), #888888, #666666, #33333399);

        .picture{
            width: 216px;
            height: 100%;
        }

        .container{
            justify-content: space-between;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, #888 32.79%, #666 50%, rgba(51, 51, 51, 0.60) 71.88%);
        }

        .content{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .title{
            line-height: normal;
            font-size: 28px;   
        }

        .description{
            color: #FFF;
            font-family: Lato;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-align: left;
        }
        
    }

    &.desktop-list{
        position: relative;
        width: 100%;
        height: 178px;
        background: linear-gradient(to right, rgba(0,0,0,0), #888888, #666666, #33333399);


        .picture{
            width: 267px;
            height: 100%;
        }

        .container{
            justify-content: space-between;
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, #888 32.79%, #666 50%, rgba(51, 51, 51, 0.60) 71.88%);
        }

        .content{
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .title{
            line-height: 63px; /* 175% */
            font-size: 36px;
        }

        .description{
            color: #FFF;
            font-family: Lato;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-align: left;
        }
    }

    
`