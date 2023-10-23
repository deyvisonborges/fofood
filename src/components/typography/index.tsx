import * as S from "./styles";

import { theme } from "@/layout/theme";

export type VariantKeys = keyof (typeof theme.fonts)[number]["variants"];

export type TypographyProps = {
  children: string;
  variant: VariantKeys;
  color?: keyof typeof theme.colors;
};

export function Typography({
  children,
  variant = "body-2-regular",
  ...props
}: TypographyProps) {
  return (
    <S.Typography variant={variant} {...props}>
      {children}
    </S.Typography>
  );
}
