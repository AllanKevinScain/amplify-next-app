import { CharacterInterface } from "@/types";

export async function listCharacters(): Promise<CharacterInterface[]> {
  const request = await fetch(`${process.env.BASE_API_URL}/api/characters`, {
    method: "GET",
  });

  const data = await request.json();
  return data;
}
