import styled from "styled-components";
import {Link} from "react-scroll"

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
    height: 5rem;
    margin-top: -5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 5rem;
    z-index: 1;
    width: 100%;
    padding: 0 1.5rem;
    max-width: 1100px
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -1.25rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 5rem;
`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }

    &:hover {
        color: #15cdfc;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavLogo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-self: flex-start;
    margin-left: 1.5rem;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 1.5rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled.button`
    border-radius: .25rem;
    background: #256ce1;
    padding: .625rem 1.375rem;
    color: #fff;
    font-size: .875rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010666;
    }
`;
