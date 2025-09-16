"use client";

import { listCharacters } from "@/app/actions";
import { ListCharacters } from "@/components";
import { useQuery } from "@tanstack/react-query";

export const ClientPageCharacters = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["characters-next-calls"],
    queryFn: listCharacters,
  });

  return <ListCharacters characters={data || []} isLoading={isLoading} />;
};
