import React from "react";

import Link from "next/link";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLink,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavBarContainer,
  NavItem,
} from "./NavBar.styles";
import { Logo } from "../../assets/images/Logo"



export default function NavBar({ toggle }: any) {

  return (
    <Nav>
      <NavBarContainer>
        <Link href="/">
          <NavLogo>
            <Logo color="white" width="50" height="50" />
          </NavLogo>
        </Link>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="home">Courses</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="recommend">Recommendations</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="books">Books</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="forum">Forum</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="signup">Sign Up</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <Link href="/">
            <NavBtnLink>Sign Up</NavBtnLink>
          </Link>
        </NavBtn>
      </NavBarContainer>
    </Nav>
  );
}
