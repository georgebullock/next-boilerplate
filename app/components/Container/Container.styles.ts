import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    box-sizing: border-box;
    width: 100%;
    color: ${theme.colors.grey[100]};
  `,
);
