import styled, { css } from "styled-components";

export const Wrapper = styled.main(
  ({ theme }) => css`
    box-sizing: border-box;
    display: block;
    flex: 1;
    width: 100%;
    max-width: 198rem;
    margin: 0 auto;
    padding: 4rem 2rem 6rem;
  `,
);
