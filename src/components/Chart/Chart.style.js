import styled from "styled-components";
import {device} from "../../utils/breakpoints";

export const ChartContainer = styled.div`
    width:100%;
    height:500px;
    padding: 25px 60px;
    background-color:#000;
    color:#fff;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-family: 'Roboto', sans-serif;
    h2{
        text-align:center;
        margin-bottom:15px;
        font-family: 'Open Sans', sans-serif;
    }
    @media screen and (max-width: 768px){
        padding: 20px 25px;
    }
`;