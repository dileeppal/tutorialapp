import React, { useState } from 'react'
import {
  DropDownContainer,
  Icon,
  CloseIcon,
  DropDownWrapper,
  DropDownLinks,
  DropDownMenu,
  DropDownBtnWrapper,
  DropDownBtn
} from "./styles";


const NavDropDown = ({ toggle, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown: any = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DropDownContainer isOpen={isOpen} {...props} onClick={toggleDropdown}>
      <Icon >
        <CloseIcon />
      </Icon>
      <DropDownWrapper>
        <DropDownMenu>
          <DropDownLinks to="courses">Courses</DropDownLinks>

          <DropDownLinks to="recommends">Recommendations</DropDownLinks>

          <DropDownLinks to="books">Books</DropDownLinks>

          <DropDownLinks to="forum">Forum</DropDownLinks>
          <DropDownLinks to="signup">Forum</DropDownLinks>
        </DropDownMenu>
        <DropDownBtnWrapper>
          <DropDownBtn>Sign Up</DropDownBtn>
        </DropDownBtnWrapper>
      </DropDownWrapper>
    </DropDownContainer>
  );
};

export default NavDropDown
