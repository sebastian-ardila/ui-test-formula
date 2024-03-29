import styled from "styled-components";

export const Button = styled.button`
    border: 1px solid #FFF;
    background: ${(props) => props.$enabled ? "rgba(48, 48, 48, 0.60)" : "rgba(0, 0, 0, 0.60)"};
    cursor: ${(props) => props.$enabled ? "pointer": "not-allowed"};
    pointer-events: ${(props) => props.$enabled ? "auto": "none"};

    span{
        color: #FFF;
        text-align: center;
        font-family: Lato;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const Buttons = styled.div`
    display: flex;
    width: 100%;
    gap: 12px;
    justify-content: end;
    align-items: center;
`;

export const Description = styled.span`
    color: #FFF;
    text-align: right;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    white-space: nowrap;
`;


export const Container = styled.div`
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

        .vote-again{
            width: 115px;
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

        .vote-again{
            width: 115px;
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

        .vote-again{
            width: 149px;
            height: 45px;
            flex-shrink: 0;

            .span{
                font-size: 15px;
            }
        }
    }
`;