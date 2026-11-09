import { TripList } from "@/features/trips/TripList";
import * as styles from "./TripsPage.css";

function TripsPage() {
  return (
    <>
      <h1 className={styles.title}>내 캠핑 계획</h1>
      <TripList />
    </>
  );
}

export default TripsPage;
