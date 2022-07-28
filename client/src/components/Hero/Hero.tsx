import { MainContainer } from "../../styles/containers";
import { H1, SpanHeroTitle, SpanLarge, SpanPrimary } from "../../styles/fonts";
import { HeroContentWrapper, HeroWrapper } from "./Hero.styles";

const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <MainContainer>
        <HeroContentWrapper>
          <H1>
            Kalvin <SpanPrimary>Hart</SpanPrimary>
          </H1>
          <SpanHeroTitle>Full stack developer</SpanHeroTitle>
          <SpanLarge>React / TypeScript / Node / Express / MongoDB</SpanLarge>
        </HeroContentWrapper>
      </MainContainer>
    </HeroWrapper>
  );
};

export default Hero;
