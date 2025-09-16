"use client";

import { CharacterInterface } from "@/types";

interface ListCharactersInterface {
  characters: CharacterInterface[];
  isLoading?: boolean;
}

export const ListCharacters = (props: ListCharactersInterface) => {
  const { characters = [], isLoading = false } = props;
  return (
    <div className="flex items-center justify-center w-full pt-[20px] pb-[10%]">
      <div className="grid grid-cols-3 gap-[14px]">
        {isLoading && <span className="text-[50px] animate-spin">+</span>}
        {!isLoading &&
          characters.map((character, i) => {
            const { id, image_url, name } = character;
            return (
              <div
                key={`${id}-${i}`}
                className="w-[175px] bg-neutral-400 rounded-xl border border-purple-800 p-[14px]"
              >
                <img
                  src={image_url}
                  alt={`Thumb nail character ${name}`}
                  className="object-cover"
                />
                <span>{name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};
