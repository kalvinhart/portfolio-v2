import styled from "styled-components";
import { MainContainer } from "../../styles/containers";
import { SpanCopyright } from "../../styles/fonts";
import { mediaSizes } from "../../styles/media";
import { underLine } from "../../styles/mixins";
import { Link } from "../Projects/Projects.styles";

export const StyledFooter = styled.footer`
  padding: 40px 0;
  width: 100%;
  background-color: #252525;

  & ${MainContainer} {
    padding: 20px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: ${mediaSizes.xl}) {
      padding: 0;
    }
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
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.med}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterNav = styled.nav``;

export const FooterNavUL = styled.ul`
  margin-bottom: 20px;
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${mediaSizes.med}) {
    padding-inline-start: 40px;
    margin-bottom: 0;
  }
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
