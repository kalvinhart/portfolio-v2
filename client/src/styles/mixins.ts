import { css } from "styled-components";

export const sideLine = css`
  &::before {
    content: "";
    position: absolute;
    left: 0px;
    width: 5px;
    height: 100%;
    display: block;
    background-color: #0cc;
  }
`;

export const underLine = css`
  &::after {
    content: "";
    position: absolute;
    left: 0px;
    bottom: 0;
    width: 100%;
    height: 3px;
    display: block;
    background-color: #0cc;
  }
`;

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
    transform: skewY(1.8deg);
  }
`;

export const slopedSectionBottom = css`
  &::after {
    ${slopedSectionSetup}

    bottom: -50px;
    transform: skewY(1.8deg);
  }
`;
