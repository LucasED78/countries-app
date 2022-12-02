import styled from "styled-components";
import { EThemeMode } from "../../contexts/theme-context/typing";

export const Container = styled.div`
  width: 200px;
  position: relative;

  cursor: pointer;
`

export const SelectedItem = styled.div<{ mode?: EThemeMode }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 24px;

  border-radius: 6px;

  background-color: ${({ theme, mode = EThemeMode.Light }) => theme.colors[mode].element};
  box-shadow: ${({ theme, mode = EThemeMode.Light }) => theme.boxShadow[mode]};
`

export const SelectList = styled.div<{ mode?: EThemeMode, isOpen?: boolean }>`
  width: 100%;

  padding: 20px 24px;

  position: absolute;
  top: 60px;

  border-radius: 6px;

  background-color: ${({ theme, mode = EThemeMode.Light }) => theme.colors[mode].element};
  box-shadow: ${({ theme, mode = EThemeMode.Light }) => theme.boxShadow[mode]};

  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};

  transition: all .5s;
`