import React from "react";
import LeftSideBar from "../Dashboard/LeftSideBar";
import SmallFooter from "../Dashboard/SmallFooter";
import TopBar from "../Dashboard/TopBar";
import {
  NoticesWrapper,
  NoticeLeftWrap,
  SenderProfileImge,
  NoticeMessage,
  NoticeDate,
  NoticeTopRightWrap,
  DeleteIcon,
} from "./notice.styles";
import {
  PageContainer,
  InnerContainer,
  PageRightSide,
  PageHeading,
} from "../../styles/common.styles";

function NotificationsPage() {
  return (
    <>
      <TopBar />
      <PageContainer>
        <LeftSideBar />
        <InnerContainer>
          <PageHeading>Notifications</PageHeading>
          <NoticesWrapper>
            <NoticeLeftWrap>
              <SenderProfileImge alt="sender profile image" src="/Aleah.jpg" />
              <NoticeMessage>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </NoticeMessage>
              <NoticeDate>10 hours ago</NoticeDate>
            </NoticeLeftWrap>
            <NoticeTopRightWrap>
              <DeleteIcon />
            </NoticeTopRightWrap>
          </NoticesWrapper>
          <NoticesWrapper>
            <NoticeLeftWrap>
              <SenderProfileImge alt="sender profile image" src="/D.jpg" />
              <NoticeMessage>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </NoticeMessage>
              <NoticeDate>10 hours ago</NoticeDate>
            </NoticeLeftWrap>
            <NoticeTopRightWrap>
              <DeleteIcon />
            </NoticeTopRightWrap>
          </NoticesWrapper>
          <NoticesWrapper>
            <NoticeLeftWrap>
              <SenderProfileImge alt="sender profile image" src="/prettygirl.jpg" />
              <NoticeMessage>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </NoticeMessage>
              <NoticeDate>10 hours ago</NoticeDate>
            </NoticeLeftWrap>
            <NoticeTopRightWrap>
              <DeleteIcon />
            </NoticeTopRightWrap>
          </NoticesWrapper>
          
        </InnerContainer>
        <PageRightSide>Live forever young!</PageRightSide>
      </PageContainer>
      <SmallFooter />
    </>
  );
}

export default NotificationsPage;
