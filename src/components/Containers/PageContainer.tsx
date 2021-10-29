import React from 'react'

import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const MiddleContainer = styled.div`
  flex: 1 0 0%;
  padding: 2rem;
`;

export const RightSideContainer = styled.div`
  max-width: 20rem;
  min-width: 20rem;
`;

function PageContainer({children}: any) {
    return <MainPageContainer>{children}</MainPageContainer>
}

export default PageContainer
