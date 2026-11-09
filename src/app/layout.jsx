import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import { GlobalLayout } from "@/components/layouts/GlobalLayout";
import "@/styles/global.css";

export const metadata = {
  title: "캠핑 플래너",
  description: "캠핑장을 고르고 캠핑 계획을 세우는 화면",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
