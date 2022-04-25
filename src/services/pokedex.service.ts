const BASE_URL_POKEDEX = "https://pokeapi.co/api/v2/pokemon";

export const getPaginated = (limit = 20) => {
  return fetch(BASE_URL_POKEDEX + `?limit=${limit}`)
    .then((result) => result.json())
    .then(async (jsonResult) => {
      const jsonResultResults: any[] = [];

      for (const { name, url } of jsonResult.results) {
        const id = getPokemonIdByUrl(url);

        const data = await getPokemonData(id);

        jsonResultResults.push({
          name,
          url,
          id,
          image: getPokemonImage(id),
          ...data,
        });
      }
      jsonResult.results = jsonResultResults;
      console.log(jsonResult);
      return jsonResult;
    });
};

const getPokemonData = (id: string) => {
  return fetch(BASE_URL_POKEDEX + `/${id}/`).then((result) => result.json());
};

const getPokemonIdByUrl = (url: string): string => url.split("/")[6];
const getPokemonImage = (id: string): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
