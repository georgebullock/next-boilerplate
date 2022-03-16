import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../app/styles/theme";
import GlobalStyles from "./../app/styles/GlobalStyles";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
