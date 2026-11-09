import * as styles from "./Button.css";

function Button({ variant, ...restProps }) {
  return <button className={styles.button({ variant })} {...restProps} />;
}

export default Button;
