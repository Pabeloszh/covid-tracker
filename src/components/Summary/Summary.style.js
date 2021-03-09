import styled from "styled-components";

export const SummaryContainer = styled.div`
    height:100px;
    width:100%;
    position:relative;
    background-color:#000;
    div{
        position absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        h1{
            text-align:center;
            color:#fff;
        }
    }
`;
