import styled from "styled-components";
import { EThemeMode } from "../../contexts/theme-context/typing";
import { modeTransitionStyles } from "../../styles";
import Typography from "../typography";

export const CardContainer = styled.div<{ mode?: EThemeMode }>`
  display: flex;
  flex-direction: column;

  box-shadow: ${({ theme, mode = EThemeMode.Light }) => theme.boxShadow[mode]};
  border-radius: 6px;

  cursor: pointer;

  ${modeTransitionStyles}
`

export const CardImage = styled.img`
  width: 100%;

  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  height: 150px;

  @media screen and (max-width: 450px) {
    height: 200px;
    grid-template-columns: 1fr;
  }
`

export const CardBody = styled.div<{ mode?: EThemeMode }>`
  flex: 1 1 auto;
  height: 100%;

  padding: 16px 24px;
  padding-bottom: 20px;

  background-color: ${({ theme, mode = EThemeMode.Light }) => theme.colors[mode.toLowerCase()].element};
  
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

  ${modeTransitionStyles}
`

export const CardGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  column-gap: 60px;
  row-gap: 60px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`
export const CardTitle = styled.div`
  padding: 10px 0;
`