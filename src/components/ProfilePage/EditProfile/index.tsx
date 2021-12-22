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
  ProfileFormGroup,
  EditProfileTitle,
  EditProfileLabel,
  FileUploadedGroup,
  InputSubmitGroup,
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
                    <ProfileFormGroup>
                        <PageContentWrap>
                            <EditProfileTitle>Change Password</EditProfileTitle>
                            <form>
                                <EditProfileLabel htmlFor="full name">Current Password</EditProfileLabel>
                                <Input
                                    type="password"
                                    placeholder="Enter current password"
                                    name="currentPassword"
                                />

                                <EditProfileLabel htmlFor="full name">New Password</EditProfileLabel>
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
                                
                                <Button type="submit">submit</Button>
                            </form>
                        </PageContentWrap>
                        
                        <HorizontalRule />
                        
                        {/* Image Form */}
                        
                        <div style={{ display: "flex", flexWrap: "wrap", margin: "-1rem" }}>
                            <FileUploadedGroup>
                                <EditProfileTitle>Change Profile Image</EditProfileTitle>
                                <form>
                                    <ProfileImage src="/D.jpg" alt="Profile Image" />
                                    <InputSubmitGroup>
                                        <input type="file" name="profileImage" required />
                                        <Button type="submit">submit</Button>
                                    </InputSubmitGroup>
                                </form>
                            </FileUploadedGroup>
                            
                            <FileUploadedGroup>
                                <EditProfileTitle>Change Background Image</EditProfileTitle>
                                <form>
                                    <BackGroundImage
                                        src="https://images.unsplash.com/photo-1469981283837-561b3779462f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                        alt="Background Image"
                                    />
                                    <InputSubmitGroup>
                                        <input type="file" name="profileImage" required />
                                        <Button type="submit">submit</Button>
                                    </InputSubmitGroup>
                                </form>
                            </FileUploadedGroup>
                        </div>
                        
                        <HorizontalRule />
                        
                        {/* Profile Form */}
                        
                        <EditProfileTitle>Profile Details</EditProfileTitle>

                        <form>

                            <EditProfileLabel htmlFor="full name">Full Name</EditProfileLabel>
                            <StyledInput type="text" defaultValue="Mac Mane" name="fullName" />

                            <EditProfileLabel htmlFor="username">Username</EditProfileLabel>
                            <StyledInput type="text" defaultValue="maguyva" name="username" />
                            
                            <EditProfileLabel htmlFor="email">Email</EditProfileLabel>
                            <StyledInput
                            type="text"
                            defaultValue="email@email.com"
                            name="email"
                            />
                            
                            <EditProfileLabel htmlFor="description">Description</EditProfileLabel>
                            <StyledInput
                            type="text"
                            defaultValue="Badboy for life"
                            name="description"
                            />
                            
                            <EditProfileLabel htmlFor="location">Location</EditProfileLabel>
                            <StyledInput type="text" defaultValue="London" name="location" />
                            <Button type="submit">submit</Button>
                        </form>
                    </ProfileFormGroup>
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

