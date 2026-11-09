import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTrip } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";

function useUpdateTripMutation(id) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (input) => updateTrip(id, input),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.trips.all() });
    },
  });
}

export default useUpdateTripMutation;
