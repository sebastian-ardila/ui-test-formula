import { Container, ThumbsImg } from "./thumb.styled";
import { getThumbsBackgroundColor } from "../../utils/thumbUtils";

const getSelected = (checked, decoration) => {
    if(decoration) return;
    return checked;
}
const Thumb = ({variant, onClick=()=>{}, checked=false, state, decoration=false, background=null}) => {

    return(
        <Container
            value={state}
            onClick={onClick}
            $checked={getSelected(checked)}
            className={variant} 
            $backgroundcolor={getThumbsBackgroundColor(background, state)} 
            $decoration={decoration}>
            <ThumbsImg className="thumb" $state={state}/>
        </Container>
    );

}

export default Thumb;