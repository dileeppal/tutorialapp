import styled from "styled-components";

export const BooksH1 = styled.h1`
    font-size: 2.25rem;
    color: #000;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
        font-size: 1.75rem;
    }
`;

export const BooksWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -.5rem;
    > div {
        width: calc(25% - 1rem);
        margin: .5rem;
        @media (max-width: 1440px) {
            width: calc(50% - 1rem);
        }
        @media (max-width: 991px) {
            width: calc(100% - 1rem);
        }
    }
`;

export const BooksCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 440px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const BookTitle = styled.h2`
    font-size: 1.125rem;
    margin-bottom: 1rem;
`;

export const BookImage = styled.img`
    height: 10rem;
    width: 10rem;
    margin-bottom: 1rem;
`;

export const BookDescription = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 1rem;
`;

export const BookBottom = styled.div`
    margin-top: 0;
    text-align: center;
`;
export const BookAuthor = styled.span`
    font-size: .875rem;
    font-weight: 600;
    color: #125c55;
    display: block;
    margin-bottom: 1rem;
`;

export const BuyButton = styled.button`
    background-color: #256ce1;
    color: #fff;
    font-size: .875rem;
    border-radius: .25rem;
    padding: .375rem 1.5rem;
    border: none;
    cursor: pointer;
`;