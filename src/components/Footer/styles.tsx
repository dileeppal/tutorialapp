import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #101522;
    /* position: sticky; */
`;

export const FooterWrap = styled.div`
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 75rem;
    margin: 0 auto;  
`;

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 0;
    }
`;

export const FooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    text-align: left;
    width: 10rem;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: .625rem;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: .875rem;
    margin-bottom: 1rem;
`;

export const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: .875rem;
    cursor: pointer;

    &:hover {
        color: #15cdfc;
        transition: 0.3s east-out;
    }
`;

export const SocialMedia= styled.section`
    max-width: 75rem;
    width: 100%;
`;

export const SocialMediaWrap= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 75rem;
    margin: 2.5rem auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo= styled.a`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-weight: 600;
`;

export const WebsiteRights= styled.small`
    color: #fff;
    margin-bottom: 1rem;
`;

export const SocialIcons= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15rem;
`;

export const SocialIconLink= styled.a`
    color: #fff;
    font-size: 1.5rem;
`;
