import { createGlobalStyle } from "styled-components";

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

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 100vh;

    /* Safari iOS bugfix */
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
      min-height: -webkit-fill-available;
    }
  }
  
  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 100%;
  }
`
