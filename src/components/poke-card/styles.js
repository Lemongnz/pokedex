import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  /* height: 80px; */
`;

export const PokemonNameContainer = styled.div`
  color: #fff;
  max-width: 50%;
  overflow: hidden;
  text-transform: capitalize;
  font-weight: bold;
`;

export const PokemonImage = styled.img`
  width: 72px;
  height: 72px;
  max-width: 50%;
  overflow: hidden;
`;
