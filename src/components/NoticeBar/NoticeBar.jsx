"use client";

import { useNoticeContext } from "@/contexts/NoticeContext";
import * as styles from "./NoticeBar.css";

function NoticeBar() {
  const { notice } = useNoticeContext();

  return (
    <div className={styles.region} role="status">
      {notice && <p className={styles.notice}>{notice}</p>}
    </div>
  );
}

export default NoticeBar;
