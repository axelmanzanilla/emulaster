import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ResistorContainer = styled.div`
    position: relative;
    display: flex;
    width: max-content;
    height: max-content;
    justify-content: center;
    align-items: center;
`;

export const FirstBand = styled.div`
    top: 0px;
    left: 60px;
    position: absolute;
    width: 6px;
    height: 50px;
    background-color: ${props => props.color};
    border-radius: 0% 100% 100% 0% / 0% 5% 5% 0%;
`;

export const Band = styled.div`
    top: 10px;
    left: ${props => props.left}px;
    position: absolute;
    width: 6px;
    height: 30px;
    background-color: ${props => props.color};
`;

export const Wire = styled.div`
    width: 32px;
    height: 8px;
    background-color: gray;
`;

export const LeftResistor = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgb(255, 180, 95);
    border-radius: 40% 80% 80% 40%;
    margin-right: -5px;
`;

export const CenterResistor = styled.div`
    width: 75px;
    height: 30px;
    background-color: rgb(255, 180, 95);
`;

export const RightResistor = styled.div`
    width: 50px;
    height: 50px;
    background-color: rgb(255, 180, 95);
    border-radius: 80% 40% 40% 80%;
    margin-left: -5px;
`;

export const Correct = styled.div`
    color: green;
`;

export const Incorrect = styled.div`
    color: red;
`;
