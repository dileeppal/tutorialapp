import styled from "styled-components";

export const SmallFooterContainer = styled.footer`
  width: 100%;
  background-color: #d7c2e6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const SocialMedia = styled.section`
  max-width: 100%;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  @media screen and (max-width: 991px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled.a`
  color: #fff;
`;
  
export const WebsiteRights = styled.small`
  color: #fff;
  margin: 1rem 0;
  font-size: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  svg {
    display: block
  }
`;