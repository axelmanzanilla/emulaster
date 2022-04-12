import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
`;

export const H2 = styled.h2`
    text-align: center;
    margin: 0 0 20px 0;
`;

export const DivScore = styled.div`
    display: flex;
`;

export const Label = styled.label`
    font-size: 20px;
`;

export const Score = styled.input`
    width: 50px;
    margin: 0 0 0 8px;
`;

export const CardsField = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Cards = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
`;

export const Card = styled.div`
    z-index: ${props => props.zindex};
    left: ${props => props.left};
    position: absolute;
    width: 100px;
`;

export const Controls = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px 0 0 0;
`;