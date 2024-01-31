import styled from "styled-components";
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Title = styled.h1`
    margin: 0;
    color: #464646;
    font-family: Lato;
    font-size: ${props => props.size}px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
`;

export { Container, Title };