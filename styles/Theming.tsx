import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { theme } from "./theme";

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
