import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 100px;
  
  @media screen and (max-width: 800px) {
    gap: 30px;
    flex-direction: column;
  }
`

export const ContentContainer = styled.div`
  width: 50%;

  display: inline-flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%:
`