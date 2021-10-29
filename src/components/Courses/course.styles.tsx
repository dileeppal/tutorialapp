import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto; 
    padding-left: 2rem;
    padding-right: 2rem;
    @media (max-width: 991px) {
      flex-direction: column;
    }
`;

export const CourseContainer = styled.div`
    flex: 1 0 0%;
    padding: 2rem;
    @media (max-width: 991px) {
      padding: 1rem 0 2rem;
    }
      
`;

export const CoursesH1 = styled.h1`
  color: #000;
  font-size: 2rem;
  margin-bottom: 2rem;
  line-height: 1;
  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const CoursesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -.5rem;
  > div {
    width: calc(33.33% - 1rem);
    margin: .5rem;
    @media (max-width: 1500px) {
      width: calc(33.33% - 1rem);
    }
    @media (max-width: 1366px) {
      width: calc(50% - 1rem);
    }
    @media (max-width: 575px) {
      width: calc(100% - 1rem);
    }
    
  }
`;


export const CoursesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: .5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CourseTitle = styled.h2`
  font-size: 1rem;
  margin-bottom: 1rem; 
  text-align: center;
`;
export const CourseImage = styled.img`
  height: 8rem;
  width: 8rem;
  margin-bottom: 1rem;
`;
export const CourseDescription = styled.p`
  font-size: .875rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const CourseDuration = styled.span`
  font-size: .875rem;
  margin-bottom: 1rem;
  color: #5bb3aa;
`;

export const CardBottom = styled.div`
  margin-top: 0;
  text-align: center;
  
`;
export const CourseStartDate = styled.span`
  font-size: .875rem;
  font-weight: bold;
  color: #125c55;
  display: block;
  margin-bottom: 1rem;
`;

export const ApplyButton = styled.button`
  background-color: #256ce1;
  color: #fff;
  font-size: .875rem;
  border-radius: .25rem;
  padding: .625rem 1.5rem;
  border: none;
  cursor: pointer;
  line-height: 1;
  text-transform: uppercase;
  font-weight: bold;
`;


export const CourseRightSide = styled.div`
  max-width: 18rem;
  min-width: 18rem;
  padding: 2rem;
  @media (max-width: 1366px) {
    max-width: 15rem;
    min-width: 15rem;
  }
  @media (max-width: 991px) {
    display: none;
  }
`; 

