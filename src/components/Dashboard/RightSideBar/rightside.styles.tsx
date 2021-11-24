import styled from "styled-components";

export const RightSideContainer = styled.aside`
  max-width: 20rem;
  min-width: 20rem;
  padding: 2rem;
  @media (max-width: 1366px) {
    max-width: 18rem;
    min-width: 18rem;
  }
  @media (max-width: 991px) {
    display: none;
    padding: 2rem 1.5rem;
  }
`;

export const RightSideWrapper = styled.div`
  padding: 1.25rem 1.25rem 0 0;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const ImageText = styled.span`
  font-weight: 300;
  font-size: 15px;
`;

export const RightSideAdvert = styled.img`
  width: 100%;
  border-radius: 10px;
  margin: 30px 0;
`;

export const RightSideTitle = styled.h4`
  margin-bottom: 1.25rem;
`;

export const UsersLists = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;