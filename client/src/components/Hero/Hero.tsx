import { MainContainer } from "../../styles/containers";
import { H1, SpanHeroTitle } from "../../styles/fonts";
import { HeroContentWrapper, HeroWrapper } from "./Hero.styles";

const Hero = () => {
  return (
    <HeroWrapper>
      <MainContainer>
        <HeroContentWrapper>
          <H1>Kalvin Hart</H1>
          <SpanHeroTitle>Full stack developer</SpanHeroTitle>
        </HeroContentWrapper>
      </MainContainer>
    </HeroWrapper>
  );
};

export default Hero;
