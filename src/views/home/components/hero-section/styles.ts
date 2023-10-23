import { Typography } from "@/components/typography";
import { assetsLinks } from "@/utils/assetsLinks";
import { pxTo } from "@/utils/conversors/pxTo";
import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    height: 100%;
    min-height: ${pxTo('rem', 860)};
    width: 100%;
    background-color: ${theme.colors.pink25};
    background-image: url(${assetsLinks.images.pages.home.homeBgPattern001});
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
  `}
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

export const ButtonsGroup = styled.div`
  display: flex;
  gap: ${pxTo("rem", 16)};
  margin-top: ${pxTo("rem", 32)};
`;

export const ButtonOrderNow = styled.button`
  ${({ theme }) => css`
    border: 0;
    border-radius: 32px;
    background: ${theme.colors.pink100};
    box-shadow: 0px 4px 14px 0px rgba(174, 19, 57, 0.34);
    color: #ffffff;
    padding: ${pxTo("rem", 20)} ${pxTo("rem", 40)};

    &:hover {
      box-shadow: 0px 4px 14px 0px rgba(174, 19, 57, 0.5);
      cursor: pointer;
    }
  `}
`;

export const ButtonLearnMore = styled.button`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.pink100};
    border-radius: 32px;
    background: transparent;
    color: ${theme.colors.pink100};
    padding: ${pxTo("rem", 20)} ${pxTo("rem", 40)};
  `}
`;
