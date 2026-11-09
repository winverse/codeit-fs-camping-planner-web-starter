import Link from "next/link";
import { Panel } from "@/components/Panel";
import { CampsiteList } from "@/features/campsites/CampsiteList";
import * as styles from "./CampsitesPage.css";

function CampsitesPage({ pet }) {
  return (
    <Panel title="캠핑장 목록">
      <nav className={styles.filter}>
        <Link
          href="/"
          className={`${styles.filterLink} ${pet === undefined ? styles.active : ""}`}
        >
          전체
        </Link>
        <Link
          href="/?pet=true"
          className={`${styles.filterLink} ${pet ? styles.active : ""}`}
        >
          반려동물 가능
        </Link>
      </nav>
      <CampsiteList pet={pet} />
    </Panel>
  );
}

export default CampsitesPage;
