import { MyFavorites } from "../my-favorites";
import * as S from "./menu.styles";

export function Menu() {
  return (
    <S.Ul>
      <S.Li>Home</S.Li>
      <S.Li>About</S.Li>
      <S.Li>Pages</S.Li>
      <S.Li>Menu</S.Li>
      <S.Li>Blog</S.Li>

      <MyFavorites />
    </S.Ul>
  );
}
