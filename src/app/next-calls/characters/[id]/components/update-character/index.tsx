"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { characterSchema, InferTypeCharacterSchema } from "@/schemas";

interface UpdateCharacterInterface {
  onUpdateCharacter: (_: InferTypeCharacterSchema) => Promise<void>;
}

export const UpdateCharacter = (props: UpdateCharacterInterface) => {
  const { onUpdateCharacter } = props;
  const { handleSubmit, register, reset } = useForm({
    resolver: yupResolver(characterSchema),
  });

  async function handleUpdateCharacter(values: InferTypeCharacterSchema) {
    await onUpdateCharacter(values);
    reset();
  }

  return (
    <form
      className="flex flex-col gap-[14px] border rounded-md p-[14px]"
      onSubmit={handleSubmit(handleUpdateCharacter)}
    >
      <input
        {...register("name")}
        type="text"
        placeholder="Digite o nome"
        className="border-b"
      />
      <input
        {...register("age")}
        type="number"
        placeholder="Digite a idade"
        className="border-b"
      />
      <input
        {...register("wand")}
        type="text"
        placeholder="Digite a varinha"
        className="border-b"
      />
      <button type="submit" className="border rounded-md">
        Salvar
      </button>
    </form>
  );
};
