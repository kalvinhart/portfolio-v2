import styled from "styled-components";
import { mediaSizes } from "../../styles/media";
import { slopedSectionTop } from "../../styles/mixins";
import { Link } from "../Projects/Projects.styles";

export const ContactWrapper = styled.section`
  position: relative;
  padding: 60px 0 80px;
  color: #111;

  ${slopedSectionTop}
`;

export const ContactContentWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.xl}) {
    padding: 0;
  }
`;

export const ContactText = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${mediaSizes.large}) {
    width: 45%;
  }
`;

export const ContactLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & ${Link} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #111;

    &:hover,
    &:focus {
      color: var(--clr-primary);
    }

    &:hover svg,
    &:focus svg {
      fill: var(--clr-primary);
    }

    & svg {
      width: 40px;
      margin-bottom: 10px;
      transition: fill 0.2s ease-out;
    }
  }
`;
