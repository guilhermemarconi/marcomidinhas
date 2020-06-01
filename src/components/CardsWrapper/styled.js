import styled from "styled-components";

import { spacing } from "../../styles/variables.js";

export const Wrapper = styled.div`
  display: flex;
  padding: ${spacing.medium} 0 ${spacing.large};
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  flex-wrap: nowrap;
`;
