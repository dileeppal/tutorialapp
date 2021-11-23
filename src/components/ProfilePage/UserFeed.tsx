import React from 'react'
import styled from "styled-components";
import { ForumRow, ForumColumn } from 'styles/common.styles';
import ImagePostCard from '../Dashboard/Forum/ImagePostCard';
import Share from '../Dashboard/Share';

const FeedContainer = styled.div`
  flex: 5.5;
`;

const FeedWrapper = styled.div`
  padding: 0;
`;

export default function UserFeed() {
    return (
      <FeedContainer>
        <FeedWrapper>
          <Share />
          <ForumRow>
            <ForumColumn>
              <ImagePostCard
                username="maguyva"
                image="/D.jpg"
                date="5 min ago"
                title="tweet tweet tweet"
                body="/isak.jpg"
                likeCount={10}
                commentCount={8}
              />
              </ForumColumn>
          </ForumRow>
        </FeedWrapper>
      </FeedContainer>
    );
}
