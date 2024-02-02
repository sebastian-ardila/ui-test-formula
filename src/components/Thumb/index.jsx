import { Container, ThumbsImg } from "./thumb.styled";
import { getThumbsBackgroundColor } from "../../utils/thumbUtils";

const Thumb = ({variant, state, decoration=false, background=null}) => {

    return(
        <Container className={variant} $backgroundcolor={getThumbsBackgroundColor(background, state)} $decoration={decoration}>
            <ThumbsImg className="thumb" $state={state}/>
        </Container>
    );

}

export default Thumb;