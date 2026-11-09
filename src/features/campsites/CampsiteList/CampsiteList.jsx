"use client";

import { CampsiteCard } from "@/features/campsites/CampsiteCard";
import useCampsitesQuery from "@/features/campsites/hooks/useCampsitesQuery";
import * as styles from "./CampsiteList.css";

function CampsiteList({ pet }) {
  const { data, isPending, isError } = useCampsitesQuery(pet);

  if (isPending) {
    return <p>캠핑장 목록을 불러오는 중입니다.</p>;
  }
  if (isError) {
    return <p>캠핑장 목록을 불러오지 못했습니다.</p>;
  }

  return (
    <div className={styles.grid}>
      {data.map((campsite) => (
        <CampsiteCard key={campsite.id} campsite={campsite} />
      ))}
    </div>
  );
}

export default CampsiteList;
