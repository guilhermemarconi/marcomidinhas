import { Link } from "gatsby";

import styled from "styled-components";
import { color, spacing, font, breakpoint } from "../../styles/variables";

export const Header = styled.div`
  display: none;
  padding: ${spacing.small};
  color: white;
  background: ${color.primaryLight};
  align-content: center;
  justify-content: center;

  @media screen and (${breakpoint.tabletLandscape}) {
    display: flex;
  }
`;

export const LogoLink = styled(Link)`
  color: white;
  font-family: ${font.family.sansSerif};
  font-size: ${font.size.larger};
  text-decoration: none;
  line-height: 1;
`;
