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
  PokemonNumberContainer,
  ContainerDetails,
  BackRowButton,
} from "./styles";

import { AiOutlineArrowLeft } from 'react-icons/ai';

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

  const openCard = (e) => {
    setIsOpen(true);
    e.stopPropagation();
    e.preventDefault();
  };

  const closeCard = (e) => {
    setIsOpen(false);
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <>
      <motion.div layout className="pokeCard" transition={{ duration: 0.3 }} onClick={openCard} data-isopen={isOpen}>
        <Container color={backgroundColor} order={pokemon.id} data-isopen={isOpen}>
          {isOpen ? <BackRowButton onClick={closeCard}><AiOutlineArrowLeft /></BackRowButton> : null}

          <PokemonTextContainer>
            {isOpen ?
              <PokemonNumberContainer title={pokemon.name} data-isopen={isOpen}>
                #{pokemon.id}
              </PokemonNumberContainer>
              : null
            }

            <PokemonNameContainer title={pokemon.name} data-isopen={isOpen}>
              {pokemon.name}
            </PokemonNameContainer>

            <PokemonTypesContainer title={pokemon.name} data-isopen={isOpen}>
              {pokemon?.types.map(({ type }: any, i) => (
                <span key={`tipes-${i}`}>{type.name}</span>
              ))}
            </PokemonTypesContainer>
          </PokemonTextContainer>

          <PokemonImageContainer data-isopen={isOpen}>
            <PokemonImageLine data-isopen={isOpen} color={backgroundColor}></PokemonImageLine>
            <PokemonImageCircle data-isopen={isOpen} color={backgroundColor}></PokemonImageCircle>
            <PokemonImage src={pokemon.image} alt="" />
          </PokemonImageContainer>
        </Container>
      </motion.div>

      <motion.div layout className="pokeCardDetails" transition={{ delay: 0.15, duration: 0.3, type: "spring", bounce: 0.45 }} animate={{ y: 0 }} data-isopen={isOpen}>
        <ContainerDetails data-isopen={isOpen}>
          {JSON.stringify(pokemon.stats)}
        </ContainerDetails>
      </motion.div>
    </>
  );
}

export default PokeCard;
