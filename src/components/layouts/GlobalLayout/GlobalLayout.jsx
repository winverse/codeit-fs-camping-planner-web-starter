import Link from "next/link";
import { NoticeBar } from "@/components/NoticeBar";
import { AppProviders } from "@/providers";
import * as styles from "./GlobalLayout.css";

function GlobalLayout({ children }) {
  return (
    <AppProviders>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.svg" alt="" width={24} height={24} />
            캠핑 플래너
          </Link>
          <nav>
            <Link href="/trips" className={styles.navLink}>
              내 캠핑 계획
            </Link>
          </nav>
        </div>
      </header>
      <main className={styles.main}>
        <NoticeBar />
        {children}
      </main>
      <footer className={styles.footer}>자료 출처: 한국관광공사 고캠핑</footer>
    </AppProviders>
  );
}

export default GlobalLayout;
