import styled from "styled-components";
import { Link } from "react-scroll"


export const Button = styled(Link).attrs(() => ({
  primary: "#01BF71" || "#010606",
  secondary: "#fff" || "#01BF71",
  big: "14px 48px" || "12px 30px",
  dark: "#010606" || "#fff",
  fontBig: "20px" || "16px",
}))`
  border-radius: 50px;
  background: ${(props) => props.primary};
  white-space: nowrap;
  padding: ${(props) => props.big};
  color: ${(props) => props.dark};
  font-size: ${(props) => props.fontBig};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${(props) => props.secondary};
  }
`;