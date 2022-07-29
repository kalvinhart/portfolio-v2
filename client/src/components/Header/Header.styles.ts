import styled from "styled-components";
import { MainContainer } from "../../styles/containers";
import { mediaSizes } from "../../styles/media";

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 999;
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

export const BurgerMenuButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;

  @media screen and (min-width: ${mediaSizes.med}) {
    display: none;
  }
`;

export const Burger = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BurgerLines = styled.div`
  position: relative;

  width: 25px;
  height: 2px;
  background-color: white;

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: white;
    transition: all 0.2s ease-in-out;
  }

  &::before {
    top: 8px;
  }
  &::after {
    bottom: 8px;
  }

  &.show {
    visibility: hidden;

    &::before {
      visibility: visible;
      top: 0px;
      transform: rotate(-45deg);
    }
    &::after {
      visibility: visible;
      bottom: 0px;
      transform: rotate(45deg);
    }
  }
`;

export const HeaderNav = styled.nav`
  position: absolute;
  display: none;
  width: 100%;
  height: 180px;
  padding: 20px;
  top: 100%;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: #111;
  transition: height 0.2s ease-in-out;

  &.show {
    display: flex;
  }

  &::before {
    content: "";
    display: block;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);

    @media screen and (min-width: ${mediaSizes.med}) {
      display: none;
    }
  }

  @media screen and (min-width: ${mediaSizes.med}) {
    position: static;
    display: flex;
    height: unset;
    width: auto;
    padding: 0;
  }
`;

export const HeaderNavUL = styled.ul`
  z-index: 2;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline-start: 0;

  @media screen and (min-width: ${mediaSizes.med}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const HeaderNavLI = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 20px;

    @media screen and (min-width: ${mediaSizes.med}) {
      margin-bottom: 0;
      margin-right: 20px;
    }
  }
`;

export const HeaderNavLink = styled.a`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-out;

  &:hover {
    color: var(--clr-primary);
  }
`;
