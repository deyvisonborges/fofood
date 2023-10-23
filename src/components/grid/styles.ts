import { pxTo } from "@/utils/conversors/pxTo";
import styled from "styled-components";

export const Container = styled.article`
  max-width: ${pxTo("rem", 1144)};
  position: relative;
  height: fit-content;
  width: 100%;
`;
