import Link from 'next/link';
import React from 'react'
import Button from "../Button";
import Input from "../../Input";

import {
  MainContainer,
  WelcomeText,
  InputContainer,
  ButtonContainer,
  LoginWith,
  HorizontalRule,
  Terms,
  PageContainer,
  FormWrap,
} from "./styles";

const Register = () => {

    return (
      <PageContainer>
        <FormWrap>
          <MainContainer>
            <WelcomeText>Register</WelcomeText>
            <InputContainer>
              <Input type="text" placeholder="Full Name" />
              <Input type="text" placeholder="Username" />
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder="Repeat Password" />
            </InputContainer>
            <ButtonContainer>
              <Button content="Sign Up" />
            </ButtonContainer>
            <Link href="/signin">
              <LoginWith>OR LOGIN </LoginWith>
            </Link>
            <HorizontalRule />
            <Terms>
              By creating your account you agree to the{" "}
              <Link href="/terms">terms</Link> and
              <Link href="/privacy">privacy policy</Link>
            </Terms>
          </MainContainer>
        </FormWrap>
      </PageContainer>
    );
}

export default Register
