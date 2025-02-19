import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import { AiOutlineFolderView } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";


export const ForumWrapper = styled.div`
    padding: 1.875rem;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: .625rem;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    height: 100%;
    @media (max-width: 991px) {
        padding: 1.25rem;
    }
`;

export const ViewMore = styled.button`
    background-color: transparent;
    color: #7755E2;
    font-size: .875rem;
    border-radius: .25rem;
    padding: 0;
    border: none;
    cursor: pointer;
    line-height: 1;
    text-transform: uppercase;
    font-weight: 600;
`;

export const PostDropdown = styled.div`
    position: relative;
    .DropDownIcon {
        cursor: pointer;
        svg {
            display: block;
        }
    }
`;

export const LikeGroup = styled.div`
    display: flex;
    align-items: center;
`;

export const ForumContainer = styled.div`
    width: 100%;
    border-radius: .625rem;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    margin: 30px 0;
`;

export const PostTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const PostLeftWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const PostProfileImge = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
`;

export const UserName = styled.span`
    font-size: 1rem;
    font-weight: 600;
    display: block;
    margin-bottom: .25rem;
    @media (max-width: 991px) {
        font-size: .875rem;
    }
`;

export const PostDate = styled.span`
    font-size: 0.75rem;
    color: #b5b5b5;
    display: block;
    font-weight: 400;
`;

export const PostTopRightWrap = styled.div`

`;

export const ExpandIcon = styled(MdExpandMore)`
    cursor: pointer;
    display: block;
`;

export const DropDownIcon = styled(MdExpandMore)`
    cursor: pointer;
    display: block;
`;

export const PostCenterWrap = styled.div`
    margin-bottom: 1rem;
    position: relative;
    flex: 1 0 0%;
    display: flex;
    flex-direction: column;
`;

export const PostTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const PostText = styled.span`
    display: block;
    margin-bottom: 1rem;
    margin-top: auto;
`;

export const PostMediaImage = styled.img`
    margin-top: 1rem;
    width: 100%;
    max-height: 31.25rem;
    object-fit: contain;
    display: block;
`;

export const PostMediaVideo = styled.video`
    margin-top: 1rem;
    width: 100%;
    max-height: 31.25rem;
    object-fit: contain;
    display: block;
`;

export const PostMediaVideoIF = styled.iframe`
    margin-top: 1rem;
    width: 100%;
    max-height: 12rem;
    object-fit: contain;
    border: none;
    outline: none;
    display: block;
    &:focus {
        outline: none;
    }
`;

export const PostBottomWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`;

export const BottomLeftWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const LikeIcon = styled(FcLike)`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .25rem;
    cursor: pointer;
`;

export const ViewIcon = styled(AiOutlineFolderView)`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .25rem;
    cursor: pointer;
`;

export const LikeCounter = styled.span`
    margin-right: 1rem;
`;

export const ViewCounter = styled.span`
  
`;

export const BottomRightWrap = styled.div`
    display: flex;
    align-items: center;
`;

export const CommentIcon = styled(FcComments)`
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    margin-right: .25rem;
    path {
        fill: #919191;
    }

`;

export const CommentText = styled.span`
  
`;
