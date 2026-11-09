import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const header = style({
  position: "sticky",
  top: 0,
  zIndex: 5,
  backgroundColor: vars.color.bg,
});

export const headerInner = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: vars.size.content,
  height: vars.size.appbar,
  margin: "0 auto",
  padding: `0 ${vars.space.pageX}`,
});

export const logo = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.stackS,
  minHeight: vars.size.buttonSmall,
  fontWeight: vars.fontWeight.bold,
});

export const navLink = style({
  display: "inline-flex",
  alignItems: "center",
  minHeight: vars.size.buttonSmall,
  color: vars.color.brandText,
  fontSize: vars.fontSize.sub,
  fontWeight: vars.fontWeight.semibold,
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.blockGap,
  maxWidth: vars.size.content,
  margin: "0 auto",
  padding: `${vars.space.stackS} 0 ${vars.space.stackL}`,
});

// 불러오는 중·오류 문구처럼 클래스 없이 main에 바로 놓인 문단에 페이지 여백을 줍니다.
globalStyle(`${main} > p:not([class])`, {
  padding: `0 ${vars.space.pageX}`,
});

export const footer = style({
  padding: `${vars.space.stackL} ${vars.space.pageX}`,
  color: vars.color.text2,
  fontSize: vars.fontSize.caption,
  textAlign: "center",
});
