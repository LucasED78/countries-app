import styled from "styled-components"

export const CountryInfoContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
  }
`

export const CountryInfoContent = styled.div`
  display: flex;
  flex-direction: column;
`