import React, { useState } from "react";
// import Link from "next/link";
// import { MdSchool } from "react-icons/md";
// import { BsFillChatSquareFill } from "react-icons/bs";
import { MdForum, MdHome } from "react-icons/md";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { MdLibraryBooks } from "react-icons/md";
// import { RiAdminFill } from "react-icons/ri";
// import { RiNotification2Fill } from "react-icons/ri";
import { useRouter } from 'next/router';

import {
    LeftSideContainer,
    LeftSideBarWrapper,
    LeftSideBarListItem,
    LeftSideBarIcon,
    LeftSideBarListItemText,
    ToggleButton,
    BackOverlay,
} from "./leftside.styles";

import { TopBarLogo } from "../TopBar/topbar.styles";
// import { Logo } from "../../../../public/assets/images/Logo";
import { LogoShape } from "../../../../public/assets/images/LogoShape";
import { CourseIcon } from "../../../../public/assets/icons/CourseIcon";
import { BooksIcon } from "../../../../public/assets/icons/BooksIcon";

import { ChatIcon } from "../../../../public/assets/icons/ChatIcon";
import { NotiIcon } from "../../../../public/assets/icons/NotiIcon";
import { SupportIcon } from "../../../../public/assets/icons/SupportIcon";
import { AdminIcon } from "../../../../public/assets/icons/AdminIcon";

const LeftSideBar = () => {
    const [menuState, setMenuState] = useState(false)
    {
        menuState && (
            <BackOverlay onClick={() => setMenuState(false)} className="" />
        );
    }
    const router = useRouter();
    return (
      <>
        <ToggleButton onClick={() => setMenuState(true)} className="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </ToggleButton>

        {menuState && (
          <BackOverlay onClick={() => setMenuState(false)} className="" />
        )}

        <LeftSideContainer className={menuState ? "open" : ""}>
          <LeftSideBarWrapper>
            <TopBarLogo>
              <a href={`/user-profile/`}>
                <LogoShape color="#5634bf" width="100" height="100" />
              </a>
            </TopBarLogo>

            <LeftSideBarListItem
              href="/home"
              className={router.pathname == "/home" ? "active" : ""}
            >
              <LeftSideBarIcon>
                <MdHome />
              </LeftSideBarIcon>
              <LeftSideBarListItemText>Dashboard</LeftSideBarListItemText>
            </LeftSideBarListItem>

            <LeftSideBarListItem
              href="/courses"
              className={router.pathname == "/courses" ? "active" : ""}
            >
              <LeftSideBarIcon>
                <CourseIcon />
              </LeftSideBarIcon>

              {/* <LeftSideBarIcon>
                        <MdSchool />
                    </LeftSideBarIcon> */}
              <LeftSideBarListItemText>Courses</LeftSideBarListItemText>
            </LeftSideBarListItem>

            <LeftSideBarListItem
              href="/books"
              className={router.pathname == "/books" ? "active" : ""}
            >
              <LeftSideBarIcon>
                <BooksIcon />
              </LeftSideBarIcon>
              {/* <LeftSideBarIcon>
                        <MdLibraryBooks />
                    </LeftSideBarIcon> */}
              <LeftSideBarListItemText>Books</LeftSideBarListItemText>
            </LeftSideBarListItem>

            <LeftSideBarListItem
              href="/messages/maguyva"
              className={
                router.pathname == "/messages/[username]" ? "active" : ""
              }
            >
              <LeftSideBarIcon>
                <ChatIcon />
              </LeftSideBarIcon>
              {/* <LeftSideBarIcon>
                        <IconBadge></IconBadge>
                        <BsFillChatSquareFill />
                    </LeftSideBarIcon> */}
              <LeftSideBarListItemText>Chat</LeftSideBarListItemText>
            </LeftSideBarListItem>

            <LeftSideBarListItem
              href="/forum"
              className={router.pathname == "/forum" ? "active" : ""}
            >
              {/* <LeftSideBarIcon>
                    </LeftSideBarIcon> */}
              <LeftSideBarIcon>
                <MdForum />
              </LeftSideBarIcon>
              <LeftSideBarListItemText>Forum</LeftSideBarListItemText>
            </LeftSideBarListItem>

            <LeftSideBarListItem
              href="/notifications"
              className={router.pathname == "/notifications" ? "active" : ""}
            >
              <LeftSideBarIcon>
                <NotiIcon />
              </LeftSideBarIcon>
              {/* <LeftSideBarIcon>
                        <IconBadge>2</IconBadge>
                        <RiNotification2Fill />
                    </LeftSideBarIcon> */}
              <LeftSideBarListItemText>Notifications</LeftSideBarListItemText>
            </LeftSideBarListItem>

            <LeftSideBarListItem
              href="/support"
              className={router.pathname == "/support" ? "active" : ""}
            >
              <LeftSideBarIcon>
                <SupportIcon />
              </LeftSideBarIcon>
              {/* <LeftSideBarIcon>
                        <FaRegQuestionCircle />
                    </LeftSideBarIcon> */}
              <LeftSideBarListItemText>Support</LeftSideBarListItemText>
            </LeftSideBarListItem>

            <LeftSideBarListItem
              href="/admin"
              className={router.pathname == "/admin" ? "active" : ""}
            >
              <LeftSideBarIcon>
                <AdminIcon />
              </LeftSideBarIcon>
              {/* <LeftSideBarIcon>
                        <RiAdminFill />
                    </LeftSideBarIcon> */}
              <LeftSideBarListItemText>Admin</LeftSideBarListItemText>
            </LeftSideBarListItem>
          </LeftSideBarWrapper>
        </LeftSideContainer>
      </>
    );
};

export default LeftSideBar;
