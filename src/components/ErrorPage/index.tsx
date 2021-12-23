import React, { useState } from 'react'
import styled from 'styled-components';
import NextImage from "next/image";
import Link from 'next/link';

export interface ErrorPageProps {
  statusCode?: number;
}

const getError = (statusCode?: number) => {
  switch (statusCode) {
    case 404:
      return {
        title: "Page not found",
        message:
          "The page you are looking for doesn't exist or has been moved.",
        image: "/assets/images/404.svg"
      };
    case 500:
      return {
        title: "Server error",
        message:
          "Something went wrong on our end. Please contact support or try again later.",
        image: "/assets/images/500.svg",
      };
    default:
      return {
        title: "Bad request",
        message:
          "Something went wrong. Please contact support or try again later.",
        image: "/assets/images/500.svg",
      };
  }
};

const ErrorPage: React.FC<ErrorPageProps> = ({statusCode = 400}: any) => {

    const [errTitle] = useState(getError(statusCode).title);
    const [errMsg] = useState(getError(statusCode).message);
    const [image] = useState(getError(statusCode).image);
  return (
    <PageContainer>
      <Wrapper>
        <ErrorTitleText>{`${statusCode} ${errTitle}`}</ErrorTitleText>
        <ImageWrapper>
          <NextImage src={image} alt="404 image" width={450} height={300} />
        </ImageWrapper>
        <ErrorText>{errMsg}</ErrorText>
        <Link href="/">
          <button>Go Back</button>
        </Link>
      </Wrapper>
    </PageContainer>
  );
};

export default ErrorPage

export const PageContainer = styled.div`
  background-color: #eef0f3;
  padding: 5rem 1.5rem;
  min-height: 100vh;
  display: flex;
  @media (max-width: 767px) {
    padding: 2rem 1.5rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 4rem;
  align-items: center;
  z-index: 10;
  @media (min-width: 768px) {
    min-height: 38.25rem;
  }
  h4,
  h5 {
    font-size: 1rem;
    font-weight: normal;
    @media (max-width: 767px) {
      font-size: 0.75rem;
    }
  }
  @media (max-width: 767px) {
    padding: 1.75rem;
  }
`;

export const ErrorTitleText = styled.h2`
  color: inherit;
  font-size: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }
`;

export const ErrorText = styled.h2`
  color: inherit;
  font-size: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  @media (max-width: 767px) {
    display: none;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;