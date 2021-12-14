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
  CardBody,
} from "../../styles/common.styles";

function CoursesPage() {
    return (
        <>

            <PageContainer>
                
                <LeftSideBar />
                
                <InnerContainer>
                    <Topbar />
                    <PageHeading>Courses</PageHeading>
                    <PageWrapper>
                        <PostCard>
                            <CardImage alt="course image" src="/assets/images/react.svg" />
                            <CardBody>
                                <CardDuration>3 Months</CardDuration>
                                <CardTitle>Fullstack Javascript web Dev</CardTitle>
                                <CardDescription>
                                    The course includes: HTML, CSS and JavaScript and React Framework.
                                </CardDescription>
                                <CardBottom>
                                    <CardStartDate>12/11/2021</CardStartDate>
                                    <ApplyButton>Apply</ApplyButton>
                                </CardBottom>
                            </CardBody>
                        </PostCard>
                        
                        <PostCard>
                            <CardImage alt="course image" src="/assets/images/react.svg" />
                            <CardBody>
                                <CardDuration>3 Months</CardDuration>
                                <CardTitle>Fullstack Javascript web Dev</CardTitle>
                                <CardDescription>
                                    The course includes: HTML, CSS and JavaScript and React Framework.
                                </CardDescription>
                                <CardBottom>
                                    <CardStartDate>12/11/2021</CardStartDate>
                                    <ApplyButton>Apply</ApplyButton>
                                </CardBottom>
                            </CardBody>
                        </PostCard>
                        
                        <PostCard>
                            <CardImage alt="course image" src="/assets/images/react.svg" />
                            <CardBody>
                                <CardDuration>3 Months</CardDuration>
                                <CardTitle>Fullstack Javascript web Dev</CardTitle>
                                <CardDescription>
                                    The course includes: HTML, CSS and JavaScript and React Framework.
                                </CardDescription>
                                <CardBottom>
                                    <CardStartDate>12/11/2021</CardStartDate>
                                    <ApplyButton>Apply</ApplyButton>
                                </CardBottom>
                            </CardBody>
                        </PostCard>
                        
                        <PostCard>
                            <CardImage alt="course image" src="/assets/images/react.svg" />
                            <CardBody>
                                <CardDuration>3 Months</CardDuration>
                                <CardTitle>Fullstack Javascript web Dev</CardTitle>
                                <CardDescription>
                                    The course includes: HTML, CSS and JavaScript and React Framework.
                                </CardDescription>
                                <CardBottom>
                                    <CardStartDate>12/11/2021</CardStartDate>
                                    <ApplyButton>Apply</ApplyButton>
                                </CardBottom>
                            </CardBody>
                        </PostCard>
                    </PageWrapper>
                    <SmallFooter />
                </InnerContainer>
                {/* <PageRightSide>blow my wig</PageRightSide> */}
            </PageContainer>


        </>
    );
}

export default CoursesPage
