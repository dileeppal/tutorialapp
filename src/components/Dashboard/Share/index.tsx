import React, { useState } from "react";
import {
  ShareContainer,
  ShareWrapper,
  ShareTop,
  ProfileImage,
  Title,
  ShareHr,
  ShareBottomWrap,
  ShareOptions,
  ShareOptionItem,
  ShareOptionsIcon,
  ShareOptionstext,
  ShareButton,
} from "./share.styles";
import { MdPermMedia, MdOndemandVideo, MdTextsms } from "react-icons/md";
import Modal from "components/ShareForm/Modal";



// const categories = [
//   { value: "grocery", name: "Grocery", id: "1" },
//   { value: "women-cloths", name: "Women Cloths", id: "2" },
//   { value: "bags", name: "Bags", id: "3" },
//   { value: "makeup", name: "Makeup", id: "4" },
// ];

const username = "frank";
const Share = () => {

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <ShareContainer>
        <ShareWrapper>
          <ShareTop>
            <ProfileImage src="/D.jpg" alt="user profile image" />
            <Title placeholder={`what's on your mind ${username}?`} />
          </ShareTop>
          <ShareHr />
          <ShareBottomWrap>
            <ShareOptions onClick={() => setShowModal(true)}>
              <ShareOptionItem>
                <ShareOptionsIcon>
                  <MdPermMedia />
                </ShareOptionsIcon>
                <ShareOptionstext>Photo</ShareOptionstext>
              </ShareOptionItem>
            </ShareOptions>
            <ShareOptions onClick={() => setShowModal(true)}>
              <ShareOptionItem>
                <ShareOptionsIcon>
                  <MdOndemandVideo />
                </ShareOptionsIcon>
                <ShareOptionstext>Video</ShareOptionstext>
              </ShareOptionItem>
            </ShareOptions>
            <ShareOptions onClick={() => setShowModal(true)}>
              <ShareOptionItem>
                <ShareOptionsIcon>
                  <MdTextsms />
                </ShareOptionsIcon>
                <ShareOptionstext>Text</ShareOptionstext>
              </ShareOptionItem>
            </ShareOptions>
            <ShareButton onClick={() => setShowModal(true)}>send</ShareButton>
          </ShareBottomWrap>
        </ShareWrapper>
      </ShareContainer>
      <Modal
        showModal={showModal}
        closeM={() => setShowModal(false)}
        setShowModal={setShowModal}
      />
    </>
  );
};
export default Share;
