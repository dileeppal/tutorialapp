import React from "react";
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
} from "./forum.styles";

const VideoPostCard = ({
  username,
  image,
  date,
  content,
  videoMedia,
  likeCount = 0,
  viewCount = 0,
  commentCount = 0,
  ...props
}: any) => {
  return (
    <ForumWrapper>
      <PostTop>
        <PostLeftWrap>
          <PostProfileImge src={image} alt="user profile image" />
          <UserName>{username}</UserName>
          <PostDate>{date}</PostDate>
        </PostLeftWrap>
        <PostTopRightWrap>
          <ExpandIcon />
        </PostTopRightWrap>
      </PostTop>
      <PostCenterWrap>
        <PostText>{content}</PostText>
        <PostMediaVideoIF
          {...props}
          width="560"
          height="315"
          src={videoMedia}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
      </PostCenterWrap>
      <PostBottomWrapper>
        <BottomLeftWrap>
          <LikeIcon />
          <LikeCounter>{likeCount}</LikeCounter>
          <ViewIcon />
          <ViewCounter>{viewCount}</ViewCounter>
        </BottomLeftWrap>
        <BottomRightWrap>
          <CommentIcon />
          <CommentText>{commentCount}</CommentText>
        </BottomRightWrap>
      </PostBottomWrapper>
    </ForumWrapper>
  );
};

export default VideoPostCard;
