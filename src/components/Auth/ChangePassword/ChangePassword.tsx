import React from 'react'
import Link from "next/link";
import Input from "../../Input";
import Button from "../Button";
import {
  FPContainer,
  FormWrap,
  MainContainer,
  HeaderText,
  InputContainer,
  ButtonContainer,
  HorizontalRule,
  BackToLogin,
} from "./changepassword.styles";

const ForgotPassword = () => {
    return (
      <>
        <FPContainer>
          <FormWrap>
            <MainContainer>
              <HeaderText>forgot password</HeaderText>
              <InputContainer>
                <Input type="email" placeholder="Email"></Input>
              </InputContainer>
              <ButtonContainer>
                <Button content="submit" />
              </ButtonContainer>
              <HorizontalRule />
              <Link href="/signin">
                <BackToLogin>back to login?</BackToLogin>
              </Link>
            </MainContainer>
          </FormWrap>
        </FPContainer>
      </>
    );
}

export default ForgotPassword
