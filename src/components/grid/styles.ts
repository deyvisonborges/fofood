import { pxTo } from "@/utils/conversors/pxTo";
import styled from "styled-components";

export const Container = styled.article`
  padding: 0 ${pxTo(`rem`, 150)};
  position: relative;
  height: fit-content;
  width: 100%;
`;
