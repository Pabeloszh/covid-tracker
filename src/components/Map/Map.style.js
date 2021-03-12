import styled from "styled-components";

export const MapContainer = styled.div`
    width:calc(100% - 300px);
    height:calc(100vh - 100px);
    position: relative;
    svg{
        width:100%;
        height:100%;
        path{
            outline:none;
        }
    }
    .buttons{
        position: absolute;
        top: 8%;
        left:50%;
        transform:translate(-50%,-50%);
        button{
            border: 1px solid #000;
            border-radius:50%;
            padding:5px 6px;
            outline:none;
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
