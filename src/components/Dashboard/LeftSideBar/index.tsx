import React from "react";
import Link from "next/link";
import { MdSchool } from "react-icons/md";
import { BsFillChatSquareFill } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { MdForum } from "react-icons/md";
import { RiNotification2Fill } from "react-icons/ri";

import {
  LeftSideContainer,
  LeftSideBarWrapper,
  LeftSideBarListItem,
  LeftSideBarIcon,
  LeftSideBarListItemText,
} from "./leftside.styles";

const LeftSideBar = () => {
  return (
    <LeftSideContainer>
      <LeftSideBarWrapper>
        <LeftSideBarListItem>
          <LeftSideBarIcon>
            <Link href="/courses">
              <MdSchool />
            </Link>
          </LeftSideBarIcon>
          <LeftSideBarListItemText>Courses</LeftSideBarListItemText>
        </LeftSideBarListItem>
        <LeftSideBarListItem>
          <LeftSideBarIcon>
            <Link href="/timetable">
              <FaCalendar />
            </Link>
          </LeftSideBarIcon>
          <LeftSideBarListItemText>Timetable</LeftSideBarListItemText>
        </LeftSideBarListItem>
        <LeftSideBarListItem>
          <LeftSideBarIcon>
            <Link href="/videos">
              <MdVideoLibrary />
            </Link>
          </LeftSideBarIcon>
          <LeftSideBarListItemText>Videos</LeftSideBarListItemText>
        </LeftSideBarListItem>
        <LeftSideBarListItem>
          <LeftSideBarIcon>
            <Link href="/messages/maguyva">
              <BsFillChatSquareFill />
            </Link>
          </LeftSideBarIcon>
          <LeftSideBarListItemText>Chat</LeftSideBarListItemText>
        </LeftSideBarListItem>
        <LeftSideBarListItem>
          <LeftSideBarIcon>
            <Link href="/forum">
              <MdForum />
            </Link>
          </LeftSideBarIcon>
          <LeftSideBarListItemText>Forum</LeftSideBarListItemText>
        </LeftSideBarListItem>
        <LeftSideBarListItem>
          <LeftSideBarIcon>
            <Link href="/blog">
              <FaBlog />
            </Link>
          </LeftSideBarIcon>
          <LeftSideBarListItemText>Blog</LeftSideBarListItemText>
        </LeftSideBarListItem>
        <LeftSideBarListItem>
          <LeftSideBarIcon>
            <Link href="/notifications">
              <RiNotification2Fill />
            </Link>
          </LeftSideBarIcon>
          <LeftSideBarListItemText>Notifications</LeftSideBarListItemText>
        </LeftSideBarListItem>
        <LeftSideBarListItem>
          <LeftSideBarIcon>
            <Link href="/support">
              <FaRegQuestionCircle />
            </Link>
          </LeftSideBarIcon>
          <LeftSideBarListItemText>Support</LeftSideBarListItemText>
        </LeftSideBarListItem>
      </LeftSideBarWrapper>
    </LeftSideContainer>
  );
};

export default LeftSideBar;
