"use client";

import { notFound } from "next/navigation";
import useCampsiteQuery from "@/features/campsites/hooks/useCampsiteQuery";
import { TripForm } from "@/features/trips/TripForm";
import * as styles from "./CampsiteDetailPage.css";

function CampsiteDetailPage({ id }) {
  const { data: campsite, isPending, isError } = useCampsiteQuery(id);

  if (isPending) {
    return <p>캠핑장 정보를 불러오는 중입니다.</p>;
  }
  if (isError) {
    return <p>캠핑장 정보를 불러오지 못했습니다.</p>;
  }
  if (!campsite) {
    notFound();
  }

  return (
    <div className={styles.layout}>
      <section className={styles.content}>
        {campsite.imageUrl && (
          <img
            className={styles.image}
            src={campsite.imageUrl}
            alt={campsite.name}
          />
        )}
        <h1 className={styles.name}>{campsite.name}</h1>
        {campsite.intro && <p className={styles.intro}>{campsite.intro}</p>}
        <dl className={styles.info}>
          <dt>주소</dt>
          <dd>{campsite.address}</dd>
          <dt>업종</dt>
          <dd>{campsite.industries.join(", ")}</dd>
          <dt>시설</dt>
          <dd>{campsite.facilities.join(", ") || "정보 없음"}</dd>
          <dt>반려동물</dt>
          <dd>{campsite.petAllowed ? "함께 갈 수 있음" : "함께 갈 수 없음"}</dd>
        </dl>
      </section>
      <TripForm campsiteId={campsite.id} />
    </div>
  );
}

export default CampsiteDetailPage;
