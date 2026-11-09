import * as styles from "./Panel.css";

function Panel({ title, children }) {
  return (
    <section className={styles.panel}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </section>
  );
}

export default Panel;
