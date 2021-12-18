import React, { useState } from 'react'
import Link from "next/link";

// for data fetching


import {
    TopbarContainer,
    TopLeftWrap,
    TopBarLogoGroup,
    TopCenterWrap,
    SearchBar,
    SearchInput,
    TopRightWrap,
    TopSearchButton,
    Icons,
    IconItem,
    IconBadge,
    ProfileImg,
    ProfileSetting,
    ProfileDropdown,
    ProfileItem,
} from "./topbar.styles";

import { CommentIcon } from "../../../../public/assets/icons/CommentIcon";
import { WellIcon } from "../../../../public/assets/icons/WellIcon";
import { Logo } from '../../../../public/assets/images/Logo';
import { TopSearchIcon } from '../../../../public/assets/icons/TopSearchIcon';
import { BackOverlay } from '../LeftSideBar/leftside.styles';
import router from 'next/router';

const Topbar = () => {

    const [dropdown, setDropdown] = useState(false)
    const [toggle, setToggle] = useState(false)

    const [search, setSearch] = useState(false)

    const onSearch = (event:any) => {
        setSearch(event.target.value)
        if(event.keyCode === 13) {
            setToggle(false)
            router.push(`/search-result?=${event.target.value}`)
        }
    }
    const onSetToggle = () => {
        if(window.screen.width <= 991 && !toggle) return setToggle(true)
        setToggle(false)
        router.push(`/search-result?=${search}`)
    }
    {
        toggle && (
            <BackOverlay onClick={() => setToggle(false)} className="" />
        );
    }

    return (
      <TopbarContainer>
        <TopLeftWrap>
          <TopBarLogoGroup>
            <Link href={`/user-profile/`}>
              <Logo color="white" width="50" height="50" />
            </Link>
          </TopBarLogoGroup>
        </TopLeftWrap>

        <TopCenterWrap>
          <SearchBar className={toggle ? "opened" : ""}>
            {/* <SearchIcon></SearchIcon> */}
            <TopSearchButton onClick={() => onSetToggle()}>
              <TopSearchIcon />
            </TopSearchButton>
            <SearchInput
              placeholder="Search"
              onKeyUp={(event) => onSearch(event)}
            />
          </SearchBar>
          {toggle && (
            <BackOverlay
              onClick={() => setToggle(false)}
              className="searchOverlay"
            />
          )}
        </TopCenterWrap>

        <TopRightWrap>
          {/* <TopBarNavLinks>
                    <NavLinks>
                        <Link href={`/user-profile/${me.username}`}>Home</Link>
                    </NavLinks>
                    <NavLinks>Timeline</NavLinks>
                </TopBarNavLinks> */}
          <Icons>
            {/* <IconItem>
                        <Link href={`/user-profile/${me.username}`}>
                            <RiHome4Fill />
                        </Link>
                    </IconItem> */}
            <IconItem>
              <CommentIcon />
              <IconBadge>3</IconBadge>
            </IconItem>
            <IconItem>
              <WellIcon />
              {/* <RiNotification2Fill /> */}
              <IconBadge>5</IconBadge>
            </IconItem>
          </Icons>

          <ProfileSetting>
            <ProfileImg
              onClick={() => setDropdown(!dropdown)}
              alt="user profile image"
              src="/Aleah.jpg"
            />
            <ProfileDropdown
              className={`${dropdown ? "opened" : ""}`}
              onClick={() => setDropdown(!dropdown)}
            >
              <ProfileItem>
                <Link href={`/user-profile/maguyva`}>Setting</Link>
              </ProfileItem>
              <ProfileItem>
                <Link href={`/user-profile/maguyva`}>Profile</Link>
              </ProfileItem>
              <ProfileItem>
                <Link href={`/user-profile/maguyva/edit-profile`}>
                  Edit Profile
                </Link>
              </ProfileItem>
              <ProfileItem>
                <Link href={`/user-profile/maguyva`}>Logout</Link>
              </ProfileItem>
            </ProfileDropdown>
          </ProfileSetting>
        </TopRightWrap>
      </TopbarContainer>
    );
}

export default Topbar;
