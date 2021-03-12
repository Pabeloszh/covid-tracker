import styled from "styled-components";

export const MapContainer = styled.div`
    width:calc(100% - 300px);
    height:calc(100vh - 100px);
    position: relative;
    background-color:#0E1F33;
    svg{
        width:100%;
        height:100%;
        path{
            outline:none;
        }
    }
    .buttons{
        position: absolute;
        bottom: 4%;
        left:50%;
        transform:translate(-50%,-50%);
        button{
            background-color:#CEA434;
            border: 1px solid #CEA434;
            border-radius:50%;
            padding:10px 11px;
            outline:none;
            i{
                color:#F1F1F3;
            }
        }
        button:first-child{
            margin-right:15px;
        }
        button:last-child{
            margin-left:15px;
        }
    }
    @media screen and (max-width: 768px){
        display:none;   
    }
`;
