import { NormalizeStyles } from "@/layout/normalize";
import { theme } from "@/layout/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import "../../public/assets/css/fonts.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NormalizeStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
