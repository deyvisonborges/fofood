import styled, { css } from "styled-components";
import { TypographyProps, VariantKeys } from ".";
import { fontweights, theme } from "@/layout/theme";

function renderVariant(variant: VariantKeys) {
  const data = theme.fonts
    .map((t) => t.variants[variant])
    .find((v) => ({ ...v, weight: theme }));

  return css`
    font-family: ${data?.fontFamily}, sans-serif;
    font-size: ${data?.size};
    font-weight: ${fontweights[data?.type as never]};
    /* letter-spacing: ${data?.letterSpacing};  Corrigir depois */
    /* line-height: ${data?.lineHeight === "auto" ? "normal" : data?.lineHeight}; */
  `;
}

export const Typography = styled.h1<TypographyProps>`
  ${({ variant, color }) => css`
    ${!!color && `color: ${theme.colors[color]}`};
    ${renderVariant(variant)};
  `}
`;
