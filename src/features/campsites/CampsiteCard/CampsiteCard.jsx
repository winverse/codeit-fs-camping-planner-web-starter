import Link from "next/link";
import { PetBadge } from "@/features/campsites/PetBadge";
import * as styles from "./CampsiteCard.css";

function CampsiteCard({ campsite }) {
  return (
    <Link href={`/campsites/${campsite.id}`} className={styles.card}>
      <img
        className={campsite.imageUrl ? styles.image : styles.noImage}
        src={campsite.imageUrl ?? "/tent.svg"}
        alt=""
      />
      <h2 className={styles.name}>{campsite.name}</h2>
      <p className={styles.region}>
        {campsite.region} {campsite.city}
      </p>
      <p className={styles.industries}>{campsite.industries.join(", ")}</p>
      <PetBadge petAllowed={campsite.petAllowed} />
    </Link>
  );
}

export default CampsiteCard;
