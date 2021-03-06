import styled from "styled-components";

export const ListContainer = styled.div`
    width:300px;
    height:calc(100vh - 100px);
    background-color:#0E1F33;
    padding: 15px 25px;
    border-right:3px solid #CEA434;
    .search{
        width:100%;
        height:35px;
        positon relative;
        i{
            margin:8px 0 0 5px;
            position:absolute;
            color:#000;
        }
        input{
            height:100%;
            border-radius: 5px;
            background-color:#f5f3f4;
            color:#000;
            border:none;
            width:250px;
            padding: 5px 8px 5px 25px;
            outline:none;
        }
    }
    @media screen and (max-width: 768px){
        width:100%;
        border-right:none;
        .search{
            input{
                width:100%;
            }
        }
    }
`;
