import styled from 'styled-components'
import { MdDeleteForever } from "react-icons/md";


export const NoticesWrapper = styled.div`
    background-color: #fff;
    box-shadow: 0px 2px 80px rgba(66,66,66,0.08);
    border-radius: .625rem;
    padding: 1rem;
    width: 100%;
    display: flex;
    margin-bottom: .5rem;
`;

export const NoticeLeftWrap = styled.div`
    display: flex;
`;

export const SenderProfileImge = styled.img`
    min-width: 3.75rem;
    width: 3.75rem;
    height: 3.75rem;
    border-radius: .75rem;
    object-fit: cover;
    margin-right: 1rem;
    @media (max-width: 991px) {
        min-width: 2.5rem;
        width: 2.5rem;
        height: 2.5rem;
    }
`;

export const NoticeMessage = styled.span`
    font-size: .875rem;
    font-weight: 500;
    align-self: center;
    @media (max-width: 991px) {
        font-size: .75rem;
    }
`;
export const NoticeDate = styled.span`
    font-size: .75rem;
    display: block;
    color: #bfbfbf;
    @media (max-width: 991px) {
        font-size: .625rem;
    }
`;

export const NoticeTopRightWrap = styled.div`
    margin-left: auto;
    padding-left: 1rem;
    align-self: center;
`;

export const DeleteIcon = styled(MdDeleteForever)`
    font-size: 2rem;
    cursor: pointer;
    display: block;
    background-color: #ff6262;
    fill: #FFF;
    padding: .25rem;
    border-radius: 10rem;
`;

export const NoticecRightSide = styled.div`
    flex: 3;
    padding: 1.25rem;
    display: flex;
    justify-content: center;
`;

export const MediaContainer = styled.div`
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    margin: 30px 0;
    padding-bottom: 1.25rem;
`;

export const NoticesH1 = styled.h1`
    font-size: 2.5rem;
    color: #655e5e;
    margin-bottom: 34px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;