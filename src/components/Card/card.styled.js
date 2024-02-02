import styled from "styled-components";
export const Details = styled.div`
    display: flex;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`;

export const Name = styled.h1`
    margin: 0;
    color: #FFF;
    font-family: Lato;
    text-align: left;
    font-style: normal;
    font-weight: 400;
    width: 100%;
    display: block;
`;

export const Description = styled.span`
    color: #FFF;
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
`;


export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    width: 75%;
    padding: 0.5rem;
    box-sizing: border-box;
`;

export const Background = styled.div`
    background: url("${(props) => props.$picture}") lightgray 50% / cover no-repeat;
    
`;

export const Container = styled.article`
    &.card{
        position: relative;
        height: 300px;
        min-width: 300px;

        .picture{
            min-width: 300px;
            height: 100%;
        }


        .details{
            flex-direction: column;
            justify-content: center;
            height: 100%;
        }
        
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
            height: 40px;
            overflow: hidden;
        }

        .description{
            font-size: 15px;
        }
    }

    &.mobile-list{
        position: relative;
        width: 100%;
        height: 14rem;
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
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            grid-template-rows: 1fr; 
            gap: 0px 0px; 
            grid-template-areas: ". ."; 
        }

        .title{
            line-height: normal;
            font-size: 28px;
            height: 38px;
            overflow: hidden;
            
        }

        .description{
            font-size: 14px;
            height: 70px;
            overflow: hidden;
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
            display: grid; 
            grid-template-columns: 1fr 2fr; 
            grid-template-rows: 1fr; 
            gap: 0px 0px; 
            grid-template-areas: ". ."; 
        }

        .title{
            font-size: 36px;
            height: 46px;
            overflow: hidden;
        }

        .description{
            font-size: 18px;
            height: 70px;
            overflow: hidden;
        }
    }
`;