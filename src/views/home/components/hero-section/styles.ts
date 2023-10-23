import { Typography } from "@/components/typography";
import { pxTo } from "@/utils/conversors/pxTo";
import styled from "styled-components";

export const Container = styled.section`
  height: fit-content;
  width: 100%;
`

export const Title = styled(Typography)`
  max-width: ${pxTo("rem", 633)};
  margin-top: ${pxTo('rem', 16)};
  width: 100%;
`;

export const Subtitle = styled(Typography)`
  margin-top: ${pxTo('rem', 58)};
`;


export const BackgroundPattern = styled.img`
  top: 0;
  right: 0;
  position: absolute;
  z-index: -2;
`;

export const HomeImage = styled.img`
  max-width: ${pxTo('rem', 691)};
  right: 0;
  position: absolute;
  z-index: -1;
`