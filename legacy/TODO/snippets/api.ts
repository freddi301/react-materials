import { PokemonClient } from "pokenode-ts";

export type Api = {
  getAllPokemons(offset: number, limit: number): Promise<{ count: number; data: Array<{ name: string }> }>;
  getFavoritePokemons(): Promise<Array<{ name: string }>>;
  addFavoritePokemon(name: string): Promise<void>;
  removeFavoritePokemon(name: string): Promise<void>;
};

export function createDefaultApi(pokemonCLient: PokemonClient, localStorageKey: string): Api {
  function loadFavoritePokemons() {
    return JSON.parse(localStorage.getItem(localStorageKey) ?? "[]") as Array<{ name: string }>;
  }
  function saveFavoritePokemons(favoritePokemons: Array<{ name: string }>) {
    localStorage.setItem(localStorageKey, JSON.stringify(favoritePokemons));
  }
  return {
    async getAllPokemons(offset, limit) {
      const { count, results } = await pokemonCLient.listPokemons(offset, limit);
      return {
        count,
        data: results.map(({ name }) => {
          return { name };
        }),
      };
    },
    async addFavoritePokemon(name) {
      const favoritePokemons = loadFavoritePokemons();
      saveFavoritePokemons(favoritePokemons.some((pokemon) => pokemon.name === name) ? favoritePokemons : [...favoritePokemons, { name }]);
    },
    async getFavoritePokemons() {
      return loadFavoritePokemons();
    },
    async removeFavoritePokemon(name) {
      const favoritePokemons = loadFavoritePokemons();
      saveFavoritePokemons(favoritePokemons.filter((n) => n.name !== name));
    },
  };
}
