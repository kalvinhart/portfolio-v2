import { useState } from "react";
import { MainContainer } from "../../styles/containers";
import { SpanPrimary } from "../../styles/fonts";
import {
  Burger,
  BurgerLines,
  BurgerMenuButton,
  HeaderLogo,
  HeaderNav,
  HeaderNavLI,
  HeaderNavLink,
  HeaderNavUL,
  StyledHeader,
} from "./Header.styles";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleShowNav = () => setShowNav((prev) => !prev);

  const closeNav = () => setShowNav(false);

  return (
    <StyledHeader>
      <MainContainer>
        <HeaderLogo>
          Kalvin <SpanPrimary>Hart</SpanPrimary>
        </HeaderLogo>

        <BurgerMenuButton aria-label="Open navigation menu" onClick={toggleShowNav}>
          <Burger>
            <BurgerLines className={showNav ? "show" : ""} />
          </Burger>
        </BurgerMenuButton>

        <HeaderNav className={showNav ? "show" : ""}>
          <HeaderNavUL>
            <HeaderNavLI>
              <HeaderNavLink href="#about" onClick={closeNav}>
                About
              </HeaderNavLink>
            </HeaderNavLI>

            <HeaderNavLI>
              <HeaderNavLink href="#projects" onClick={closeNav}>
                Projects
              </HeaderNavLink>
            </HeaderNavLI>

            <HeaderNavLI>
              <HeaderNavLink href="#contact" onClick={closeNav}>
                Contact
              </HeaderNavLink>
            </HeaderNavLI>
          </HeaderNavUL>
        </HeaderNav>
      </MainContainer>
    </StyledHeader>
  );
};

export default Header;
