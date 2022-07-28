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

import eShopImage from "../../images/eshop.png";
import { NewWindowSVG } from "../NewWindowSVG";

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
          <ProjectCard>
            <ProjectCardImage src={eShopImage} alt="eCommerce Store" />

            <ProjectCardContent>
              <SpanBold>eCommerce Store</SpanBold>

              <ProjectCardLinks>
                <Link href="https://mernestore.herokuapp.com/" target="_blank">
                  Live Demo
                  <NewWindowSVG />
                </Link>
                <Link href="https://github.com/kalvinhart/shop" target="_blank">
                  GitHub
                  <NewWindowSVG />
                </Link>
              </ProjectCardLinks>

              <Paragraph>
                A full stack application with several features, such as searching, sorting
                and filtering products with paginated results, integration with Stripe to
                take customer payments, search suggestions and more.
              </Paragraph>

              <ProjectCardTagWrapper>
                <SpanTag>React</SpanTag>
                <SpanTag>TypeScript</SpanTag>
                <SpanTag>Node/Express</SpanTag>
                <SpanTag>MongoDB</SpanTag>
              </ProjectCardTagWrapper>
            </ProjectCardContent>
          </ProjectCard>
        </ProjectsGrid>
      </MainContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
