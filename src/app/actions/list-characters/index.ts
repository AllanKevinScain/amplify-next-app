import { CharacterInterface } from "@/types";

export async function listCharacters(): Promise<CharacterInterface[]> {
  const request = await fetch(
    "https://harry-potter-api-phi.vercel.app/api/characters",
    {
      method: "GET",
    }
  );

  const data = await request.json();
  return data;
}
