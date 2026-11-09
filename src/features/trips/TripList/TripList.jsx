"use client";

import Link from "next/link";
import useTripsQuery from "@/features/trips/hooks/useTripsQuery";
import { TripCard } from "@/features/trips/TripCard";
import * as styles from "./TripList.css";

function TripList() {
  const { data, isPending, isError } = useTripsQuery();

  if (isPending) {
    return <p>캠핑 계획을 불러오는 중입니다.</p>;
  }
  if (isError) {
    return <p>캠핑 계획을 불러오지 못했습니다.</p>;
  }
  if (data.length === 0) {
    return (
      <div className={styles.empty}>
        <p>아직 세운 캠핑 계획이 없습니다.</p>
        <Link href="/" className={styles.link}>
          캠핑장 목록 보기
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {data.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  );
}

export default TripList;
