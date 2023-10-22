import { ReactNode } from "react";
import * as S from "./layout.styles";

type LayoutProps = { children: ReactNode };

export function Layout({ children }: LayoutProps) {
  return (
    <S.Wrapper>
      <S.Grid>{children}</S.Grid>
    </S.Wrapper>
  );
}
