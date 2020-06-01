import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Card from "../Card";

import * as S from "./styled.js";

const CardsWrapper = ({ cards }) => (
  <S.Wrapper>
    {cards.map(card => (
      <Card element={Link} customProps={{ to: card.link }}>
        <h3>{card.title}</h3>
      </Card>
    ))}
  </S.Wrapper>
);

CardsWrapper.propTypes = {
  cards: PropTypes.array.isRequired,
};

CardsWrapper.defaultProps = {
  cards: [],
};

export default CardsWrapper;
