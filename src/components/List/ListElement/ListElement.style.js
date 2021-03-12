import styled from "styled-components";

export const ListElContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12.5px 0;
  padding: 5px 0px 5px 10px;
  background-color: ${(props) => (props.selected ? "#CEA434" : "#F1F1F3")};
  .desc {
    h3 {
      width: 180px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size:16px;
      font-family: 'Open Sans', sans-serif;

    }
    h3,
    p {
      color: ${(props) => (props.selected ? "#F1F1F3" : "#000")};
    }
    p{
      width:190px;
      font-family: 'Roboto', sans-serif;
      font-size:14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .icon {
    margin: -5px 0;
    padding: 15px 10px;
    height: 50px;
    background-color: #CEA434;
    i {
      color: #fff;
    }
  }
  #id {
    background-color: #000;
  }
`;
