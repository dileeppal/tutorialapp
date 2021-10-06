import React from 'react'
import Link from "next/link";
import {
  TopbarContainer,
  TopLeftWrap,
  TopBarLogo,
  TopCenterWrap,
  SearchBar,
  SearchIcon,
  SearchInput,
  TopRightWrap,
  NavLinks,
  TopBarNavLinks,
  Icons,
  IconItem,
  IconBadge,
  ProfileImg,
} from "./topbar.styles";

import { BsFillChatSquareFill } from "react-icons/bs";
import { RiNotification2Fill } from "react-icons/ri";
import { RiHome4Fill } from "react-icons/ri";
import { Logo } from "../../../../public/assets/images/Logo";

const Topbar = () => {
    return (
      <TopbarContainer>
        <TopLeftWrap>
          <TopBarLogo>
            <Link href="/user-profile/maguyva">
              <TopBarLogo>
                <Logo color="white" width="50" height="50" />
              </TopBarLogo>
            </Link>
          </TopBarLogo>
        </TopLeftWrap>
        <TopCenterWrap>
          <SearchBar>
            <SearchIcon></SearchIcon>
            <SearchInput placeholder="Search for friend, post or video" />
          </SearchBar>
        </TopCenterWrap>
        <TopRightWrap>
          <TopBarNavLinks>
            <NavLinks>
              <Link href="/user-profile/maguyva">Home</Link>
            </NavLinks>
            <NavLinks>Timeline</NavLinks>
          </TopBarNavLinks>
          <Icons>
            <IconItem>
              <Link href="/user-profile/maguyva">
                <RiHome4Fill />
              </Link>
            </IconItem>
            <IconItem>
              <BsFillChatSquareFill />
              <IconBadge>3</IconBadge>
            </IconItem>
            <IconItem>
              <RiNotification2Fill />
              <IconBadge>5</IconBadge>
            </IconItem>
          </Icons>
          <ProfileImg alt="user profile image" src="/D.jpg" />
        </TopRightWrap>
      </TopbarContainer>
    );
}

export default Topbar;
