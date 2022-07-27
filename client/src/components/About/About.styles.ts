import styled from "styled-components";
import { slopedSectionBottom, slopedSectionTop } from "../../styles/mixins";

export const AboutWrapper = styled.section`
  position: relative;
  padding: 40px 0;
  color: #111;

  ${slopedSectionTop}
  ${slopedSectionBottom}
`;
