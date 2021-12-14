import React from 'react'
import LeftSideBar from "../Dashboard/LeftSideBar";
import SmallFooter from "../Dashboard/SmallFooter";
import TopBar from "../Dashboard/TopBar";
import {
  PageContainer,
  InnerContainer,
  PageRightSide,
  ProfileWrapGroup,
  
} from "../../styles/common.styles";
import { ProfileCover, ProfileCoverImage, ProfileInfo, ProfileRightBottomWrap, ProfileRightTopWrap, ProfileRightWrap, UserDescription, UserName, UserProfileImage } from './profile.styles';
import UserFeed from './UserFeed';
import ProfileRightBar from './ProfileRightBar';

const index = () => {
    return (
        <>
        <PageContainer>
            <LeftSideBar />
            <InnerContainer>
                <TopBar />
                <ProfileWrapGroup>
                    <ProfileRightWrap>
                        <ProfileRightTopWrap>
                            <ProfileCover>
                                <ProfileCoverImage alt="user profile cover image" src="/red.jpg" />
                                <UserProfileImage alt="user profile image" src="/D.jpg" />
                            </ProfileCover>
                            
                            <ProfileInfo>
                                <UserName>Frank White</UserName>
                                <UserDescription>Badboy for Life!</UserDescription>
                            </ProfileInfo>
                        </ProfileRightTopWrap>
                        <ProfileRightBottomWrap>
                            <UserFeed />
                        </ProfileRightBottomWrap>
                    </ProfileRightWrap>
                    <PageRightSide>
                        <ProfileRightBar />
                    </PageRightSide>
                </ProfileWrapGroup>
                <SmallFooter />
            </InnerContainer>
        </PageContainer>

      </>
    );
}

export default index
