import { css } from "styled-components";

const slopedSectionSetup = css`
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 100px;
  display: block;
  background-color: #fafafa;
`;

export const slopedSectionTop = css`
  &::before {
    ${slopedSectionSetup}

    top: -50px;
    transform: skewY(1deg);
  }
`;

export const slopedSectionBottom = css`
  &::after {
    ${slopedSectionSetup}

    bottom: -50px;
    transform: skewY(1deg);
  }
`;
