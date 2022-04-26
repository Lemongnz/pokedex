import { useMemo, useState } from "react";
import {
  Container,
  PokemonImage,
  PokemonImageLine,
  PokemonImageCircle,
  PokemonImageContainer,
  PokemonNameContainer,
  PokemonTextContainer,
  PokemonTypesContainer,
  ContainerDetails,
} from "./styles";

import { POKEMON_TYPE_COLORS } from "../../constants";
import { motion } from "framer-motion";

import './poke-card.css';


function PokeCard({ pokemon }) {
  const [isOpen, setIsOpen] = useState(false);

  const getColorByPokemonType = (type: string) =>
    POKEMON_TYPE_COLORS[type?.toLowerCase()];

  const backgroundColor = useMemo(
    () => getColorByPokemonType(pokemon?.types[0]?.type.name),
    [pokemon.types]
  );

  return (
    <>
      <motion.div layout className="pokeCard" transition={{ duration: 0.5 }} onClick={() => setIsOpen(true)} data-isOpen={isOpen}>
        <Container color={backgroundColor} order={pokemon.id} data-isOpen={isOpen}>
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

          <PokemonImageContainer data-isOpen={isOpen}>
            <PokemonImageLine data-isOpen={isOpen} color={backgroundColor}></PokemonImageLine>
            <PokemonImageCircle data-isOpen={isOpen} color={backgroundColor}></PokemonImageCircle>
            <PokemonImage src={pokemon.image} alt="" />
          </PokemonImageContainer>
        </Container>
      </motion.div>
      <motion.div layout className="pokeCardDetails" transition={{ delay: 0.5, duration: 0.5, type: "spring", bounce: 0.45 }} animate={{ y: 0 }} data-isOpen={isOpen}>
        <ContainerDetails data-isOpen={isOpen}>
          {JSON.stringify(pokemon.stats)}
        </ContainerDetails>
      </motion.div>
    </>
  );
}

export default PokeCard;
