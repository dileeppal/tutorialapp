import React, { ReactElement } from 'react'
import Link from 'next/link'
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrapper,
  FooterLinkItem,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./styles";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { SiTiktok } from "react-icons/si";
import { LogoShape } from "../../../public/assets/icons/LogoShape";
// interface Props {
    
// }

function Footer(): ReactElement {

  const toggleHome = () => {
    scroll.scrollToTop();
  };
    return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinkContainer>
            <FooterLinkWrapper>
              <FooterLinkItem>
                <FooterLinkTitle>Bare Tutorials</FooterLinkTitle>
                {/* <Link href="">
                  <FooterLink>Terms of Service</FooterLink>
                </Link> */}
                <Link href="/courses">
                  <FooterLink>Courses</FooterLink>
                </Link>
                <Link href="/forum">
                  <FooterLink>Forum</FooterLink>
                </Link>
                <Link href="/books">
                  <FooterLink>Books</FooterLink>
                </Link>
                <Link href="/signin">
                  <FooterLink>Login</FooterLink>
                </Link>
              </FooterLinkItem>

              <FooterLinkItem>
                <FooterLinkTitle>About</FooterLinkTitle>
                <Link href="/terms">
                  <FooterLink>Terms of Service</FooterLink>
                </Link>
                <Link href="/contact-us">
                  <FooterLink>Get in Touch</FooterLink>
                </Link>
                <Link href="/messages">
                  <FooterLink>Chat </FooterLink>
                </Link>
                <Link href="/signup">
                  <FooterLink>Register</FooterLink>
                </Link>
              </FooterLinkItem>
            </FooterLinkWrapper>
          </FooterLinkContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo onClick={toggleHome}>
                <LogoShape color="#5634bf" width="45" height="45" />
              </SocialLogo>
              <WebsiteRights>
                Baremetals Limited {new Date().getFullYear()}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="" target="_blank" aria-label="FaceBook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="" target="_blank" aria-label="Tiktok">
                  <SiTiktok />
                </SocialIconLink>
                <SocialIconLink href="" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
}

export default Footer
