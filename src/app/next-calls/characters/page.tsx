import { listCharacters } from "@/app/actions";
import { ClientPageCharacters } from "./client-page";

export default async function CharactersPage() {
  const data = await listCharacters();

  return <ClientPageCharacters characters={data} />;
}
