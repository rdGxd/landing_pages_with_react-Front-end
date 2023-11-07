import styled, { css } from "styled-components";

const titleSizes = {
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSizes[size](theme)}
    ${titleCase(uppercase)}
  `}
`;
