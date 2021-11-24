import styled from "styled-components"

import { MdExpandMore } from "react-icons/md";


export const CommentCard = styled.div`
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgb(0 0 0 / 20%);
    border-radius: .5rem;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

export const CommentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: .75rem;
  margin-bottom: .75rem;
  border-bottom: 1px solid #e7e7e7;
  &:nth-last-of-type(2) {
    padding-bottom: 0;
    margin-bottom: 1.5rem;
    border-bottom: none;
  }
`;

export const CommentLeftWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const UserProfileImge = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentText = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin: 0 10px;
`;

export const CommentDate = styled.span`
  font-size: 10px;
  color: #253ad8;
`;

export const CommentTopRightWrap = styled.div``;

export const ExpandIcon = styled(MdExpandMore)`
  font-size: 20px;
`;

export const CommentHorizontalRule = styled.hr`
  width: 100%;
  height: 1px;
  border-radius: 1rem;
  border: none;
  background-color: rgb(156 151 151);
  margin: 1.5rem auto;
`;