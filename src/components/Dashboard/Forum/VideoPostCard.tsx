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
    ViewIcon,
    ViewCounter,
    PostMediaVideoIF,
    PostDropdown,
    LikeGroup,
    ViewMore,
} from "./forum.styles";
import { Comment } from "../../Comments";
import Dropdown from "../../Dropdown";
import { DropDownIcon } from "../../../../public/assets/icons/DropDownIcon";

const VideoPostCard = ({
    username,
    image,
    date,
    title,
    body,
    likeCount = 0,
    viewCount = 0,
    commentCount = 0,
    ...props
}: any) => {
    const [showComments, setShowComments] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <ForumWrapper>
            <PostTop>
                <PostLeftWrap>
                    <PostProfileImge src={image} alt="user profile image" />
                    <UserName>{username}
                        <PostDate>{dayjs(date).fromNow()}</PostDate>
                    </UserName>

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
                {/* <PostMediaVideoIF
                    {...props}
                    width="560"
                    height="315"
                    src={body}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                /> */}
            </PostCenterWrap>
            <PostBottomWrapper>
                <BottomLeftWrap>
                    <LikeGroup>
                        <LikeIcon />
                        <LikeCounter>{likeCount}</LikeCounter>
                    </LikeGroup>
                    <LikeGroup>
                        <ViewIcon />
                        <ViewCounter>{viewCount}</ViewCounter>
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

export default VideoPostCard;
