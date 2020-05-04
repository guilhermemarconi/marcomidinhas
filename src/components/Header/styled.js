import { Link } from "gatsby"

import styled from "styled-components"
import { color } from "../../styles/variables"

export const Container = styled.div`
  display: flex;
  /* padding:  */
  color: white;
  background: ${color.primaryLight};
  justify-content: space-between;
`

export const LogoLink = styled(Link)`
  color: white;
  text-decoration: none;
`
