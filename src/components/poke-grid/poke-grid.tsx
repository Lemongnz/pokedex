import { useEffect, useState } from "react";
import { getPaginated } from "../../services/pokedex.service";
import PokeCard from "../poke-card/poke-card";
import { Container } from "./styles";

function PokeGrid() {
  // let offset = 0;
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadMorePokemons = () => {
    if (loading) return;
    setLoading(true);
    getPaginated(30, offset).then((response) => {
      setPokemons((pkmns) => [...pkmns, ...response.results]);
      setLoading(false);
      setOffset(offset + 30);
    });
  };

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.scrollTop + 1 >=
      e.target.scrollHeight
    ) {
      loadMorePokemons();
    }
  };

  useEffect(() => {
    loadMorePokemons();
  }, []);

  return (

    < Container onScroll={handleScroll} >
      {pokemons?.map((pokemon: any) => (
        <PokeCard key={pokemon.id} pokemon={pokemon}></PokeCard>
      ))
      }
    </Container >
  );
}

export default PokeGrid;
