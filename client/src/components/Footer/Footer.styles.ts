import styled from "styled-components";
import { MainContainer } from "../../styles/containers";
import { SpanCopyright } from "../../styles/fonts";
import { underLine } from "../../styles/mixins";
import { Link } from "../Projects/Projects.styles";

export const StyledFooter = styled.footer`
  padding: 40px 0;
  width: 100%;
  background-color: #252525;

  & ${MainContainer} {
    display: flex;
    flex-direction: column;
  }

  & ${SpanCopyright} {
    align-self: center;
  }
`;

export const FooterLogo = styled.span`
  position: relative;
  display: block;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;

  ${underLine}
`;

export const FooterContent = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterNav = styled.nav``;

export const FooterNavUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FooterNavLI = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  & ${Link} {
    color: white;
    transition: color 0.2s ease-out;

    &:hover,
    &:focus {
      color: var(--clr-primary);
    }
  }
`;

export const FooterSocials = styled.div`
  display: flex;

  & svg {
    width: 30px;
    fill: white;
    transition: fill 0.2s ease-out;
  }

  & ${Link} {
    &:not(:last-child) {
      margin-right: 10px;
    }
    &:hover svg,
    &:focus svg {
      fill: var(--clr-primary);
    }
  }
`;
