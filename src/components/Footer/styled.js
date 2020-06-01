import styled from "styled-components";
import { spacing, font, color } from "../../styles/variables";

export const Container = styled.footer`
  padding: ${spacing.small};
  text-align: center;
`;

export const Credits = styled.p`
  color: ${color.gray};
  font-family: ${font.family.sansSerif};
  font-size: ${font.size.small};
`;
