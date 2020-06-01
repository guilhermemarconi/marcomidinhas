import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  border,
  breakpoint,
  shadow,
  functions,
  transition,
  spacing,
} from "../../styles/variables.js";

const cardStyles = `
  display: block;
  min-width: 200px;
  padding: ${spacing.small};
  border-radius: ${border.radius.large};

  @media screen and (${
    breakpoint.desktop
  }) and (prefers-reduced-motion: no-preference) {
    box-shadow: 0 0.5rem ${shadow.medium} ${functions.rgba(`#000`, 0.3)};
    transition: all ${transition.duration.medium} ${transition.easing};
    transform: translateY(0) scale(1);
    will-change: transform, box-shadow;

    &:hover {
      box-shadow: 0 0.5rem ${shadow.large} ${functions.rgba(`#000`, 0.3)};
      transform: translateY(-1rem) scale(1.05);
    }
  }
`;

const Card = props => {
  const S =
    typeof props.element === "string"
      ? styled[props.element]`
          ${cardStyles}
        `
      : styled(props.element)`
          ${cardStyles}
        `;

  return <S {...props.customProps}>{props.children}</S>;
};

Card.propTypes = {
  element: PropTypes.oneOf(["string", "node"]).isRequired,
  children: PropTypes.node.isRequired,
  // customProps: PropTypes.Object,
};

Card.defaultProps = {
  element: "div",
  customProps: {},
};

export default Card;
