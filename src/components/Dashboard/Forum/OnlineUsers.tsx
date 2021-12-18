import React from "react";
import styled from "styled-components";

const Container = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`;

const UserImageWrap = styled.div`
    margin-right: .625rem;
    position: relative;
`;

const UserImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 10rem;
    object-fit: cover;
`;

const UserStatus = styled.span`
    width: .75rem;
    height: .75rem;
    border-radius: 10rem;
    background-color: limegreen;
    position: absolute;
    top: -.125rem;
    right: 0;
    border: 2px solid white;
`;

const UserTitle = styled.span`
    font-weight: 500;
`;

function OnlineUsers() {
  return (
    <>
      <Container>
        <UserImageWrap>
          <UserImg alt="User Image" src="/D.jpg" />
          <UserStatus></UserStatus>
        </UserImageWrap>
        <UserTitle></UserTitle>
      </Container>
      <Container>
        <UserImageWrap>
          <UserImg alt="User Image" src="/prettygirl.jpg" />
          <UserStatus></UserStatus>
        </UserImageWrap>
        <UserTitle></UserTitle>
      </Container>
      <Container>
        <UserImageWrap>
          <UserImg alt="User Image" src="/Aleah.jpg" />
          <UserStatus></UserStatus>
        </UserImageWrap>
        <UserTitle></UserTitle>
      </Container>
      
    </>
  );
}

export default OnlineUsers;
