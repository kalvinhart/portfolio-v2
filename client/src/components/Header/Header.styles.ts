import styled from "styled-components";
import { MainContainer } from "../../styles/containers";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--header-height);
  padding: 10px 20px;
  display: flex;
  align-items: center;
  background-color: #111;
  color: white;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.05);

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
    margin-right: 20px;
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
