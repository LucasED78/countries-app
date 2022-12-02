import styled from "styled-components";
import { EThemeMode } from "../../contexts/theme-context/typing";

export const Input = styled.input<{ mode?: EThemeMode }>`
  width: 400px;

  padding: 16px 0;
  padding-left: 80px;
  padding-right: 40px;

  border: 0;
  border-radius: 6px;

  box-shadow: ${({ theme, mode = EThemeMode.Light }) => theme.boxShadow[mode.toLowerCase()]};
  
  background-color: ${({ theme, mode = EThemeMode.Light }) => theme.colors[mode.toLowerCase()].element};
  color: ${({ theme, mode = EThemeMode.Light }) => theme.colors[mode.toLowerCase()].input};

  font-weight: 600;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const InputContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  left: 40px;
`