import styled from "styled-components";
import { MainContainer } from "../../styles/containers";
import { Paragraph, SpanBold } from "../../styles/fonts";
import { mediaSizes } from "../../styles/media";

export const ProjectsWrapper = styled.section`
  width: 100%;
  padding: 140px 0;
  background-color: #eee;
  color: #111;

  & ${MainContainer} {
    padding: 20px;

    @media screen and (min-width: ${mediaSizes.xl}) {
      padding: 0;
    }
  }
`;

export const ProjectsContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

  @media screen and (min-width: ${mediaSizes.med}) {
    flex-direction: row;
  }
`;

export const ProjectsContentText = styled.div`
  width: 100%;

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 45%;
  }
`;

export const ProjectsGrid = styled.div`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 560px);
  grid-row-gap: 30px;
  grid-column-gap: 30px;

  @media screen and (min-width: ${mediaSizes.med}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 560px);
  }

  @media screen and (min-width: ${mediaSizes.large}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 560px);
  }

  @media screen and (min-width: ${mediaSizes.xl}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 560px);
  }
`;

export const ProjectCard = styled.div`
  max-width: 370px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  justify-self: center;

  @media screen and (min-width: ${mediaSizes.large}) {
    width: unset;
    min-width: 300px;
  }
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

  &:hover,
  &:focus {
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
