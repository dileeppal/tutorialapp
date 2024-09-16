import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";

import { storage } from "lib/admin";
import {
  uploadBytes,
  ref,
  getDownloadURL,
} from "firebase/storage";

import {
  PageHeading,
  ProfileWrapGroup,
  PageWrapGroup,
} from "../../../styles/common.styles";

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


import { ErrorMsg, Error, SuccessMsg } from "../../Input";
import {
  getChangePasswordValidationSchema,
  getProfileDetailsValidationSchema,
} from "utils/formValidation";
import { useChangePasswordMutation, useEditBackGroundImageMutation, useEditMeMutation, useEditProfileImageMutation } from 'generated/graphql';


import Dashboard from 'components/Dashboard';
import RightSideBar from 'components/Dashboard/RightSideBar';
import AdCardThree from 'components/AdCards/AdCardThree';
import AdCardTwo from 'components/AdCards/AdCardTwo';
import AdCardOne from 'components/AdCards/AdCardOne';



type PasswordInput = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  error: string;
  success: string;
};

type ProfileDetails = {
  fullName: string;
  username: string;
  email: string;
  description: string;
  location: string;
};

type Image = {
  profileImage: File;
  success: string;
};

type FileType = {
  lastModified: any;
  lastModifiedDate: {};
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};


const EditProfile = () => {
  const { user: user } = useAppSelector(isUser);
  const [error, setError] = useState({
    isError: false,
    isProfError: false,
    isImgError: false,
    isBkgImgError: false,
  });

  const [msg, setMsg] = useState("");
  const [success, setSuccess] = useState({
    isSuccess: false,
    isProfSuccess: false,
    isImgSuccess: false,
    isBkgImgSuccess: false,
  });
  const [imgSizeErr, setImgSizeErr] = useState(false)
  const [bkgImage, setBkgImage] = useState(user?.backgroundImage );
  const [profImage, setProfImage] = useState(user?.profileImage);
  const schema = getChangePasswordValidationSchema();
  const profSchema = getProfileDetailsValidationSchema();

  console.log(user)
  const removeErrorMsg = (): void => {
    setTimeout(() => {
      setError({
        isError: false,
        isProfError: false,
        isImgError: false,
        isBkgImgError: false,
      });
    }, 3000);
  };
  const removeSuccessMsg = (): void => {
    setTimeout(() => {
      setSuccess({
        isSuccess: false,
        isProfSuccess: false,
        isImgSuccess: false,
        isBkgImgSuccess: false,
      });
    }, 3000);
  };

  // For changing password.
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<PasswordInput>({
    resolver: yupResolver(schema),
  });

  const [changeDetails] = useEditMeMutation();
  const [changePassword] = useChangePasswordMutation();
  const [editProfileImage] = useEditProfileImageMutation();
  const [editBackGroundImage] = useEditBackGroundImageMutation();

  // For submitting profile details
  const {
    register: registerProfile,
    formState: { errors: profileErrors },
    handleSubmit: handleProfSubmit,
  } = useForm<ProfileDetails>({
    resolver: yupResolver(profSchema),
  });

  // For submitting profile details
  const {
    setValue,
    formState: { errors: imgErrors },
    handleSubmit: handleImgSubmit,
  } = useForm<Image>({
    resolver: yupResolver(profSchema),
  });

  let [upload] = useState<FileType>({
    lastModified: 0,
    lastModifiedDate: {},
    name: "",
    size: 0,
    type: "",
    webkitRelativePath: "",
  });

  // console.log(user);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  // Submit button function for changingin user password,
  const handlePasswordSubmit: SubmitHandler<PasswordInput> = async (
    data: PasswordInput
  ) => {
    // console.log(data);
    const res = await changePassword({
      variables: {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      },
    });
    // console.log(res);
    if (!res.data?.changePassword.includes("successfully")) {
      const errMsg = res?.data?.changePassword as string;
      setMsg(errMsg);
      error.isError = true;
      removeErrorMsg();
    } else {
      // console.log(res.data);
      setMsg(res.data?.changePassword);
      success.isSuccess = true;
      removeSuccessMsg();
    }
  };

  // Submit button function for changingin user details,
  const handleProfileSubmit: SubmitHandler<ProfileDetails> = async (
    data: ProfileDetails
  ) => {
    const fullName = data.fullName == "" ? user?.fullName : data.fullName;
    const username = data.username == "" ? user?.username : data.username;
    const email = data.email == "" ? user?.email : data.email;
    const description =
      data.description == "" ? user?.description : data.description;
    const location = data.location == "" ? user?.location : data.location;

    // console.log(email, fullName, username, description, location, data);

    const res = await changeDetails({
      variables: {
        email: email as string,
        username: username as string,
        fullName: fullName as string,
        description: description as string,
        location: location as string,
      },
    });

    if (res?.data?.editMe.includes("successfully")) {
      setMsg(res.data.editMe);
      success.isProfSuccess = true;
      removeSuccessMsg();
      // setTimeout(() => {
      //   setSuccess({
      //     isSuccess: false,
      //     isProfSuccess: false,
      //     isImgSuccess: false,
      //   });
      // }, 3000);
    } else {
      const errMsg = res?.data?.editMe as string;
      setMsg(errMsg);
      error.isProfError = true;
      removeErrorMsg();
      // setTimeout(() => {
      //   setError({
      //     isError: false,
      //     isProfError: false,
      //     isImgError: false,
      //   });
      // }, 3000);
    }
  };

  const handleImageChange =
    (_name: string) => (event: { target: { files: {}[] } } | File | any) => {
      upload = event.target.files[0];
      setImgSizeErr(false);
      // console.log(event.target.files);
      if (upload.size > 102400) {
        setMsg("File size cannot exceed more than 10MB");
        setImgSizeErr(true);
        setTimeout(() => {
          setImgSizeErr(false);
        }, 8000);
      }
      setValue("profileImage", upload as any);
    };


  // Submit button function for changingin user profile image,
  const handleImageSubmit: SubmitHandler<any> = async (dta) => {
    const { name } = dta.profileImage
    // console.log(name);
    const testingRef = ref(storage, `testing folder/${name}`)
    const file = dta.profileImage;
 try {

    const res = await uploadBytes(testingRef, file).then(async () => {
        const url = await getDownloadURL(testingRef);
        return url
      });
      console.log(res)
      const { data } = await editProfileImage({
        variables: {
          imageUrl: res,
        },
      });
      if (data?.editProfileImage.includes("successfully")) {
        setProfImage(res);
        setMsg("Profile image changed successfully.");
        success.isImgSuccess = true;
        removeSuccessMsg();
        setValue("success", "Profile image changed successfully.");
      } else {
        const errMsg = data?.editProfileImage as string;
        setMsg(errMsg);
        error.isImgError = true;
        removeErrorMsg();
      }
    } catch (err) {
      console.log("");
    }
  };

  // Submit button function for changing user background image,
  const handleBkgImageSubmit: SubmitHandler<any> = async (dta) => {
    const file = dta.profileImage;
    const { name } = dta.profileImage;
    const testingRef = ref(storage, `testing folder/${name}`);

    const res = await uploadBytes(testingRef, file).then(async () => {
      const url = await getDownloadURL(testingRef);
      return url;
    });
    console.log(res);
    const { data } = await editBackGroundImage({
      variables: {
        imageUrl: res,
      },
    });
    // console.log(data);

    if (data?.editBackGroundImage.includes("successfully")) {
      setBkgImage(res);
      setMsg("Background image changed successfully.");
      success.isBkgImgSuccess = true;
      removeSuccessMsg();
      setValue("success", "Background image changed successfully.");
    } else {
      const errMsg = data?.editBackGroundImage as string;
      setMsg(errMsg);
      error.isBkgImgError = true;
      removeErrorMsg();
      // setTimeout(() => {
      //   setError({
      //     isError: false,
      //     isProfError: false,
      //     isImgError: false,
      //   });
      // }, 3000);
    }
  };

  return (
    <Dashboard>
      <PageHeading>Edit Profile Settings</PageHeading>
      <ProfileWrapGroup>
        <PageWrapGroup>
          <ProfileFormGroup>
            <PageContentWrap>
              <EditProfileTitle>Change Password</EditProfileTitle>
              <form onSubmit={handleSubmit(handlePasswordSubmit)}>
                {error.isError && <ErrorMsg>{msg}</ErrorMsg>}
                {success.isSuccess && <SuccessMsg>{msg}</SuccessMsg>}
                <EditProfileLabel htmlFor="current password">
                  Current Password
                </EditProfileLabel>
                <Input
                  placeholder="Enter Current Password"
                  {...register("currentPassword", { required: true })}
                  name="currentPassword"
                  type="password"
                />
                {errors.currentPassword && (
                  <Error>{errors.currentPassword?.message}</Error>
                )}

                <EditProfileLabel htmlFor="new password">
                  New Password
                </EditProfileLabel>
                <Input
                  type="password"
                  placeholder="Enter New Password"
                  {...register("newPassword", { required: true })}
                  name="newPassword"
                />
                {errors.newPassword && (
                  <Error>{errors.newPassword?.message}</Error>
                )}

                <Input
                  type="password"
                  placeholder="Confirm New Password"
                  {...register("confirmPassword", { required: true })}
                  name="confirmPassword"
                />
                {errors.confirmPassword && (
                  <Error>{errors.confirmPassword?.message}</Error>
                )}
                <Button type="submit">submit</Button>
              </form>
            </PageContentWrap>

            <HorizontalRule />

            {/* Image Form */}

            <div style={{ display: "flex", flexWrap: "wrap", margin: "-1rem" }}>
              <FileUploadedGroup>
                {imgSizeErr && <ErrorMsg>{msg}</ErrorMsg>}
                <EditProfileTitle>Change Profile Image</EditProfileTitle>
                {success.isImgSuccess && <SuccessMsg>{msg}</SuccessMsg>}
                {error.isImgError && <ErrorMsg>{msg}</ErrorMsg>}
                <form onSubmit={handleImgSubmit(handleImageSubmit)}>
                  <ProfileImage src={profImage ? profImage : user?.profileImage} alt="Profile Image" />
                  <InputSubmitGroup>
                    <input
                      type="file"
                      onChange={handleImageChange("profileImage")}
                      name="profileImage"
                      required
                    />
                    {imgErrors.profileImage && <Error>Image required</Error>}
                    <Button type="submit">submit</Button>
                  </InputSubmitGroup>
                </form>
              </FileUploadedGroup>
              <FileUploadedGroup>
                <EditProfileTitle>Change Background Image</EditProfileTitle>
                {success.isBkgImgSuccess && <SuccessMsg>{msg}</SuccessMsg>}
                {error.isBkgImgError && <ErrorMsg>{msg}</ErrorMsg>}
                <form onSubmit={handleImgSubmit(handleBkgImageSubmit)}>
                  <BackGroundImage
                    src={bkgImage ? bkgImage : user?.backgroundImg}
                    alt="Background Image"
                  />
                  <InputSubmitGroup>
                    <input
                      type="file"
                      name="backgroundImage"
                      required
                      onChange={handleImageChange("backgroundImage")}
                    />
                    <Button type="submit">submit</Button>
                  </InputSubmitGroup>
                </form>
              </FileUploadedGroup>
            </div>

            <HorizontalRule />

            {/* Profile Form */}

            <EditProfileTitle>Profile Details</EditProfileTitle>
            <form onSubmit={handleProfSubmit(handleProfileSubmit)}>
              {success.isProfSuccess && <SuccessMsg>{msg}</SuccessMsg>}
              {error.isProfError && <ErrorMsg>{msg}</ErrorMsg>}

              <EditProfileLabel htmlFor="full name">Full Name</EditProfileLabel>

              <StyledInput
                type="text"
                defaultValue={user?.fullName}
                {...registerProfile("fullName", { minLength: 3 })}
                name="fullName"
              />
              {profileErrors.fullName && (
                <Error>Minimum of 3 characters required</Error>
              )}
              {profileErrors.fullName && (
                <Error>{profileErrors.fullName?.message}</Error>
              )}

              <EditProfileLabel htmlFor="username">Username</EditProfileLabel>
              <StyledInput
                type="text"
                defaultValue={user?.username}
                {...registerProfile("username", { minLength: 3 })}
                name="username"
              />
              {profileErrors.username && (
                <Error>{profileErrors.username?.message}</Error>
              )}

              <EditProfileLabel htmlFor="email">Email</EditProfileLabel>
              <StyledInput
                type="text"
                defaultValue={user?.email}
                {...registerProfile("email")}
                name="email"
              />
              {profileErrors.email && (
                <Error>{profileErrors.email?.message}</Error>
              )}

              <EditProfileLabel htmlFor="description">
                Description
              </EditProfileLabel>
              <StyledInput
                type="text"
                defaultValue={user?.description}
                {...registerProfile("description", { required: true })}
                name="description"
              />

              <EditProfileLabel htmlFor="location">Location</EditProfileLabel>
              <StyledInput
                type="text"
                defaultValue={user?.location}
                {...registerProfile("location", { required: true })}
                name="location"
              />
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
}

export default EditProfile

