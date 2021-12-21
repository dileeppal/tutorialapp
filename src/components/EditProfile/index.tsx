import React, { useState } from 'react'

import LeftSideBar from '../Dashboard/LeftSideBar'
import SmallFooter from '../Dashboard/SmallFooter'
import Topbar from '../Dashboard/TopBar'
import Button from '../Auth/Button'
import {
    PageContainer,
    InnerContainer,
    PageHeading,
    // PageWrapper,
} from "../../styles/common.styles";
import {
    EditProfileWrapper,
    EditProfileGroup,
    EditProfileTitle,
    EditProfileFormGroup,
    EditProfileLabel,
    EditProfileInput,
    HorizontalLine,
    FileUploadedGroup,
    FileUploaded,
    FileUploadedThumb,
} from "./edit-profile.styles";

function EditProfile() {

    const [preview, setPreview] = useState('null')
    const InputFileUpload = (event:any) => {
        const InputFile = event.target.files[0]
        if(InputFile) {
            const preview = URL.createObjectURL(InputFile)
            setPreview(preview)
        }
    }
    
    return (
        <>
            <PageContainer>
                <LeftSideBar />
                <InnerContainer>
                    <Topbar />
                    <PageHeading>Edit Profile</PageHeading>
                    <EditProfileWrapper>
                        <EditProfileGroup>
                            <EditProfileTitle>Change Password</EditProfileTitle>
                            <EditProfileFormGroup>
                                <EditProfileLabel>Current Password</EditProfileLabel>
                                <EditProfileInput placeholder='Enter Current Password' />
                            </EditProfileFormGroup>
                            <EditProfileFormGroup>
                                <EditProfileLabel>New Password</EditProfileLabel>
                                <EditProfileInput placeholder='Enter New Password' />
                                <EditProfileInput placeholder='Confirm New Password' />
                                <Button content="Submit" />
                            </EditProfileFormGroup>
                            <HorizontalLine />
                        </EditProfileGroup>
                        <EditProfileGroup>
                            <EditProfileTitle>Prfile Detail</EditProfileTitle>
                            <FileUploadedGroup>
                                <FileUploadedThumb src={preview} />
                                <FileUploaded type='file' onChange={InputFileUpload} />
                            </FileUploadedGroup>
                        </EditProfileGroup>

                    </EditProfileWrapper>
                    <SmallFooter />
                </InnerContainer>
            </PageContainer>
        </>
    );
}

export default EditProfile
