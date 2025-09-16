"use client";

import { ListCharacters } from "@/components";
import { CharacterInterface } from "@/types";

interface ClientPageCharactersInterface {
  characters: CharacterInterface[];
}

export const ClientPageCharacters = (props: ClientPageCharactersInterface) => {
  const { characters } = props;

  return <ListCharacters characters={characters} />;
};
