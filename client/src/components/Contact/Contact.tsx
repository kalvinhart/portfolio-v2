import { MainContainer } from "../../styles/containers";
import { H2, Paragraph, SpanRegular } from "../../styles/fonts";
import { EmailSVG } from "../EmailSVG";
import { GitHubSVG } from "../GitHubSVG";
import { LinkedInSVG } from "../LinkedInSVG";
import { Link } from "../Projects/Projects.styles";
import {
  ContactContentWrapper,
  ContactLinks,
  ContactText,
  ContactWrapper,
} from "./Contact.styles";

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <MainContainer>
        <ContactContentWrapper>
          <ContactText>
            <H2>Contact Me</H2>
            <Paragraph>
              If you wish to get in contact with me, please choose from the options below.
            </Paragraph>
          </ContactText>

          <ContactLinks>
            <Link
              href="https://www.linkedin.com/in/kalvin-hart-a6ab1b206/"
              target="_blank"
            >
              <LinkedInSVG />
              <SpanRegular>LinkedIn</SpanRegular>
            </Link>
            <Link href="https://github.com/kalvinhart" target="_blank">
              <GitHubSVG />
              <SpanRegular>GitHub</SpanRegular>
            </Link>
            <Link href="mailto:kalvinhart@hotmail.co.uk" target="_blank">
              <EmailSVG />
              <SpanRegular>Email</SpanRegular>
            </Link>
          </ContactLinks>
        </ContactContentWrapper>
      </MainContainer>
    </ContactWrapper>
  );
};

export default Contact;
