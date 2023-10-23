"use client";

import styled, { css } from "styled-components";

export const Container = styled.nav`
  align-items: center;
  display: flex;
  gap: 3.4rem;
  height: 88px;
  width: 100%;
`;

export const Line = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black10};
    height: 26px;
    width: 1px;
  `}
`;
