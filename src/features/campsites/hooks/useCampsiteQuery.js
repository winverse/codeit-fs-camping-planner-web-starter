import { useQuery } from "@tanstack/react-query";
import { getCampsite } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";

function useCampsiteQuery(id) {
  return useQuery({
    queryKey: queryKeys.campsites.detail(id),
    queryFn: () => getCampsite(id),
  });
}

export default useCampsiteQuery;
