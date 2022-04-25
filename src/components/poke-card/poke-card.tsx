import { useMemo } from "react";
import {
  Container,
  PokemonImage,
  PokemonImageLine,
  PokemonImageCircle,
  PokemonImageContainer,
  PokemonNameContainer,
  PokemonTextContainer,
  PokemonTypesContainer,
} from "./styles";

import { POKEMON_TYPE_COLORS } from "../../constants";

function PokeCard({ pokemon }) {
  const getColorByPokemonType = (type: string) =>
    POKEMON_TYPE_COLORS[type?.toLowerCase()];

  const backgroundColor = useMemo(
    () => getColorByPokemonType(pokemon?.types[0]?.type.name),
    [pokemon.types]
  );

  return (
    <Container color={backgroundColor} order={pokemon.id}>
      <PokemonTextContainer>
        <PokemonNameContainer title={pokemon.name}>
          {pokemon.name}
        </PokemonNameContainer>

        <PokemonTypesContainer title={pokemon.name}>
          {pokemon?.types.map(({ type }: any, i) => (
            <span key={`tipes-${i}`}>{type.name}</span>
          ))}
        </PokemonTypesContainer>
      </PokemonTextContainer>

      <PokemonImageContainer>
        <PokemonImageLine color={backgroundColor}></PokemonImageLine>
        <PokemonImageCircle color={backgroundColor}></PokemonImageCircle>
        <PokemonImage src={pokemon.image} alt="" />
      </PokemonImageContainer>
    </Container>
  );
}

export default PokeCard;
