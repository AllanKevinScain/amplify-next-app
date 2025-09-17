import { updateCharacter } from "@/app/actions";
import { Details, UpdateCharacter, UpdateNameCharacter } from "./components";
import { InferTypeCharacterSchema } from "@/schemas";
import { revalidateTag } from "next/cache";

interface CharactersPageInterface {
  params: Promise<{ id: string }>;
}

export default async function CharactersPage(props: CharactersPageInterface) {
  const { id } = await props.params;

  async function onUpdateCharacter(values: InferTypeCharacterSchema) {
    "use server";
    await updateCharacter({ id, values });

    revalidateTag("update-character");
  }

  return (
    <section className="flex flex-col items-center justify-center pt-[20px] pb-[10%] gap-[14px]">
      <Details id={id} />

      <UpdateNameCharacter id={id} />

      <UpdateCharacter onUpdateCharacter={onUpdateCharacter} />
    </section>
  );
}
