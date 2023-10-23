import { pxTo } from "@/utils/conversors/pxTo";
import styled, { css } from "styled-components";

export const Buttom = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    border: 1px solid ${theme.black100};
    border-radius: 32px;
    cursor: pointer;
    color: ${theme.black100};
    font-size: ${pxTo("rem", 16)};
    outline: ${theme.pink25}15;
    padding: ${pxTo("rem", 10)} ${pxTo("rem", 24)};
  `}
`;
