import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto-fill, 90px);
  gap: 5px;

  padding: 10px;
  height: calc(100vh - 60px);

  div {
  }
`;
