import styled from "styled-components";
import { Link } from "react-router-dom";

export const Picture = styled(Link)`
    display: flex;
    width: 200px;
    height: 100px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 28px;
    color: white;
    text-decoration: none;
    border-radius: 16px;
    background: url('https://www.seekpng.com/png/detail/171-1714015_resistor.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &:hover{
        background: url('https://i.ibb.co/ZWmbGbj/etmfdr.gif');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
