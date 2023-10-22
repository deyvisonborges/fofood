import { pxTo } from "@/utils/conversors/pxTo";
import styled, { css } from "styled-components";

export const Ul = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: ${pxTo("rem", 64)};
  /* width: 100%; */ // Com o layout estruturado, ativar para ficar fluido
`;

export const Li = styled.li`
  ${({ theme }) => css`
    color: ${theme.black100};
    font-size: ${pxTo("rem", 16)};
    list-style: none;
  `}
`;
