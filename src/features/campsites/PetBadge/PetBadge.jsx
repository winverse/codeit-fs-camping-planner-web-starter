import * as styles from "./PetBadge.css";

function PetBadge({ petAllowed }) {
  if (!petAllowed) {
    return null;
  }

  return <span className={styles.badge}>반려동물 가능</span>;
}

export default PetBadge;
