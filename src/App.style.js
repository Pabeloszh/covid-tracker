import styled from "styled-components";
import {device} from "./utils/breakpoints";

export const AppContainer = styled.div`
    .desktop{
        display:flex;
    }
    @media screen and (max-width: 768px){
        desktop{
            div{
                width:100%;
            }
        }
    }
`;