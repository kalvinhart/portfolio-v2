import styled from "styled-components";
import { underLine } from "./mixins";

export const H1 = styled.h1`
  font-size: 76px;
`;

export const H2 = styled.h2`
  position: relative;
  font-size: 48px;
  margin-bottom: 40px;

  ${underLine}
`;

export const SpanHeroTitle = styled.span`
  font-size: 54px;
`;

export const SpanRegular = styled.span`
  font-size: 16px;
`;

export const SpanBold = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const SpanTag = styled.span`
  padding: 2px 8px;
  font-size: 14px;
  background-color: var(--clr-primary);
  color: white;
  border-radius: 100px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 25px;
  text-align: justify;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;
