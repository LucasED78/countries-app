import styled from "styled-components";
import { EThemeMode } from "../../contexts/theme-context/typing";
import { TypographyProps } from "./typography.types";

export const TypographyContainer = styled.div<Omit<TypographyProps & { mode: EThemeMode }, 'children'>>`
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize as string]};
  font-weight: ${({ fontWeight }) => fontWeight};

  color: ${({ theme, mode }) => theme.colors[mode.toLowerCase()].text};
`