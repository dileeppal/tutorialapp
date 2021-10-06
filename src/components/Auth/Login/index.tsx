import React from 'react'
import Link from "next/link";
import Input from '../../Input';
import Button from '../Button';
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  HorizontalRule,
  ForgotPassword,
  PageContainer,
  FormWrap,
} from "./login-styles";

const Login = () => {
    return (
      <PageContainer>
        <FormWrap>
          <MainContainer>
            <WelcomeText>login</WelcomeText>
            <InputContainer>
              <Input type="text" placeholder="Username" />
              <Input type="password" placeholder="Password" />
            </InputContainer>
            <ButtonContainer>
              <Button content="Sign in" />
            </ButtonContainer>
            <Link href="/signup">
              <LoginWith>or Register </LoginWith>
            </Link>
            <HorizontalRule />
            <Link href="/forgot-password">
              <ForgotPassword>forgot password?</ForgotPassword>
            </Link>
          </MainContainer>
        </FormWrap>
      </PageContainer>
    );
}

export default Login
