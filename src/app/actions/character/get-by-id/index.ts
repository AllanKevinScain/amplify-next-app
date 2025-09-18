import { CharacterInterface } from "@/types";

export async function getCharacterById(
  id: string
): Promise<CharacterInterface> {
  const request = await fetch(
    `${process.env.BASE_API_URL}/api/characters/${id}`,
    {
      method: "GET",
      cache: "force-cache",
      next: { tags: ["update-character", "update-character-name"] },
    }
  );

  const data = await request.json();
  return data;
}
