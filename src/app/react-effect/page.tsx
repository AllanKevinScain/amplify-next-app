"use client";

import { ListCharacters } from "@/components";
import { CharacterInterface } from "@/types";
import { useEffect, useState } from "react";

export default function ListagemSemCache() {
  const [characters, setCharacters] = useState<CharacterInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function listar() {
    setIsLoading(true);
    try {
      const res = await fetch("/api/listar-api", {
        method: "GET",
      });

      const data = await res.json();
      setCharacters(data);
    } catch (error) {
      console.log("🚀 ~ listar ~ error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    listar();
  }, []);

  return <ListCharacters characters={characters} isLoading={isLoading} />;
}
