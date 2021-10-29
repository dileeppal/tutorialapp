import React from 'react'
import PageContainer, {
  MiddleContainer,
  RightSideContainer,
} from "../Containers/PageContainer";
import LeftSideBar from '../Dashboard/LeftSideBar'
import SmallFooter from '../Dashboard/SmallFooter'
import TopBar from '../Dashboard/TopBar'
import {
  BooksH1,
  BooksWrapper,
  BooksCard,
  BookTitle,
  BookImage,
  BookDescription,
  BookBottom,
  BookAuthor,
  BuyButton,
} from "./book.styles";

function BooksPage() {
    return (
      <>
        <TopBar />
        <PageContainer>
          <LeftSideBar />
          <MiddleContainer>
            <BooksH1>Recommended Books</BooksH1>
            <BooksWrapper>
              <BooksCard>
                <BookImage alt="course image" src="/assets/images/react.svg" />
                <BookTitle>Essential TypeScript</BookTitle>
                <BookDescription>
                  Develop Future Proof responsive websites
                </BookDescription>
                <BookBottom>
                  <BookAuthor>Peter Jones</BookAuthor>
                  <BuyButton>Buy</BuyButton>
                </BookBottom>
              </BooksCard>
              <BooksCard>
                <BookImage alt="course image" src="/assets/images/react.svg" />
                <BookTitle>Essential TypeScript</BookTitle>
                <BookDescription>
                  Develop Future Proof responsive websites
                </BookDescription>
                <BookBottom>
                  <BookAuthor>Peter Jones</BookAuthor>
                  <BuyButton>Buy</BuyButton>
                </BookBottom>
              </BooksCard>
              <BooksCard>
                <BookImage alt="course image" src="/assets/images/react.svg" />
                <BookTitle>Essential TypeScript</BookTitle>
                <BookDescription>
                  Develop Future Proof responsive websites
                </BookDescription>
                <BookBottom>
                  <BookAuthor>Peter Jones</BookAuthor>
                  <BuyButton>Buy</BuyButton>
                </BookBottom>
              </BooksCard>
              <BooksCard>
                <BookImage alt="course image" src="/assets/images/react.svg" />
                <BookTitle>Essential TypeScript</BookTitle>
                <BookDescription>
                  Develop Future Proof responsive websites
                </BookDescription>
                <BookBottom>
                  <BookAuthor>Peter Jones</BookAuthor>
                  <BuyButton>Buy</BuyButton>
                </BookBottom>
              </BooksCard>
            </BooksWrapper>
          </MiddleContainer>
          <RightSideContainer>Live Forever Young</RightSideContainer>
        </PageContainer>
        <SmallFooter />
      </>
    );
}

export default BooksPage
