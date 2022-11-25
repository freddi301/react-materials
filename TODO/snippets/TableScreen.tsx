import React from "react";
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ApiContext } from "../App";
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Virtuoso } from "react-virtuoso";
import FavoriteIcon from "@mui/icons-material/Favorite";

export function TableScreen() {
  const api = React.useContext(ApiContext);
  const queryCLient = useQueryClient();
  const [viewRange, setViewRange] = React.useState({ start: 0, end: 10 });
  const pokemonListQuery = useQuery(
    ["pokemon-list", { ...viewRange }],
    async () => {
      return await api.getAllPokemons(viewRange.start, viewRange.end - viewRange.start);
    },
    {
      keepPreviousData: true,
    }
  );
  const favoritePokemonsListQuery = useQuery(["favorite-pokemons"], async () => {
    return api.getFavoritePokemons();
  });
  const favoritePokemonsSet = new Set(favoritePokemonsListQuery.data?.map(({ name }) => name));
  const favoritePokemonAddMutation = useMutation(
    async (name: string) => {
      await api.addFavoritePokemon(name);
    },
    {
      onSuccess() {
        queryCLient.invalidateQueries(["favorite-pokemons"]);
      },
    }
  );
  const favoritePokemonRemoveMutation = useMutation(
    async (name: string) => {
      await api.removeFavoritePokemon(name);
    },
    {
      onSuccess() {
        queryCLient.invalidateQueries(["favorite-pokemons"]);
      },
    }
  );
  return (
    <List sx={{ width: "100%" }}>
      <Virtuoso
        style={{ height: "80vh" }}
        totalCount={pokemonListQuery.data?.count}
        rangeChanged={({ startIndex, endIndex }) => {
          setViewRange({ start: startIndex, end: endIndex });
        }}
        itemContent={(index) => {
          const pokemon = pokemonListQuery.isPreviousData ? undefined : pokemonListQuery.data?.data[index - viewRange.start];
          const isFavorite = pokemon && favoritePokemonsSet.has(pokemon.name);
          return (
            <ListItem
              secondaryAction={
                <IconButton
                  onClick={() => {
                    if (pokemon) {
                      if (isFavorite) favoritePokemonRemoveMutation.mutate(pokemon.name);
                      else favoritePokemonAddMutation.mutate(pokemon.name);
                    }
                  }}
                >
                  <FavoriteIcon sx={{ color: isFavorite ? "red" : "gray" }} />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={pokemon?.name ?? "..."} secondary="Descrizione" />
            </ListItem>
          );
        }}
      />
    </List>
  );
}

export function TableScreen2() {
  const api = React.useContext(ApiContext);
  const pageSize = 20;
  const pokemonListQuery = useInfiniteQuery(
    ["pokemon-list", {}],
    async ({ pageParam = 0 }) => {
      return await api.getAllPokemons(pageParam * pageSize, pageSize);
    },
    {
      getNextPageParam(lastPage, pages) {
        if (pages.length * pageSize > pages[0].count) return;
        return pages.length;
      },
    }
  );

  return (
    <List sx={{ width: "100%" }}>
      <Virtuoso
        style={{ height: "80vh" }}
        totalCount={(pokemonListQuery.data?.pages.length ?? 1) * pageSize}
        endReached={() => {
          if (pokemonListQuery.hasNextPage) {
            pokemonListQuery.fetchNextPage();
          }
        }}
        itemContent={(index) => {
          const pokemon = pokemonListQuery.data?.pages[Math.trunc(index / pageSize)]?.data[index % pageSize];
          return (
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={pokemon?.name ?? "loading"} secondary="Descrizione" />
            </ListItem>
          );
        }}
      />
    </List>
  );
}
