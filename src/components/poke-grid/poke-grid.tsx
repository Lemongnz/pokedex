import { useEffect, useState } from "react";
import { getPaginated } from "../../services/pokedex.service";
import PokeCard from "../poke-card/poke-card";
import { Container } from "./styles";

function PokeGrid() {
  let offset = 0;
  let loading = false;
  const [pokemons, setPokemons] = useState([]);

  const loadMorePokemons = () => {
    if (loading) return;
    loading = true;
    getPaginated(30, offset).then((response) => {
      setPokemons((pkmns) => [...pkmns, ...response.results]);
      loading = false;
      offset += 30;
    });
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.scrollingElement.scrollTop + 1 >=
      e.target.scrollingElement.scrollHeight
    ) {
      loadMorePokemons();
    }
  };

  useEffect(() => {
    offset = 0;
    loadMorePokemons();
    window.addEventListener("scroll", (e) => {
      handleScroll(e);
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
