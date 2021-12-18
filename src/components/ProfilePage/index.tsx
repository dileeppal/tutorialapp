import React from 'react'
import { ProfileWrapGroup, PageWrapGroup } from "../../styles/common.styles";
import { ProfileCover, ProfileCoverImage, ProfileInfo, ProfileRightBottomWrap, ProfileRightTopWrap,UserDescription, UserName, UserProfileImage } from './profile.styles';
import UserFeed from './UserFeed';
import ProfileRightCard from './ProfileRightCard';
import Dashboard from 'components/Dashboard';
import RightSideBar from 'components/Dashboard/RightSideBar';

const index = () => {
    return (
      <Dashboard>
        <ProfileWrapGroup>
          <PageWrapGroup>
            <ProfileRightTopWrap>
              <ProfileCover>
                <ProfileCoverImage
                  alt="user profile cover image"
                  src="/red.jpg"
                />
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
          </PageWrapGroup>
          <RightSideBar>
            <ProfileRightCard city="Accra" coursesTaken={20} />
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
    );
}

export default index
