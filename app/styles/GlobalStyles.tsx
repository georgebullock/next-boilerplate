import { createGlobalStyle, css } from "styled-components";
// eslint-disable-next-line import/no-unresolved
import { ThemeType } from "../types/styled";

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>(
  ({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
    }

    html {
      font-size: 62.5%;
    }

    body {
      text-rendering: geometricPrecision;
      font-size: 1rem;
      color: ${theme.colors.grey[100]};
    }
  `,
);

export default GlobalStyles;
