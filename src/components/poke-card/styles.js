import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 20px;
  width: 100%;
`;

export const PokemonImage = styled.img`
  width: 72px;
  height: 72px;
`;
