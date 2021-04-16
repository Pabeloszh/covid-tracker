import styled from "styled-components";

export const FilteredLi = styled.div`
  margin-top: 15px;
  height: calc(100% - 45px);
  overflow-y: scroll;
  scroll-behavior: smooth;

  h3 {
    font-family: "Open Sans", sans-serif;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div:first-child {
    margin-top: 0;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f1f1f3;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #cea434;
  }
`;
