import styled from "styled-components";

const Thumb = ({state, decoration=false}) => {
    return(
        <Container state={state} decoration={decoration}>
            <ThumbsImg state={state}/>
        </Container>
        
    );

}

const Container = styled.div`
    cursor: ${(props) => props.decoration ? "auto": "pointer"};
    pointer-events: ${(props) => props.decoration ? "none": "auto"};
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: ${(props)=> props.state === "Up" ? "#FBBD4A": "#3CBBB4CC"}
`;

const ThumbsImg = styled.svg`
    background-image: url(${(props) => (props.state === "Up" ? "./assets/img/thumbs-up.svg" : "./assets/img/thumbs-down.svg")});
    width: 16px;
    height: 16px;
    fill: blue;
`;

export default Thumb;