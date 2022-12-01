import styled, { createGlobalStyle } from "styled-components";
import { EThemeMode } from "./contexts/theme-context/typing";
import { Theme } from './theme'

export const GlobalStyle = createGlobalStyle<{ mode: EThemeMode, theme: Theme }>`
  body {
    background-color: ${({ theme, mode }) => theme.colors[mode.toLowerCase() as keyof Theme['colors']].background};
    font-family: 'Nunito Sans';
  }

  * { box-sizing: border-box; }
`

export const Container = styled.main`
  padding: 0 60px;
  min-height: 100vh;
`