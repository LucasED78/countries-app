import styled from "styled-components";
import { EThemeMode } from "../../contexts/theme-context/typing";
import { ButtonProps } from "./button.types";

export const Button = styled.button<Pick<ButtonProps, 'padding'> & { mode?: EThemeMode }>`
  display: flex;
  align-items: center;
  gap: 8px;

  padding: ${({ theme, padding = 'MD' }) => theme.button.padding[padding]};

  background-color: ${({ theme, mode = EThemeMode.Light }) => theme.colors[mode].element};
  box-shadow: ${({ theme, mode = EThemeMode.Light }) => theme.boxShadow[mode]};
  color: ${({ theme, mode = EThemeMode.Light }) => theme.colors[mode].text};

  border: 0;
  border-radius: 6px;

  cursor: pointer;
`