import styled from "styled-components";

export const SummaryContainer = styled.div`
    height:100px;
    width:100%;
    position:relative;
    background-color:#0E1F33;
    border-bottom: 3px solid #CEA434;
    div{
        position absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        width:100%;
        h1{
            display:flex;
            justify-content:center;
            color:#F1F1F3;
            font-family: 'Open Sans', sans-serif;
        }
        h1:last-child{
            display:none;
        }
    }
    @media screen and (max-width: 768px){
        div{
            h1:first-child{
                display:none;
            }
            h1:last-child{
                display:block;
                font-size:28px;
            }
        }
    }
`;
