import styled from "styled-components";

export const ListContainer = styled.div`
    width:300px;
    height:calc(100vh - 100px);
    background-color:#0E1F33;
    padding: 15px 25px;
    border-right:3px solid #CEA434;
    .search{
        width:100%;
        positon relative;
        i{
            margin:6px 0 0 5px;
            position:absolute;
            color:#000;
        }
        input{
            background-color:#f5f3f4;
            color:#a4161a;
            border:none;
            width:250px;
            padding: 5px 8px 5px 25px;
            outline:none;
        }
    }
    @media screen and (max-width: 768px){
        width:100%;
        .search{
            input{
                width:100%;
            }
        }
    }
`;