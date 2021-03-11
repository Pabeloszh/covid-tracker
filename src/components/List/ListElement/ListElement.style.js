import styled from "styled-components";

export const ListElContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12.5px 0;
  padding: 5px 0px 5px 10px;
  background-color: ${(props) => (props.selected ? "red" : "#fff")};
  .desc {
    h3 {
      width: 180px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    h3,
    p {
      color: ${(props) => (props.selected ? "#fff" : "#000")};
    }
  }
  .icon {
    margin: -5px 0;
    padding: 15px 10px;
    height: 50px;
    background-color: #666;
    i {
      color: #fff;
    }
  }
  #id {
    background-color: #000;
  }
`;
