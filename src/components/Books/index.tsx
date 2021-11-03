import React from 'react'
// import PageContainer, {
//   InnerContainer,
//   PageRightSide,
// } from "../Containers/PageContainer";
import LeftSideBar from '../Dashboard/LeftSideBar'
import SmallFooter from '../Dashboard/SmallFooter'
import TopBar from '../Dashboard/TopBar'
import {
  PageContainer,
  InnerContainer,
  PageRightSide,
  PageHeading,
  PageWrapper,
  PostCard,
  CardTitle,
  CardImage,
  CardDescription,
  CardDuration,
  CardBottom,
  CardStartDate,
  ApplyButton,
} from "../../styles/common.styles";

function BooksPage() {
    return (
      <>
        <TopBar />
        <PageContainer>
          <LeftSideBar />
          <InnerContainer>
            <PageHeading>Recommended Books</PageHeading>
            <PageWrapper>
              <PostCard>
                <CardImage alt="course image" src="/assets/images/react.svg" />
                <CardTitle>Essential TypeScript</CardTitle>
                <CardDescription>
                  Develop Future Proof responsive websites
                </CardDescription>
                <CardBottom>
                  <CardStartDate>Peter Jones</CardStartDate>
                  <ApplyButton>Buy</ApplyButton>
                </CardBottom>
              </PostCard>
              <PostCard>
                <CardImage alt="course image" src="/assets/images/react.svg" />
                <CardTitle>Essential TypeScript</CardTitle>
                <CardDescription>
                  Develop Future Proof responsive websites
                </CardDescription>
                <CardBottom>
                  <CardStartDate>Peter Jones</CardStartDate>
                  <ApplyButton>Buy</ApplyButton>
                </CardBottom>
              </PostCard>
              <PostCard>
                <CardImage alt="course image" src="/assets/images/react.svg" />
                <CardTitle>Essential TypeScript</CardTitle>
                <CardDescription>
                  Develop Future Proof responsive websites
                </CardDescription>
                <CardBottom>
                  <CardStartDate>Peter Jones</CardStartDate>
                  <ApplyButton>Buy</ApplyButton>
                </CardBottom>
              </PostCard>
              <PostCard>
                <CardImage alt="course image" src="/assets/images/react.svg" />
                <CardTitle>Essential TypeScript</CardTitle>
                <CardDescription>
                  Develop Future Proof responsive websites
                </CardDescription>
                <CardBottom>
                  <CardStartDate>Peter Jones</CardStartDate>
                  <ApplyButton>Buy</ApplyButton>
                </CardBottom>
              </PostCard>
            </PageWrapper>
          </InnerContainer>
          <PageRightSide>Live Forever Young</PageRightSide>
        </PageContainer>
        <SmallFooter />
      </>
    );
}

export default BooksPage
