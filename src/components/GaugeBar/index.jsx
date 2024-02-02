import Thumb from "../Thumb";
import { Container, Positives, Negatives, Percentage } from "./gaugeBar.styled";
import { DOWN, UP } from "../../constants/thumbConstants";
import { getPositiveVotes, getNegativeVotes } from "../../utils/voteUtils";

const GaugeBar = ({variant, positives, negatives}) => {

    const positivePercentage = getPositiveVotes(positives, negatives);
    const negativePercentage = getNegativeVotes(positives, negatives);

    return(
        <Container className={`${variant} bar`}>
            <Positives $percentage={positivePercentage}>
                <Thumb variant={variant} state={UP} decoration background="transparent"/>
                <Percentage className="percentage">{`${Number(positivePercentage.toFixed(1))} %`}</Percentage>
            </Positives>
            <Negatives $percentage={negativePercentage}>
                <Percentage className="percentage">{`${Number(negativePercentage.toFixed(1))} %`}</Percentage>
                <Thumb variant={variant} state={DOWN} decoration background="transparent"/>
            </Negatives>
        </Container>
    )
};
export default GaugeBar;