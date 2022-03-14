import type { AppProps } from "next/app";
import Theme from "../app/styles/Theming";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;
