import { listCharacters } from "@/app/actions";
import { getQueryClient } from "@/helpers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { ClientPageCharacters } from "./client-page";

export default async function CharactersPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["characters-next-calls"],
    queryFn: listCharacters,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientPageCharacters />
    </HydrationBoundary>
  );
}
