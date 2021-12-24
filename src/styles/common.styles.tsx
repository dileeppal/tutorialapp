import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  background-color: #eef0f3;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ProfileWrapGroup = styled.div`
    display: flex;
`;

export const ContentArea = styled.div`
    background-color: #fff;
    box-shadow: 0px 2px 80px rgba(66,66,66,0.08);
    border-radius: 0.625rem;
    padding: 3.5rem;

    @media (max-width: 991px) {
        padding: 2rem;
    }

    > * {
        margin-bottom: 1.5rem;
    }
    ul, ol {
        padding-left: 1.5rem;
    }
`;

export const PageWrapGroup = styled.div`
    flex: auto;
    overflow: hidden; 
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
    border-radius: 0.625rem;
`;

export const ForumRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -.75rem;
    margin-right: -.75rem;
    @media (max-width: 767px) {
        margin-left: -.5rem;
        margin-right: -.5rem;
    }
`;
 
export const ForumColumn = styled.div`
    margin: .75rem;
    width: calc(100% - 1.5rem);
    @media (max-width: 1365px) {
        width: 50%;
    }
    @media (max-width: 767px) { 
        width: 100%;
    }
`;

export const ForumFilter = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-width: 100%;
    width: 100%;
    padding: .75rem;
    @media (max-width: 767px) {
        padding: 0 .5rem;
        margin-bottom: .5rem;
    }
`;

export const ForumFilterSortBy = styled.div`
    position: relative;
    width: 15rem;
    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: .5rem;
    }
    &:after {
        content: "";
        position: absolute;
        top: calc(50% - .25rem);
        right: 1rem;
        border-bottom: .1rem solid #000;
        border-right: .1rem solid #000;
        width: .4rem;
        height: .4rem;
        transform: rotate(45deg);
        pointer-events: none;
    }
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    flex: auto;
`;

export const FilterSearch = styled.input`
    width: 18rem;
    background-color: #fff;
    border: 1px solid #EBEBEB;
    box-shadow: 0px 2px 4px rgb(169 169 169 / 18%);
    border-radius: .5rem;
    height: 3rem;
    padding: .5rem 1.25rem;
    font-size: 1rem;
    outline: none !important;
    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const SelectCategory = styled.select`
    appearance: none;
    width: 100%;
    background-color: #fff;
    border: 1px solid #EBEBEB;
    box-shadow: 0px 2px 4px rgb(169 169 169 / 18%);
    border-radius: .5rem;
    height: 3rem;
    padding: .5rem 1.25rem;
    font-size: 1rem;
    outline: none !important;
`;

export const CategoryOption = styled.option`
    
`;

export const InnerContainer = styled.div`
    flex: 1 0 0%;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    @media (max-width: 991px) {
        padding: 1.5rem;
        min-height: calc(100vh - 4.625rem);
    } 
`;

export const PageHeading = styled.h1`
    color: #000;
    font-size: 2rem;
    margin-bottom: 2rem;
    line-height: 1;
    @media (max-width: 480px) {
        font-size: 1.75rem;
    }
`;

export const PageSubHeading = styled.h2`
    color: #000;
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1;
    @media (max-width: 480px) {
        font-size: 1.25rem;
    }
`;

export const PageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -.75rem;
    > div {
        margin: .75rem;
        width: calc(33.33% - 1.5rem);
        @media (max-width: 1366px) {
            width: calc(50% - 1.5rem);
        }
        @media (max-width: 767px) {
            margin: .5rem;
            width: calc(100% - 1rem);
        }
    }
    @media (max-width: 767px) {
        margin: -.5rem;
    }
`;

export const PostCard = styled.div`
    background: #fff;
    display: flex;
    box-shadow: 0px 2px 80px rgba(66, 66, 66, 0.08);
    border-radius: 1rem;
    padding: 2.5rem;
    @media (max-width: 991px) {
        padding: 1.25rem;
    }
`;

export const CardTitle = styled.h2`
    font-size: 1.25rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: .625rem;
    @media (max-width: 991px) {
        font-size: 1.125rem;
    }
`;

export const CardImage = styled.img`
    height: 3.75rem;
    width: 3.75rem;
    border: 1px solid #CACACA;
    border-radius: .375rem;
    margin-right: 1.5rem;
    @media (max-width: 991px) {
        margin-right: 1rem;
    }
`;

export const CardDescription = styled.p`
    font-size: .875rem;
    margin-bottom: 1rem;
    color: #A2A2C2;
    @media (max-width: 991px) {
        font-size: .75rem;
    }
`;

export const CardDuration = styled.span`
    font-size: .875rem;
    color: #5bb3aa;
    display: block;
    font-weight: 600;
    margin-bottom: .25rem;
`;

export const CardBottom = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardStartDate = styled.span`
    font-size: 1rem;
    color: #A2A2C2;
    font-weight: 600;
    @media (max-width: 991px) {
        font-size: .75rem;
    }
`;

export const ApplyButton = styled.button`
    background-color: #7755E2;
    color: #fff;
    font-size: 1rem; 
    border-radius: 10rem;
    padding: .625rem 1.5rem;
    border: none;
    cursor: pointer;
    line-height: 1;    
    font-weight: 500;
    @media (max-width: 991px) {
        font-size: .75rem; 
        padding: .5rem 1rem;
    }
`;

export const PageRightSide = styled.div`
    max-width: 24.75rem;
    min-width: 24.75rem;
    margin-left: 1.625rem;
    @media (max-width: 1440px) {
        max-width: 20rem;
        min-width: 20rem;
    }
    @media (max-width: 991px) {
        display: none; 
        padding: 2rem 1.5rem;      
    }
`;

export const SocialDropDown = styled.div`
    position: relative;
    float: right;
    span {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0.625rem 1.25rem;
        background-color: #7755e2;
        border-radius: 2rem;
        height: 2.5rem;
        font-size: 1rem;
        font-weight: normal;
        color: #FFF;
        svg {
            display: block;
            height: 100%;
            width: 100%;
            fill: #FFF;
            margin-right: .5rem;
        }
    }
`;

export const SocialDropDownIcon = styled.svg`
    cursor: pointer;
    display: block;
    
`;

export const SocialDropDownList = styled.ul`
    display: none;
    position: absolute;
    top: 100%;
    width: 10rem;
    right: 0;
    background-color: #FFF;
    padding: .5rem 0;
    list-style: none;
    margin-top: 1.5rem;
    box-shadow: 0px 2px 80px rgb(66 66 66 / 8%);
    border-radius: .625rem;
    z-index: 10;
    &.opened {
        display: block;
    }
`;

export const SocialDropDownItem = styled.li`
    text-decoration: none;
    font-size: 1rem;
    color: #000;
    font-weight: 500;
    display: block;
    padding: .625rem 1.5rem;
    &:hover {
        background-color: rgb(237 237 237 / 50%);
    }
    svg {
        width: 1rem;
        height: 1rem;
        vertical-align: middle;
        margin-right: .5rem;
    }
`;
