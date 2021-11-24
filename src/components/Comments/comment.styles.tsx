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
  
`;

export const CommentLeftWrap = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const UserProfileImge = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
`;

export const CommentText = styled.span`
    font-size: .875rem;
    font-weight: 500;
    flex: 1 0 0%;
    align-self: center;
`;

export const CommentDate = styled.span`
    font-size: .75rem;
    color: #b5b5b5;
    display: block;
`;

export const CommentTopRightWrap = styled.div`
  
`;

export const ExpandIcon = styled(MdExpandMore)`
    font-size: 1.25rem;
    cursor: pointer;
`;

export const CommentHorizontalRule = styled.hr`
    width: 100%;
    height: 1px;
    border-radius: 1rem;
    border: none;
    background-color: rgb(156 151 151);
    margin: 1.5rem auto;
`;