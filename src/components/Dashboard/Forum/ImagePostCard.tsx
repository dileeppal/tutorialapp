import React, { useState } from "react";
import {
    PostTop,
    PostLeftWrap,
    PostProfileImge,
    UserName,
    PostDate,
    PostTopRightWrap,
    ExpandIcon,
    PostCenterWrap,
    PostText,
    PostTitle,
    PostMediaImage,
    PostBottomWrapper,
    BottomLeftWrap,
    LikeIcon,
    LikeCounter,
    BottomRightWrap,
    CommentIcon,
    CommentText,
    ForumWrapper,
    PostDropdown,
    LikeGroup,
    ViewMore
    // DropAndCenterWrap,
} from "./forum.styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { Comment } from "../../Comments";
import Dropdown from "../../Dropdown";
import { DropDownIcon } from "../../../../public/assets/icons/DropDownIcon";

interface ForumPost {
    username: string;
    image: string;
    date: any;
    title: string;
    body?: string;
    likeCount: number;
    commentCount: number;
}

const ImagePostCard = ({
    username,
    image,
    date,
    title,
    body,
    likeCount = 0,
    commentCount = 0,
}: ForumPost) => {
    const [showComments, setShowComments] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <>
            <ForumWrapper>
                <PostTop>
                    <PostLeftWrap>
                        <PostProfileImge src={image} alt="user profile image" />
                        <UserName>{username}
                            <PostDate>{dayjs(date).fromNow()}</PostDate></UserName>
                    </PostLeftWrap>

                    <PostTopRightWrap>
                        <PostDropdown>
                            <span className="DropDownIcon" onClick={() => setShowDropdown(!showDropdown)}><DropDownIcon /></span>
                            {/* <ExpandIcon onClick={() => setShowDropdown(!showDropdown)} /> */}
                            <Dropdown showDropdown={showDropdown} />
                        </PostDropdown>
                    </PostTopRightWrap>
                </PostTop>

                <PostCenterWrap>
                    <PostTitle>{title}</PostTitle>
                    {/* <PostMediaImage alt="Post image" src={body} /> */}
                </PostCenterWrap>

                <PostBottomWrapper>
                    <BottomLeftWrap>
                        <LikeGroup>
                            <LikeIcon />
                            <LikeCounter>{likeCount} liked</LikeCounter>
                        </LikeGroup>
                    </BottomLeftWrap>
                    <BottomRightWrap>
                        <ViewMore>View more</ViewMore>
                        {/* <CommentIcon onClick={() => setShowComments(!showComments)} /> */}
                        {/* <CommentText>{commentCount}</CommentText> */}
                    </BottomRightWrap>
                </PostBottomWrapper>
                <Comment showComments={showComments} />
            </ForumWrapper>
        </>
    );
};

export default ImagePostCard;
