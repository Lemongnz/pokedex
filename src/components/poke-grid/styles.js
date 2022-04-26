import styled from "styled-components";

export const Container = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(auto-fill,90px);
  gap: 5px;
  padding: 10px;
  min-height: calc(100vh - 60px);
  position: relative;
  overflow: scroll; */

  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-rows: repeat(auto-fill,90px);
  gap: 5px;
  padding: 10px;
  max-height: calc(100vh - 60px);
  position: relative;
  grid-auto-rows: 90px;
  overflow: scroll;
  
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(6, 1fr);
  }

}
`;
