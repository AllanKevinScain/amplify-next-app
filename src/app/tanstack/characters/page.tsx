import { listCharacters } from "@/app/actions";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { ClientPageCharacters } from "./client-page";

export default async function CharactersPage() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });

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
