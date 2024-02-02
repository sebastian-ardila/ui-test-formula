import styled from "styled-components";

export const Container = styled.div`

    &.carousel {
        min-width: 300px;
        display: flex;
        overflow: auto;
        gap: 12px;
    }

    &.grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 18px;
    }

    &.list {
        display: flex;
        flex-direction: column;
        gap: 18px;
    }

`;