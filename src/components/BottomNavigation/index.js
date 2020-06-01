import React from "react";

import * as S from "./styled";

import HomeIcon from "../../icons/home.svg";
import HashtagIcon from "../../icons/hashtag.svg";
import SearchIcon from "../../icons/search.svg";

const ICON_SIZE = 20;

const BottomNavigation = () => (
  <S.Bar>
    <S.IconButton>
      <img src={HashtagIcon} width={ICON_SIZE} alt="Tags" />
    </S.IconButton>
    <S.HomeButton to="/" title="Marcomidinhas">
      <img src={HomeIcon} width={ICON_SIZE} alt="Página inicial" />
    </S.HomeButton>
    <S.IconButton>
      <img src={SearchIcon} width={ICON_SIZE} alt="Buscar" />
    </S.IconButton>
  </S.Bar>
);

export default BottomNavigation;
