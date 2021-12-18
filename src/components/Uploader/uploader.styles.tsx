import styled from "styled-components";


export const Text = styled.span`
    margin-top: 1rem;
    text-align: center;
`;

export const TextHighlighted = styled.span`
    font-weight: 600;
`;

export const Container = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 1.875rem; */
    border-width: .125rem;
    border-radius: .125rem;
    border-color: #E6E6E6;
    border-style: dashed;
    background-color: #ffffff;
    color: #bdbdbd;
    outline: none;
    transition: border 0.24s ease-in-out;
    cursor: pointer;
`;

export const ThumbsContainer = styled.aside`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1rem;
`;

export const Thumb = styled.div`
    display: inline-flex;
    border-radius: .125rem;
    margin-bottom: .5rem;
    margin-right: .5rem;
    width: 6.25rem;
    height: 6.25rem;
    padding: .25rem;
    box-sizing: border-box;
`;

export const ThumbInner = styled.div`
    display: flex;
    min-width: 0;
    overflow: hidden;
`;

export const Image = styled.img`
    /* display: flex;
    width: auto;
    height: 60%; */
`;
