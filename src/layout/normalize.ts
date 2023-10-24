import { createGlobalStyle, css } from "styled-components";

export const NormalizeStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  
  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.pink50};
      font-family: Figtree, Fredoka, sans-serif;
    `}
  }
`;
