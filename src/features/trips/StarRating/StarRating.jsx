import * as styles from "./StarRating.css";

const STARS = [1, 2, 3, 4, 5];

function StarRating({ value, onChange, disabled }) {
  return (
    <div className={styles.rating}>
      {STARS.map((star) => (
        <button
          key={star}
          type="button"
          className={styles.star}
          disabled={disabled}
          onClick={() => onChange(star)}
        >
          {value !== null && star <= value ? "★" : "☆"}
        </button>
      ))}
    </div>
  );
}

export default StarRating;
