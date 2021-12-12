import React from 'react'
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
    CardBody,
    CardImage,
    CardDescription,
    CardBottom,
    CardStartDate,
    ApplyButton,
} from "../../styles/common.styles";

function BooksPage() {
    return (
        <>

            <PageContainer>
                <LeftSideBar />

                <InnerContainer>
                    <TopBar />
                    <PageHeading>Recommended Books</PageHeading>

                    <PageWrapper>
                        <PostCard>
                            <CardImage alt="course image" src="/assets/images/react.svg" />
                            <CardBody>
                                <CardTitle>Essential TypeScript</CardTitle>
                                <CardDescription>Develop Future Proof responsive websites</CardDescription>
                                <CardBottom>
                                    <CardStartDate>Peter Jones</CardStartDate>
                                    <ApplyButton>Buy</ApplyButton>
                                </CardBottom>
                            </CardBody>
                        </PostCard>

                        <PostCard>
                            <CardImage alt="course image" src="/assets/images/react.svg" />
                            <CardBody>
                                <CardTitle>Essential TypeScript</CardTitle>
                                <CardDescription>Develop Future Proof responsive websites</CardDescription>
                                <CardBottom>
                                    <CardStartDate>Peter Jones</CardStartDate>
                                    <ApplyButton>Buy</ApplyButton>
                                </CardBottom>
                            </CardBody>
                        </PostCard>

                        <PostCard>
                            <CardImage alt="course image" src="/assets/images/react.svg" />
                            <CardBody>
                                <CardTitle>Essential TypeScript</CardTitle>
                                <CardDescription>Develop Future Proof responsive websites</CardDescription>
                                <CardBottom>
                                    <CardStartDate>Peter Jones</CardStartDate>
                                    <ApplyButton>Buy</ApplyButton>
                                </CardBottom>
                            </CardBody>
                        </PostCard>

                        <PostCard>
                            <CardImage alt="course image" src="/assets/images/react.svg" />
                            <CardBody>
                                <CardTitle>Essential TypeScript</CardTitle>
                                <CardDescription>Develop Future Proof responsive websites</CardDescription>
                                <CardBottom>
                                    <CardStartDate>Peter Jones</CardStartDate>
                                    <ApplyButton>Buy</ApplyButton>
                                </CardBottom>
                            </CardBody>
                        </PostCard>
                    </PageWrapper>
                </InnerContainer>
                {/* <PageRightSide>Live Forever Young</PageRightSide> */}
            </PageContainer>
            <SmallFooter />
        </>
    );
}

export default BooksPage
