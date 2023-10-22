import { pxTo } from "@/utils/conversors/pxTo";
import styled, { css } from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  gap: ${pxTo("rem", 8)};
`;

export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.black100};
    font-size: ${pxTo("rem", 16)};
  `}
`;
