import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    body {
      margin: 0;
      background: ${theme.colors.grey[0]};
    }

    #__next {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
      box-sizing: border-box;
    }
  `,
);

export default GlobalStyles;
