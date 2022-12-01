import styled from "styled-components";
import { EThemeMode } from "../../contexts/theme-context/typing";
import { modeTransitionStyles } from "../../styles";
import { TypographyProps } from "./typography.types";

export const TypographyContainer = styled.div<Omit<TypographyProps & { mode: EThemeMode }, 'children'>>`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize as string]};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ theme, lineHeight }) => theme.lineHeight[lineHeight as string]};

  color: ${({ theme, mode }) => theme.colors[mode.toLowerCase()].text};

  ${modeTransitionStyles}
`