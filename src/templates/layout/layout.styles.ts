import { pxTo } from "@/utils/conversors/pxTo";
import styled from "styled-components";

export const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Grid = styled.section`
  max-width: ${pxTo("rem", 1144)};
  height: 100%;
  width: 100%;
`;
