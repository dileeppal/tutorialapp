import React, { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
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
    ViewMore,
} from "./forum.styles";
import { Comment } from "../../Comments";
import Dropdown from "../../Dropdown";

const TextPostCard = ({
    username,
    image,
    date,
    title,
    body,
    likeCount = 0,
    commentCount = 0,
}: any) => {
    const [showComments, setShowComments] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <ForumWrapper>
            <PostTop>
                <PostLeftWrap>
                    <PostProfileImge src={image} alt="user profile image" />
                    <UserName>
                        {username}
                        <PostDate>{dayjs(date).fromNow()}</PostDate>
                    </UserName>

                </PostLeftWrap>
                <PostTopRightWrap>
                    <PostDropdown>
                        <ExpandIcon onClick={() => setShowDropdown(!showDropdown)} />
                        <Dropdown showDropdown={showDropdown} />
                    </PostDropdown>
                </PostTopRightWrap>
            </PostTop>
            <PostCenterWrap>
                <PostTitle>{title}</PostTitle>
                <PostText>{body}</PostText>
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
                    {/* <CommentIcon onClick={() => setShowComments(!showComments)} />
          <CommentText>{commentCount}</CommentText> */}
                </BottomRightWrap>
            </PostBottomWrapper>
            <Comment showComments={showComments} />
        </ForumWrapper>
    );
};

export default TextPostCard;
