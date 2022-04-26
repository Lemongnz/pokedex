import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  
  &[data-isOpen="true"] {
    height: 40%;
    border-radius: 0;
    padding-bottom: 30px;
  }
`;

export const ContainerDetails = styled.div`
  padding: 10px;
  overflow: hidden;
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
  gap: 10px;
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
  /* height: 80%; */
`;

export const PokemonNameContainer = styled.div`
  color: #fff;
  text-transform: capitalize;
  font-weight: bold;
  /* height: 20%; */
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
  height: 80px;
  width: 80px;

  &[data-isOpen="true"] {
    background: linear-gradient(180deg,#ff022e 50%,#ffffff 50%);
    box-shadow: inset -3px -4px 23px -10px #222;
    height: 150px;
    width: 150px;
  }
`;

export const PokemonImageLine = styled.div`
  background-color: ${(props) => props.color};
  width: 84px;
  height: 4px;
  position: absolute;
  /* z-index: 1; */

  &[data-isOpen="true"] {
    background-color: #ffffff;
    border: 3px solid #000;
    width: 150px;
  }
`;

export const PokemonImageCircle = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: absolute;
  width: 25px;
  height: 25px;
  z-index: 1;

  &[data-isOpen="true"] {
    border: solid 5px;
    background-color: #ffffff;
    height: 35px;
    width: 35px;
  }
`;

export const PokemonImage = styled.img`
  width: 70%;
  height: 70%;
  z-index: 2;
  filter: drop-shadow(2px 2px 1px #222);
`;
