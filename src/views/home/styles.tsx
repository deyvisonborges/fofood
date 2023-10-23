import { pxTo } from "@/utils/conversors/pxTo";
import styled from "styled-components";

export const BackgroundPattern = styled.img`
  top: 0;
  right: -15%;
  position: absolute;
  z-index: -2;
`;


export const HomeImage = styled.img`
  max-width: ${pxTo('rem', 691)};
  right: 0;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`