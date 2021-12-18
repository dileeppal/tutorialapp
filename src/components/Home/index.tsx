import AdCardThree from 'components/AdCards/AdCardThree';
import RightSideBar from 'components/Dashboard/RightSideBar';
import React from "react";
import {
  PageHeading,
  ProfileWrapGroup,
  PageWrapGroup,
} from "styles/common.styles";
import Dashboard from "../Dashboard";

const Home = () => {
  
  return (
    <>
      <Dashboard>
        <PageHeading>Maguyva Dashboard</PageHeading>
        <ProfileWrapGroup>
            <PageWrapGroup>

            </PageWrapGroup>
          <RightSideBar>
            <AdCardThree />
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
    </>
  );
};

export default Home;
