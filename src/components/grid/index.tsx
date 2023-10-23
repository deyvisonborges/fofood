import { ReactNode } from "react";
import * as S from "./styles";

type UIGridProps = {
  children: ReactNode;
};

export function UIGrid({ children }: UIGridProps) {
  return <S.Container>{children}</S.Container>;
}
