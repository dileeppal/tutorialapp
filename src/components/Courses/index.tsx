import React from 'react'
// import { Logo } from '../../../public/assets/images/Logo';
import LeftSideBar from '../Dashboard/LeftSideBar'
import SmallFooter from '../Dashboard/SmallFooter';
import Topbar from '../Dashboard/TopBar'
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

function CoursesPage() {
    return (
      <>
        <Topbar />

        <PageContainer>
          <LeftSideBar />
          
          <InnerContainer>
            <PageHeading>Courses</PageHeading>
            <PageWrapper>
              <PostCard>
                <CardImage
                  alt="course image"
                  src="/assets/images/react.svg"
                  />
                  <CardTitle>
                    Fullstack Javascript web Dev
                    <CardDuration> - 3 Months</CardDuration>
                  </CardTitle>
                <CardDescription>
                  The course includes: HTML, CSS and JavaScript and React
                  Framework.
                </CardDescription>
                <CardBottom>
                  <CardStartDate>12/11/2021</CardStartDate>
                  <ApplyButton>apply</ApplyButton>
                </CardBottom>
              </PostCard>
              <PostCard>
                <CardImage
                  alt="course image"
                  src="/assets/images/react.svg"
                  />
                  <CardTitle>
                    Fullstack Javascript web Dev
                    <CardDuration> - 3 Months</CardDuration>
                  </CardTitle>
                <CardDescription>
                  The course includes: HTML, CSS and JavaScript and React
                  Framework.
                </CardDescription>
                <CardBottom>
                  <CardStartDate>12/11/2021</CardStartDate>
                  <ApplyButton>apply</ApplyButton>
                </CardBottom>
              </PostCard>
              <PostCard>
                <CardImage
                  alt="course image"
                  src="/assets/images/react.svg"
                  />
                  <CardTitle>
                    Fullstack Javascript web Dev
                    <CardDuration> - 3 Months</CardDuration>
                  </CardTitle>
                <CardDescription>
                  The course includes: HTML, CSS and JavaScript and React
                  Framework.
                </CardDescription>
                <CardBottom>
                  <CardStartDate>12/11/2021</CardStartDate>
                  <ApplyButton>apply</ApplyButton>
                </CardBottom>
              </PostCard>
              <PostCard>
                <CardImage
                  alt="course image"
                  src="/assets/images/react.svg"
                  />
                  <CardTitle>
                    Fullstack Javascript web Dev
                    <CardDuration> - 3 Months</CardDuration>
                  </CardTitle>
                <CardDescription>
                  The course includes: HTML, CSS and JavaScript and React
                  Framework.
                </CardDescription>
                <CardBottom>
                  <CardStartDate>12/11/2021</CardStartDate>
                  <ApplyButton>apply</ApplyButton>
                </CardBottom>
              </PostCard>
            </PageWrapper>
          </InnerContainer>
          <PageRightSide>blow my wig</PageRightSide>
        </PageContainer>
        <SmallFooter />
      </>
    );
}

export default CoursesPage
