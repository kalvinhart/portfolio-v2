import styled from "styled-components";
import { Paragraph } from "../../styles/fonts";
import { mediaSizes } from "../../styles/media";
import { slopedSectionBottom, slopedSectionTop } from "../../styles/mixins";

export const AboutWrapper = styled.section`
  position: relative;
  padding: 60px 0 80px;
  color: #111;

  ${slopedSectionTop}
  ${slopedSectionBottom}
`;

export const AboutContentWrapper = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${mediaSizes.large}) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${mediaSizes.xl}) {
    padding: 0;
  }
`;

export const AboutContentText = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 45%;
    margin-bottom: 0;
  }
`;

export const AboutContentSkills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & ${Paragraph} {
    display: inline-block;
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${mediaSizes.med}) {
    width: 45%;
  }
`;

export const AboutSkillsImg = styled.img`
  width: 35px;
  margin-right: 20px;
`;

export const AboutSkillsUL = styled.ul`
  list-style: none;
`;

export const AboutSkillsLI = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
