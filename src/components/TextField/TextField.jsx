import * as styles from "./TextField.css";

function TextField({ label, error, ...restProps }) {
  return (
    <label className={styles.field}>
      {label}
      <input
        className={error ? styles.inputError : styles.input}
        {...restProps}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
}

export default TextField;
