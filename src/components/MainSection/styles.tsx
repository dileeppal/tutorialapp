import { Autorenew } from "@material-ui/icons";
import styled from "styled-components";

export const MainContainer = styled.div`
    padding-top: 8rem;
    padding-bottom: 8rem;
    border-bottom: 1px solid rgba(0,0,0,.05);
    @media (max-width: 991px) {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
`;

export const MainWrapper = styled.div`
    max-width: 75rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
`;

export const MainRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: -1rem;
    margin-right: -1rem;
    @media (max-width: 991px) {
        flex-direction: column-reverse;
    }
`;

export const Column1 = styled.div`
    width: 40%;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (max-width: 991px) {
        width: 100%;
    }
`;

export const Column2 = styled.div`
    width: 60%;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (max-width: 991px) {
        width: 100%;
    }
`;

export const TextWrapper = styled.div`
    @media (max-width: 991px) {
        margin-top: 3rem;
    }
`;

export const TopLine = styled.div`
    color: #7755E2;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: .1rem;
    font-weight: 600;
`;

export const Heading = styled.h2`
    font-size: 2.75rem;
    line-height: 1.2;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    @media (min-width: 992px) {
        max-width: 20rem;
    }
    @media (max-width: 991px) {
        font-size: 2.25rem;
    }
`;

export const Subtitle = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
`;

export const BtnWrap = styled.div`
    
`;

export const ImgWrap = styled.div`
    max-width: 80%;
    margin-left: auto;
    @media (max-width: 991px) {
        max-width: 100%;
    }
`;

export const Img = styled.img`
    width: 100%;
    display: block;
`;