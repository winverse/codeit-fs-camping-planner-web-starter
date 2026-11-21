import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTrip } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";

function useCreateTripMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTrip,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.trips.all() }),
  });
}

export default useCreateTripMutation;
