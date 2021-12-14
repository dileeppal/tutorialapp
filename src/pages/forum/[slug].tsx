import DetailPost from 'components/Dashboard/Forum/DetailPost'
import LeftSideBar from 'components/Dashboard/LeftSideBar'
import SmallFooter from 'components/Dashboard/SmallFooter'
import Topbar from 'components/Dashboard/TopBar'
import React from 'react'
import { PageContainer, InnerContainer, PageHeading, PageRightSide } from 'styles/common.styles'

const PostDetails = () => {
    return (
        <>
            <PageContainer>
                <LeftSideBar />
                <InnerContainer>
                    <Topbar />
                    <DetailPost
                        username="maguyva"
                        image="/D.jpg"
                        date="5 min ago"
                        title="tweet tweet tweet"
                        body="tweet tweet tweet"
                        likeCount={10}
                        commentCount={16}
                    />
                    <SmallFooter />
                </InnerContainer>
                {/* <PageRightSide>Live Forever Young</PageRightSide> */}
            </PageContainer>
            
        </>
    )
}

export default PostDetails
