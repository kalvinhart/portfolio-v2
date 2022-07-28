import styled from "styled-components";
import { Paragraph, SpanBold } from "../../styles/fonts";

export const ProjectsWrapper = styled.section`
  width: 100%;
  padding: 140px 0;
  background-color: #eee;
  color: #111;
`;

export const ProjectsContentWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const ProjectsContentText = styled.div`
  width: 45%;
`;

export const ProjectsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 560px);
  grid-row-gap: 30px;
  grid-column-gap: 30px;
`;

export const ProjectCard = styled.div`
  min-width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
`;

export const ProjectCardImage = styled.img`
  width: 300px;
  margin-bottom: 30px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.2s ease-out;
  color: var(--clr-primary);

  &:hover {
    text-decoration: underline;
    color: #111;
  }

  & svg {
    margin-left: 5px;
  }
`;

export const ProjectCardLinks = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  & ${Link}:not(:last-child) {
    margin-right: 20px;
  }
`;

export const ProjectCardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  & ${SpanBold} {
    margin-bottom: 10px;
  }

  & ${Paragraph} {
    margin-bottom: 20px;
  }
`;

export const ProjectCardTagWrapper = styled.div`
  display: flex;
  margin-top: auto;
  flex-wrap: wrap;
  align-items: center;
  min-height: 60px;

  & > *:not(:last-child) {
    margin-right: 5px;
  }
`;
