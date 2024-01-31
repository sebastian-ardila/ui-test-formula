import styled from "styled-components";

const ViewPicker = styled.div`
    width: 173px;
    height: 36px;
    border: 2px solid #333;
    flex-shrink: 0;
    position: relative;
    cursor: pointer;
`;

const ViewPickerHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span{
        color: #333;
        width: 122.366px;
        text-align: center;
        font-family: Lato;
        font-size: 13.5px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
    }

    .open {
        transform: rotate(180deg);
    }

`;

const ViewPickerList = styled.ul`
    position: absolute;
    top: 38px;
    left: -2px;
    display: block;
    
    max-height: 150px;
    overflow-y: auto;
    z-index: 1;

    li{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13.5px;
        height: 36px;
        width: 173px;
        border: 2px solid #000;
        background: #FFF;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border-top: none;
        border-radius: 0 0 4px 4px;
        cursor: pointer;
        border
    }

    li:hover{
        background-color: #f0f0f0;
    }
`;

export { ViewPicker, ViewPickerHeader, ViewPickerList };