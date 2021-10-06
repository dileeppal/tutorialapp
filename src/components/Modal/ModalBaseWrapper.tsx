import React from "react";
import Modal from "./index";
import { DesktopModalContainer, Header } from "./styles";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackdropClick,
  isModalVisible,
}: BaseModalWrapperProps) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DesktopModalContainer>
        <Header>Modal Info</Header>
      </DesktopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
