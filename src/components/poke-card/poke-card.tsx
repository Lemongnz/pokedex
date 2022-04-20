import { useMemo } from "react";
import { Container, PokemonImage } from "./styles";

import { POKEMON_TYPE_COLORS } from "../../constants";

function PokeCard({ pokemon }) {
  const getColorByPokemonType = (type: string) =>
    POKEMON_TYPE_COLORS[type?.toLowerCase()];

  const backgroundColor = useMemo(
    () => getColorByPokemonType(pokemon?.types[0]?.type.name),
    [pokemon.types]
  );

  return (
    <Container color={backgroundColor}>
      {pokemon.name}
      <PokemonImage src={pokemon.image} alt="" />
    </Container>
  );
}

export default PokeCard;
