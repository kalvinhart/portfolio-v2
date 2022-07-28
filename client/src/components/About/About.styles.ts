import styled from "styled-components";
import { Paragraph } from "../../styles/fonts";
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
  display: flex;
  justify-content: space-between;
`;

export const AboutContentText = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

export const AboutContentSkills = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;

  & ${Paragraph} {
    margin-bottom: 40px;
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
