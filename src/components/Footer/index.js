import React from "react";
import * as S from "./styled";

const Footer = () => (
  <footer>
    <S.Container>
      <S.Credits>
        Feito com{" "}
        <span role="img" aria-label="amor">
          💚
        </span>{" "}
        pela Família Marconi
      </S.Credits>
    </S.Container>
  </footer>
);

export default Footer;
