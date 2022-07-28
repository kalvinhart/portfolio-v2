import { MainContainer } from "../../styles/containers";
import { SpanCopyright, SpanPrimary } from "../../styles/fonts";
import { EmailSVG } from "../EmailSVG";
import { GitHubSVG } from "../GitHubSVG";
import { LinkedInSVG } from "../LinkedInSVG";
import { Link } from "../Projects/Projects.styles";
import {
  FooterContent,
  FooterLogo,
  FooterNav,
  FooterNavLI,
  FooterNavUL,
  FooterSocials,
  StyledFooter,
} from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <MainContainer>
        <FooterLogo>
          Kalvin <SpanPrimary>Hart</SpanPrimary>
        </FooterLogo>
        <FooterContent>
          <FooterNav aria-label="Footer Navigation">
            <FooterNavUL>
              <FooterNavLI>
                <Link href="#hero">Home</Link>
              </FooterNavLI>
              <FooterNavLI>
                <Link href="#about">About</Link>
              </FooterNavLI>
              <FooterNavLI>
                <Link href="#projects">Projects</Link>
              </FooterNavLI>
              <FooterNavLI>
                <Link href="#contact">Contact</Link>
              </FooterNavLI>
            </FooterNavUL>
          </FooterNav>

          <FooterSocials>
            <Link href="https://github.com/kalvinhart">
              <GitHubSVG />
            </Link>
            <Link href="https://www.linkedin.com/in/kalvin-hart-a6ab1b206/">
              <LinkedInSVG />
            </Link>
            <Link href="mailto:kalvinhart:hotmail.co.uk">
              <EmailSVG />
            </Link>
          </FooterSocials>
        </FooterContent>
        <SpanCopyright>&copy; Copyright 2022 Kalvin Hart</SpanCopyright>
      </MainContainer>
    </StyledFooter>
  );
};

export default Footer;
