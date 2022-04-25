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

export const PokemonTextContainer = styled.div`
  max-width: 50%;
  overflow: hidden;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;

  padding: 4px 2px;

  span {
    border: 1px solid #fff;
    font-size: 9px;
    padding: 3px;
    border-radius: 20px;
    color: #fff;
  }
`;

export const PokemonTypesContainer = styled.div`
  color: #000;
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  height: 80%;
`;

export const PokemonNameContainer = styled.div`
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  height: 20%;
`;

export const PokemonImageContainer = styled.div`
  max-width: 50%;
  overflow: hidden;
  background-color: #ffffff3d;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const PokemonImageLine = styled.div`
  background-color: ${(props) => props.color};
  width: 90px;
  height: 5px;
  position: absolute;
  z-index: 1;
`;

export const PokemonImageCircle = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: absolute;
  width: 25px;
  height: 25px;
  z-index: 1;
`;

export const PokemonImage = styled.img`
  width: 72px;
  height: 72px;
  z-index: 2;
`;
