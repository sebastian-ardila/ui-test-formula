import { THUMBS_DOWN, THUMBS_UP, UP } from "../../constants/thumbConstants";
import styled from "styled-components";

export const Container = styled.button`
    cursor: ${(props) => props.$decoration ? "auto": "pointer"};
    pointer-events: ${(props) => props.$decoration ? "none": "auto"};
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 30px;
    min-height: 30px;
    border: 2px ${(props) => props.$checked ? "solid" : "none"} white;
    background: ${(props)=> props.$backgroundcolor};

    &.card{
        width: 30px;
        height: 30px;

        .thumb{
            width: 15px;
            height: 15px;
        }
    }

    &.mobile-list{
        width: 30px;
        height: 30px;

        .thumb{
            width: 15px;
            height: 15px;
        }
    }

    &.desktop-list{
        width: 45px;
        height: 45px;

        .thumb{
            width: 22.5px;
            height: 22.5px;
        }
    }
`;

export const ThumbsImg = styled.svg`
    background-image: url(${(props) => (props.$state === UP ? THUMBS_UP : THUMBS_DOWN)});
    background-size: cover;
    background-repeat: no-repeat;
    pointer-events: none;
`;