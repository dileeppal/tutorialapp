import React from 'react'
import styled from "styled-components";

const Container = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1.125rem;
    &:last-child {
        margin-bottom: 0;
    }
`;
const CourseImageWrap = styled.div`
    margin-right: 1.25rem;
    position: relative;
`;
const CourseImg = styled.img`
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 10rem;
    object-fit: cover;
    background: black;
    display: block;
`;
const CourseStatus = styled.span`
    width: .75rem;
    height: .75rem;
    border-radius: 10rem;
    background-color: limegreen;
    position: absolute;
    top: 0;
    right: 0;
    border: 1px solid white;
`;
const CourseTitle = styled.span`
    font-weight: 500;
    opacity: 0.6;
`;

function CoursesTaken() {
    return (
        <>
            <Container>
                <CourseImageWrap>
                    <CourseImg alt="Course Image" src="/assets/images/forum.svg" />
                    <CourseStatus />
                </CourseImageWrap>
                <CourseTitle>Javascript</CourseTitle>
            </Container>

            <Container>
                <CourseImageWrap>
                    <CourseImg alt="Course Image" src="/assets/images/forum.svg" />
                    <CourseStatus />
                </CourseImageWrap>
                <CourseTitle>Django Web Dev</CourseTitle>
            </Container>

            <Container>
                <CourseImageWrap>
                    <CourseImg alt="Course Image" src="/assets/images/forum.svg" />
                    <CourseStatus />
                </CourseImageWrap>
                <CourseTitle>HTML & CSS</CourseTitle>
            </Container>

            <Container>
                <CourseImageWrap>
                    <CourseImg alt="Course Image" src="/assets/images/forum.svg" />
                    <CourseStatus />
                </CourseImageWrap>
                <CourseTitle>Flutter</CourseTitle>
            </Container>
        </>
    );
}

export default CoursesTaken
