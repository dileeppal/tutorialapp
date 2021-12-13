import styled from 'styled-components'

export const ConversationWrap = styled.div`
    display: flex;
    align-items: center;
    padding: .75rem;
    border-radius: .75rem;
    cursor: pointer;
    &:hover {
        background-color: rgba(97, 94, 240, 0.06);
    }
`;
export const ConversationImg = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: .75rem;
    object-fit: cover;
    margin-right: 1rem;
`;
export const ConversationUserName = styled.span`
    font-weight: 500;
`;