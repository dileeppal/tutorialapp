import React from 'react'
import {
  ShareContainer,
  ShareWrapper,
  ShareTop,
  ProfileImage,
  Content,
  ShareHr,
  ShareBottomWrap,
  ShareOptions,
  ShareOptionItem,
  ShareOptionsIcon,
  ShareOptionstext,
  ShareButton,
} from "./share.styles";
import { MdPermMedia } from "react-icons/md";
import { MdLabel } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { GrEmoji } from "react-icons/gr";

const username = "frank"
const Share = () => {
    return (
      <ShareContainer>
        <ShareWrapper>
          <ShareTop>
            <ProfileImage src="/D.jpg" alt="user profile image" />
            <Content placeholder={`what's on your mind ${username}?`} />
          </ShareTop>
          <ShareHr />
          <ShareBottomWrap>
            <ShareOptions>
              <ShareOptionItem>
                <ShareOptionsIcon>
                  <MdPermMedia />
                </ShareOptionsIcon>
                <ShareOptionstext>Photo or Video</ShareOptionstext>
              </ShareOptionItem>
            </ShareOptions>
            <ShareOptions>
              <ShareOptionItem>
                <ShareOptionsIcon>
                  <MdLabel />
                </ShareOptionsIcon>
                <ShareOptionstext>Tag</ShareOptionstext>
              </ShareOptionItem>
            </ShareOptions>
            <ShareOptions>
              <ShareOptionItem>
                <ShareOptionsIcon>
                  <FaLocationArrow />
                </ShareOptionsIcon>
                <ShareOptionstext>Location</ShareOptionstext>
              </ShareOptionItem>
            </ShareOptions>
            <ShareOptions>
              <ShareOptionItem>
                <ShareOptionsIcon>
                  <GrEmoji />
                </ShareOptionsIcon>
                <ShareOptionstext>Emoji</ShareOptionstext>
              </ShareOptionItem>
            </ShareOptions>
            <ShareButton>submit</ShareButton>
          </ShareBottomWrap>
        </ShareWrapper>
      </ShareContainer>
    );
}

export default Share
