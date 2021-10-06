import Link from "next/link";
import React from "react";
import Input from "../../Input";
import Button from "../Button";

import {
  RPContainer,
  FormWrap,
  MainContainer,
  HeaderText,
  InputContainer,
  ButtonContainer,
  HorizontalRule,
  BackToLogin,
} from "./passwordreset.styles";

const ResetPassword = () => {
  return (
    <RPContainer>
      <FormWrap>
        <MainContainer>
          <HeaderText>reset password</HeaderText>
          <InputContainer>
            <Input type="password" placeholder="Password" />
            <Input type="password" placeholder="Repeat Password" />
          </InputContainer>
          <ButtonContainer>
            <Button type="submit" content="submit" />
          </ButtonContainer>
          <HorizontalRule />
          <Link href="/signin">
            <BackToLogin>back to login?</BackToLogin>
          </Link>
        </MainContainer>
      </FormWrap>
    </RPContainer>
  );
};

export default ResetPassword;
