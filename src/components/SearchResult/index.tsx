import React from "react";

import {
  PageHeading,
  PageSubHeading,
  PageWrapper,
  PostCard,
  CardTitle,
  CardBody,
  CardDescription,
  CardBottom,
  CardStartDate,
  ApplyButton,
  CardDuration,
  UserGroup,
  UserImg,
  UserNameWrapper,
  UserName,
  PostDate,
  UserInfo,
  FlexRow,
  FlexCol,
  UserText,
  H4,
  Strong,
} from "../../styles/common.styles";
import Dashboard from "../Dashboard";

function SearchResult() {
  return (
    <Dashboard>
      <PageHeading>Search Results Here </PageHeading>

      <PageSubHeading>Users</PageSubHeading>
      <PageWrapper>
        {[0, 1, 2].map((post) => (
          <PostCard key={post}>
            <CardBody>
              <UserGroup>
                <UserImg width={80} height={80} src="/D.jpg" />
                <UserNameWrapper>
                  <H4>maguyva</H4>
                  <UserText>Badboy for Life!</UserText>
                  <UserInfo>
                    <FlexRow>
                      <FlexCol>
                        <Strong>Ratings:</Strong>
                      </FlexCol>
                      <FlexCol>Superb</FlexCol>
                    </FlexRow>
                    <FlexRow>
                      <FlexCol>
                        <Strong>City:</Strong>
                      </FlexCol>
                      <FlexCol>Accra</FlexCol>
                    </FlexRow>
                  </UserInfo>
                </UserNameWrapper>
              </UserGroup>
            </CardBody>
          </PostCard>
        ))}
      </PageWrapper>

      <PageSubHeading>Posts</PageSubHeading>
      <PageWrapper>
        {[0, 1, 2].map((post) => (
          <PostCard key={post}>
            <CardBody>
              <CardTitle>tweet tweet tweet</CardTitle>
              <CardDescription>
                Develop Future Proof responsive websites
              </CardDescription>
              <CardBottom>
                <UserGroup>
                  <UserImg width={40} height={40} src="/D.jpg" />
                  <UserNameWrapper>
                    <UserName>maguyva</UserName>
                    <PostDate>5 days ago</PostDate>
                  </UserNameWrapper>
                </UserGroup>
                <ApplyButton>View</ApplyButton>
              </CardBottom>
            </CardBody>
          </PostCard>
        ))}
      </PageWrapper>

      <PageSubHeading>Books</PageSubHeading>

      <PageWrapper>
        <PostCard>
          <CardBody>
            <CardTitle>Essential TypeScript</CardTitle>
            <CardDescription>
              Develop Future Proof responsive websites
            </CardDescription>
            <CardBottom>
              <CardStartDate>Peter Jones</CardStartDate>
              <ApplyButton>Buy</ApplyButton>
            </CardBottom>
          </CardBody>
        </PostCard>

        <PostCard>
          <CardBody>
            <CardTitle>Essential TypeScript</CardTitle>
            <CardDescription>
              Develop Future Proof responsive websites
            </CardDescription>
            <CardBottom>
              <CardStartDate>Peter Jones</CardStartDate>
              <ApplyButton>Buy</ApplyButton>
            </CardBottom>
          </CardBody>
        </PostCard>

        <PostCard>
          <CardBody>
            <CardTitle>Essential TypeScript</CardTitle>
            <CardDescription>
              Develop Future Proof responsive websites
            </CardDescription>
            <CardBottom>
              <CardStartDate>Peter Jones</CardStartDate>
              <ApplyButton>Buy</ApplyButton>
            </CardBottom>
          </CardBody>
        </PostCard>
      </PageWrapper>

      <PageSubHeading>Courses</PageSubHeading>
      <PageWrapper>
        <PostCard>
          <CardBody>
            <CardDuration>3 Months</CardDuration>
            <CardTitle>Fullstack Javascript web Dev</CardTitle>
            <CardDescription>
              The course includes: HTML, CSS and JavaScript and React Framework.
            </CardDescription>
            <CardBottom>
              <CardStartDate>12/11/2021</CardStartDate>
              <ApplyButton>Apply</ApplyButton>
            </CardBottom>
          </CardBody>
        </PostCard>

        <PostCard>
          <CardBody>
            <CardDuration>3 Months</CardDuration>
            <CardTitle>Fullstack Javascript web Dev</CardTitle>
            <CardDescription>
              The course includes: HTML, CSS and JavaScript and React Framework.
            </CardDescription>
            <CardBottom>
              <CardStartDate>12/11/2021</CardStartDate>
              <ApplyButton>Apply</ApplyButton>
            </CardBottom>
          </CardBody>
        </PostCard>

        <PostCard>
          <CardBody>
            <CardDuration>3 Months</CardDuration>
            <CardTitle>Fullstack Javascript web Dev</CardTitle>
            <CardDescription>
              The course includes: HTML, CSS and JavaScript and React Framework.
            </CardDescription>
            <CardBottom>
              <CardStartDate>12/11/2021</CardStartDate>
              <ApplyButton>Apply</ApplyButton>
            </CardBottom>
          </CardBody>
        </PostCard>
      </PageWrapper>
    </Dashboard>
  );
}

export default SearchResult;
