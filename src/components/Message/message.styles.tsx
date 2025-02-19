import styled from 'styled-components'

export const MessageWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    position: relative;
    padding-top: 1rem;
`;

export const OwnerMessageWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 1rem;
    padding-top: 1rem;
    position: relative;
    > div {
        flex-direction: row-reverse;
        left: auto;
        right: 4rem;
        img {
            margin-left: 1rem;
            margin-right: 0;
        }
    }
`;

export const OwnerMessageText = styled.p`
    padding: .75rem 1rem;
    border-radius: .75rem;
    background-color: #7755E2;
    color: #fff;
    max-width: 25rem;
    font-size: .875rem;
`;

export const MessageTop = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const MessageImg = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: .75rem;
    object-fit: cover;
    margin-right: 1rem;
`;

export const MessageText = styled.p`
    padding: .75rem 1rem;
    border-radius: .75rem;
    background-color: #F1F1F1;
    color: #000000;
    max-width: 25rem;
    font-size: .875rem;
`;

export const MessageBottom = styled.div`
    font-size: .75rem;
    position: absolute;
    top: -.25rem;
    left: 4rem;
`;

export const MessageOwner = styled.div`
    align-items: flex-end;
`;