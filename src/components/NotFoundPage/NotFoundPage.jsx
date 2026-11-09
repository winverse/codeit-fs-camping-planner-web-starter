import Link from "next/link";
import * as styles from "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <>
      <h1 className={styles.title}>페이지를 찾을 수 없습니다.</h1>
      <div className={styles.block}>
        <Link href="/" className={styles.link}>
          캠핑장 목록 보기
        </Link>
      </div>
    </>
  );
}

export default NotFoundPage;
