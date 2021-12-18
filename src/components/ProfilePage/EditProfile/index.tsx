import React from "react";

import {
  PageHeading,
  PageWrapGroup,
  ProfileWrapGroup,
} from "../../../styles/common.styles";


import Dashboard from "components/Dashboard";
import {
  Button,
  HorizontalRule,
  Input,
  ProfileImage,
  StyledInput,
  BackGroundImage,
  PageContentWrap,
} from "./edit.styles";

import RightSideBar from 'components/Dashboard/RightSideBar';
import AdCardThree from 'components/AdCards/AdCardThree';
import AdCardOne from 'components/AdCards/AdCardOne';
import AdCardTwo from 'components/AdCards/AdCardTwo';

const EditProfile = () => {
  return (
    <Dashboard>
      <PageHeading>Edit Profile Settings</PageHeading>
      <ProfileWrapGroup>
        <PageWrapGroup>
          <PageContentWrap>
            <h4>Change Password</h4>
            <br />
            <form>
              <label htmlFor="full name">Current Password</label>
              <Input
                type="password"
                placeholder="Enter current password"
                name="currentPassword"
              />
              <br></br>
              <label htmlFor="full name">New Password</label>
              <Input
                type="password"
                placeholder="Enter new password"
                name="newPassword"
              />

              <Input
                type="password"
                placeholder="Confirm new password"
                name="confirmPassword"
              />

              <br></br>
              <Button type="submit">submit</Button>
            </form>
          </PageContentWrap>
          <HorizontalRule />
          <br />
          {/* Image Form */}
          <div style={{ display: "flex" }}>
            <br />
            <div>
              <h4>Change Profile Image</h4>
              <br />
              <form>
                <ProfileImage src="/D.jpg" alt="Profile Image" />
                <br />
                <input type="file" name="profileImage" required />
                <br />
                <br />
                <Button type="submit">submit</Button>
              </form>
            </div>
            <div>
              <h4>Change Background Image</h4>
              <br />
              <form>
                <BackGroundImage
                  src="https://images.unsplash.com/photo-1469981283837-561b3779462f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Background Image"
                />
                <br />
                <input type="file" name="profileImage" required />
                <br />
                <br />
                <Button type="submit">submit</Button>
              </form>
            </div>
          </div>
          <br />
          <HorizontalRule />
          {/* Profile Form */}
          <h4>Profile Details</h4>
          <br />
          <form style={{ display: "grid" }}>
            <label htmlFor="full name">Full Name</label>
            <StyledInput type="text" defaultValue="Mac Mane" name="fullName" />

            <br></br>
            <label htmlFor="username">Username</label>

            <StyledInput type="text" defaultValue="maguyva" name="username" />
            <br></br>
            <label htmlFor="email">Email</label>
            <StyledInput
              type="text"
              defaultValue="email@email.com"
              name="email"
            />
            <br></br>

            <label htmlFor="description">Description</label>
            <StyledInput
              type="text"
              defaultValue="Badboy for life"
              name="description"
            />
            <br></br>

            <label htmlFor="location">Location</label>
            <StyledInput type="text" defaultValue="London" name="location" />
            <br></br>
            <Button type="submit">submit</Button>
          </form>
        </PageWrapGroup>
        <RightSideBar>
          <AdCardThree />
          <AdCardTwo />
          <AdCardOne />
        </RightSideBar>
      </ProfileWrapGroup>
    </Dashboard>
  );
};

export default EditProfile;

