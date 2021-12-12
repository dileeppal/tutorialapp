import DetailPost from 'components/Dashboard/Forum/DetailPost'
import LeftSideBar from 'components/Dashboard/LeftSideBar'
import SmallFooter from 'components/Dashboard/SmallFooter'
import Topbar from 'components/Dashboard/TopBar'
import React from 'react'
import { PageContainer, InnerContainer, PageHeading, PageRightSide } from 'styles/common.styles'

const PostDetails = () => {
  return (
    <>
      <Topbar />
      <PageContainer>
        <LeftSideBar />
        <InnerContainer>
          <DetailPost
            username="maguyva"
            image="/D.jpg"
            date="5 min ago"
            title="tweet tweet tweet"
            body="tweet tweet tweet"
            likeCount={10}
            commentCount={16}
          />
        </InnerContainer>
        <PageRightSide>Live Forever Young</PageRightSide>
      </PageContainer>
      <SmallFooter />
    </>
  )
}

export default PostDetails
