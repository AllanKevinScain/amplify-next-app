import { CharacterInterface } from "@/types";

type ValuesType = Omit<CharacterInterface, "id" | "createdAt" | "updatedAt">;

interface UpdateCharacterInterface {
  id: string;
  values: Partial<ValuesType>;
}

export async function updateCharacter(
  props: UpdateCharacterInterface
): Promise<{ message: string }> {
  const { id, values } = props;
  const request = await fetch(
    `${process.env.BASE_API_URL}/api/characters/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        api_key: process.env.API_KEY || "",
      },
    }
  );

  const data = await request.json();
  return data;
}
