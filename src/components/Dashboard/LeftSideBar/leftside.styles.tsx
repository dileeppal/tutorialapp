import styled from "styled-components";

export const LeftSideContainer = styled.div`
  flex: 3;
  height: calc(100vh - 100px);
  overflow-y: scroll;
  position: sticky;
  top: 50px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  }
`;

export const LeftSideBarWrapper = styled.div`
  padding: 20px;
`;
export const LeftSideBarList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const LeftSideBarListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  font-size: 17px;
  cursor: pointer;
  &.active {
    color: #15cdfc;
    /* &:hover {
      color: #fff;
    } */
  }

  &:hover {
    color: #15cdfc;
  }
`;
export const LeftSideBarIcon = styled.div`
  margin-right: 15px;
`;
export const LeftSideBarListItemText = styled.span``;
