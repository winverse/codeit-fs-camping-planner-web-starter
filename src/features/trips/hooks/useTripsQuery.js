import { useQuery } from "@tanstack/react-query";
import { getTrips } from "@/lib/api";
import { queryKeys } from "@/lib/queryKeys";

function useTripsQuery() {
  return useQuery({
    queryKey: queryKeys.trips.all(),
    queryFn: getTrips,
  });
}

export default useTripsQuery;
