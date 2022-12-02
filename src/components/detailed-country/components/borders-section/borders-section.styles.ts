import styled from "styled-components"

export const BordersContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-top: 20px;

  & > span {
    flex: 0 0 22%;
  }

  @media screen and (max-width: 800px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const BordersContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`