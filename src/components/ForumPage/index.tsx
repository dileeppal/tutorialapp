import React from 'react'
import styled from "styled-components";
import TopBar from "../Dashboard/TopBar";
import LeftSideBar from "../Dashboard/LeftSideBar";
import SmallFooter from "../Dashboard/SmallFooter";
import Share from "../Dashboard/Share"; 
import ImagePostCard from "../Dashboard/Forum/ImagePostCard";
import TextPostCard from "../Dashboard/Forum/TextPostCard";
import VideoPostCard from "../Dashboard/Forum/VideoPostCard";

import {
  PageContainer,
  InnerContainer,
  PageRightSide,
  PageHeading,
} from "../../styles/common.styles";

const ForumPage = () => {
    return (
      <>
        <TopBar />
        <PageContainer>
          <LeftSideBar />
          <InnerContainer>
            <PageHeading>Forum</PageHeading>
            <Share />
            <ForumContainer>
              <TextPostCard
                username="maguyva"
                image="/D.jpg"
                date="5 min ago"
                title="tweet tweet tweet"
                body="tweet tweet tweet"
                likeCount="10"
                commentCount={16}
              />
            </ForumContainer>
            <ForumContainer>
              <VideoPostCard
                username="maguyva"
                image="/D.jpg"
                date="5 min ago"
                title="tweet tweet tweet"
                body="/exvid.mp4"
                likeCount={13}
                commentCount={29}
                viewCount={31}
              />
            </ForumContainer>
            <ForumContainer>
              <ImagePostCard
                username="maguyva"
                image="/D.jpg"
                date="5 min ago"
                title="tweet tweet tweet"
                body="/isak.jpg"
                likeCount={10}
                commentCount={8}
              />
            </ForumContainer>
          </InnerContainer>
          <PageRightSide>Live Forever Young</PageRightSide>
        </PageContainer>
        <SmallFooter />
      </>
    );
}

export default ForumPage

export const ForumContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
`;
