import styled from "styled-components";
import { Link } from "gatsby";

import {
  zIndex,
  breakpoints,
  spacing,
  color,
  functions,
} from "../../styles/variables";

export const Bar = styled.div`
  position: sticky;
  left: 0;
  bottom: 0;
  z-index: ${zIndex.maximum};
  display: flex;
  margin-top: ${spacing.small};
  background: ${color.grayLight};
  justify-content: space-around;
  filter: drop-shadow(
    0 -${spacing.smallest} 5px ${functions.rgba("#000", 0.3)}
  );

  @media screen and (${breakpoints.tabletLandscape}) {
    display: none;
  }
`;

export const HomeButton = styled(Link)`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${color.primary};
  align-items: center;
  justify-content: center;
  transform: translateY(-25%);
`;

export const IconButton = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: none;
  align-items: center;
  justify-content: center;
  appearance: none;
`;
