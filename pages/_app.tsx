import type { AppProps } from "next/app";
import Theme from "../app/styles/Theming";

function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default App;
