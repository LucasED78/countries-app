import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 40px;

  @media screen and (max-width: 600px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 20px;
  }
`