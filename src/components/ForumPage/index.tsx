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
    ForumRow,
    ForumFilter,
    ForumFilterSortBy,
    SelectCategory,
    CategoryOption,
    FilterSearch,
} from "../../styles/common.styles";

const ForumPage = () => {
    return (
        <>
            <PageContainer>
                <LeftSideBar />
                <InnerContainer>
                    <TopBar />
                    <PageHeading>Forum</PageHeading>

                    <Share />
                    <ForumRow>
                        <ForumFilter>
                            <ForumFilterSortBy>
                                <SelectCategory>
                                    <CategoryOption>Category 01</CategoryOption>
                                    <CategoryOption>Category 02</CategoryOption>
                                    <CategoryOption>Category 03</CategoryOption>
                                    <CategoryOption>Category 04</CategoryOption>
                                </SelectCategory>
                            </ForumFilterSortBy>
                            <FilterSearch placeholder="Search">
                            </FilterSearch>
                        </ForumFilter>

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
                    </ForumRow>
                    <SmallFooter />
                </InnerContainer>
                {/* <PageRightSide>Live Forever Young</PageRightSide> */}
            </PageContainer>
        </>
    );
}

export default ForumPage

export const ForumContainer = styled.div`
    width: 33.33%;
    padding: .75rem;
    @media (max-width: 1366px) {
        width: 50%;
    }
    @media (max-width: 575px) {
        width: 100%;
        padding: .5rem;
    }
`;
