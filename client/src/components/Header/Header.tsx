import { MainContainer } from "../../styles/containers";
import {
  HeaderLogo,
  HeaderNav,
  HeaderNavLI,
  HeaderNavLink,
  HeaderNavUL,
  StyledHeader,
} from "./Header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <MainContainer>
        <HeaderLogo>Kalvin Hart</HeaderLogo>
        <HeaderNav>
          <HeaderNavUL>
            <HeaderNavLI>
              <HeaderNavLink href="#about">About</HeaderNavLink>
            </HeaderNavLI>

            <HeaderNavLI>
              <HeaderNavLink href="#projects">Projects</HeaderNavLink>
            </HeaderNavLI>

            <HeaderNavLI>
              <HeaderNavLink href="#contact">Contact</HeaderNavLink>
            </HeaderNavLI>
          </HeaderNavUL>
        </HeaderNav>
      </MainContainer>
    </StyledHeader>
  );
};

export default Header;
