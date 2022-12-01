import styled from "styled-components";
import { EThemeMode } from "../../contexts/theme-context/typing";

export const Nav = styled.nav<{ mode: EThemeMode }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  background-color: ${({ theme, mode }) => theme.colors[mode.toLowerCase()].element};

  box-shadow: ${({ theme, mode }) => theme.boxShadow[mode.toLowerCase()]};
  padding: 20px 60px;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`