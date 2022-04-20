import { useEffect, useState } from "react";
import { getPaginated } from "../../services/pokedex.service";
import PokeCard from "../poke-card/poke-card";
import { Container } from "./styles";

function PokeGrid() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPaginated().then((response) => {
      setPokemons(response.results);
    });
  }, []);

  return (
    <Container>
      {pokemons?.map((pokemon: any) => (
        <PokeCard key={pokemon.id} pokemon={pokemon}></PokeCard>
      ))}
    </Container>
  );
}

export default PokeGrid;
