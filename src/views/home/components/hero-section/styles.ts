import { Typography } from "@/components/typography";
import { assetsLinks } from "@/utils/assetsLinks";
import { pxTo } from "@/utils/conversors/pxTo";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;

  background-image: url(${assetsLinks.images.pages.home.homeBgPattern001});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

export const Title = styled(Typography)`
  margin-top: ${pxTo("rem", 16)};
  max-width: ${pxTo("rem", 633)};
  width: 100%;
`;

export const Subtitle = styled(Typography)`
  margin-top: ${pxTo("rem", 58)};
`;

export const Description = styled(Typography)`
  line-height: 1.6;
  margin-top: ${pxTo("rem", 24)};
  max-width: ${pxTo("rem", 344)};
  width: 100%;
`;

export const HomeImage = styled.img`
  max-width: ${pxTo("rem", 691)};
  top: ${pxTo("rem", 109)};
  right: 0;
  position: absolute;
  z-index: 1;
`;
