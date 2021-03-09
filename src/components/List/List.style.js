import styled from "styled-components";

export const ListContainer = styled.div`
    width:300px;
    height:800px;
    background-color:#000;
    padding: 15px 25px;
    .search{
        width:100%;
        positon relative;
        i{
            margin:6px 0 0 5px;
            position:absolute;
            color:#000;
        }
        input{
            width:250px;
            padding: 5px 8px 5px 25px;
            outline:none;
        }
    }
`;