import styled from "styled-components";
import { MainContainer } from "../../styles/containers";

export const StyledHeader = styled.header`
  padding: 10px 20px;
  background-color: #333;
  color: white;

  & ${MainContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const HeaderLogo = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export const HeaderNav = styled.nav``;

export const HeaderNavUL = styled.ul`
  list-style: none;
  display: flex;
`;

export const HeaderNavLI = styled.li`
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const HeaderNavLink = styled.a`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-out;

  &:hover {
    color: #0cc;
  }
`;
