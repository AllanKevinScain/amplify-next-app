import { updateCharacter } from "@/app/actions";
import { revalidateTag } from "next/cache";

interface UpdateNameCharacterInterface {
  id: string;
}

export const UpdateNameCharacter = (props: UpdateNameCharacterInterface) => {
  const { id } = props;
  async function updateName(value: FormData) {
    "use server";

    if (id) {
      const name = value.get("name")?.toString();
      if (!name) return;

      await updateCharacter({
        id,
        values: { name },
      });
      revalidateTag("update-character-name");
    }
  }

  return (
    <form
      className="flex flex-col gap-[14px] border rounded-md p-[14px]"
      action={updateName}
    >
      <input
        type="text"
        name="name"
        placeholder="Nome do personagem"
        className="border-b"
      />
      <button type="submit" className="border rounded-md">
        Salvar
      </button>
    </form>
  );
};
