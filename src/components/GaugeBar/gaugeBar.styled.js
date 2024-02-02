import styled from "styled-components";

export const Percentage = styled.span`
    color: #FFF;
    font-family: Lato;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    white-space: nowrap;
    z-index: 1;
`;

export const Positives = styled.div`
    width: ${(props) => props.$percentage ?? "50"}%;
    height: 100%;
    background: rgba(60, 187, 180, 0.60);
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: start;
    padding: 1rem;
    box-sizing: border-box;
`;

export const Negatives = styled.div`
    width: ${(props) => props.$percentage ?? "50"}%;
    height: 100%;
    background: rgba(249, 173, 29, 0.60);
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: end;
    padding: 1rem;
    box-sizing: border-box;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;

    &.card{
        &.bar{
            height: 36px;
        }

        .percentage{
            font-size: 18px;
        }
    }

    &.mobile-list{
        &.bar{
            height: 36px;
        }

        .percentage{
            font-size: 18px;
        }
    }

    &.desktop-list{
        &.bar{
            height: 54px;
        }

        .percentage{
            font-size: 27px;
        }

    }
`;
