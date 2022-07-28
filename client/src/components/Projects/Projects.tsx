import { MainContainer } from "../../styles/containers";
import { H2, Paragraph, SpanBold, SpanTag } from "../../styles/fonts";
import {
  Link,
  ProjectCard,
  ProjectCardContent,
  ProjectCardImage,
  ProjectCardLinks,
  ProjectCardTagWrapper,
  ProjectsContentText,
  ProjectsContentWrapper,
  ProjectsGrid,
  ProjectsWrapper,
} from "./Projects.styles";

import { NewWindowSVG } from "../NewWindowSVG";

import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <MainContainer>
        <ProjectsContentWrapper>
          <ProjectsContentText>
            <H2>Projects</H2>
            <Paragraph>
              Here are some of the projects that I have been working on, ranging from a
              full stack eCommerce platform to some basic HTML & CSS design-to-code
              examples.
            </Paragraph>
          </ProjectsContentText>
        </ProjectsContentWrapper>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectCardImage src={project.imageURL} alt={project.title} />

              <ProjectCardContent>
                <SpanBold>{project.title}</SpanBold>

                <ProjectCardLinks>
                  {project.liveURL !== "" && (
                    <Link href={project.liveURL} target="_blank">
                      Live Demo
                      <NewWindowSVG />
                    </Link>
                  )}
                  <Link href={project.gitHubURL} target="_blank">
                    GitHub
                    <NewWindowSVG />
                  </Link>
                </ProjectCardLinks>

                <Paragraph>{project.description}</Paragraph>

                <ProjectCardTagWrapper>
                  {project.tags.map((tag) => (
                    <SpanTag key={tag}>{tag}</SpanTag>
                  ))}
                </ProjectCardTagWrapper>
              </ProjectCardContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </MainContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
