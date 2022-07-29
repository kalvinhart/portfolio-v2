import { MainContainer } from "../../styles/containers";
import { H2, Paragraph, SpanRegular } from "../../styles/fonts";
import {
  AboutContentSkills,
  AboutContentText,
  AboutContentWrapper,
  AboutSkillsImg,
  AboutSkillsLI,
  AboutSkillsUL,
  AboutWrapper,
} from "./About.styles";

import HTMLLogo from "../../images/html.png";
import CSSLogo from "../../images/css.png";
import JSLogo from "../../images/js.png";
import TSLogo from "../../images/typescript.png";
import ReactLogo from "../../images/react.png";
import ReduxLogo from "../../images/redux.png";
import JestLogo from "../../images/jest.png";
import RTLLogo from "../../images/rtl.png";
import NodeLogo from "../../images/node.png";
import MongoLogo from "../../images/mongodb.png";

const About = () => {
  return (
    <AboutWrapper id="about">
      <MainContainer>
        <AboutContentWrapper>
          <AboutContentText>
            <H2>About Me</H2>
            <Paragraph>
              I consider myself a lifetime learner with a passion for web development,
              that began at the age of 11 when I was tasked to created a website in an IT
              class.
            </Paragraph>
            <Paragraph>
              Fast-forward 20+ years and I have found myself in the perfect position for a
              career change, to finally pursue the passion that has existed all these
              years.
            </Paragraph>
            <Paragraph>
              Since July 2020, I have followed self-directed study using various resources
              such as Udemy courses, official documentation, Stackoverflow and YouTube, to
              name just a few. These resources armed me with the knowledge to enable me to
              begin creating my own projects and continue to sharpen these skills.
            </Paragraph>
            <Paragraph>
              I am now looking for an opportunity to put these skills to use in a
              professional environment and continue on my journey as a developer.
            </Paragraph>
          </AboutContentText>

          <AboutContentSkills>
            <Paragraph>The skills I have acquired are as follows:</Paragraph>
            <AboutSkillsUL>
              <AboutSkillsLI>
                <AboutSkillsImg src={HTMLLogo} alt="HTML" />
                <SpanRegular>HTML</SpanRegular>
              </AboutSkillsLI>
              <AboutSkillsLI>
                <AboutSkillsImg src={CSSLogo} alt="CSS" />
                <SpanRegular>CSS</SpanRegular>
              </AboutSkillsLI>
              <AboutSkillsLI>
                <AboutSkillsImg src={JSLogo} alt="JavaScript" />
                <SpanRegular>JavaScript</SpanRegular>
              </AboutSkillsLI>
              <AboutSkillsLI>
                <AboutSkillsImg src={TSLogo} alt="TypeScript" />
                <SpanRegular>TypeScript</SpanRegular>
              </AboutSkillsLI>
              <AboutSkillsLI>
                <AboutSkillsImg src={ReactLogo} alt="React" />
                <SpanRegular>React</SpanRegular>
              </AboutSkillsLI>
              <AboutSkillsLI>
                <AboutSkillsImg src={ReduxLogo} alt="Redux" />
                <SpanRegular>Redux</SpanRegular>
              </AboutSkillsLI>
              <AboutSkillsLI>
                <AboutSkillsImg src={JestLogo} alt="Jest" />
                <SpanRegular>Jest</SpanRegular>
              </AboutSkillsLI>
              <AboutSkillsLI>
                <AboutSkillsImg src={RTLLogo} alt="React Testing Library" />
                <SpanRegular>React Testing Library</SpanRegular>
              </AboutSkillsLI>
              <AboutSkillsLI>
                <AboutSkillsImg src={NodeLogo} alt="Node and Express" />
                <SpanRegular>Node/Express</SpanRegular>
              </AboutSkillsLI>
              <AboutSkillsLI>
                <AboutSkillsImg src={MongoLogo} alt="Mongo DB" />
                <SpanRegular>MongoDB</SpanRegular>
              </AboutSkillsLI>
            </AboutSkillsUL>
          </AboutContentSkills>
        </AboutContentWrapper>
      </MainContainer>
    </AboutWrapper>
  );
};

export default About;
