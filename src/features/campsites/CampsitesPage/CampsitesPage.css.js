import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const filter = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.stackS,
});

export const filterLink = style({
  display: "inline-flex",
  alignItems: "center",
  minHeight: vars.size.buttonSmall,
  padding: `0 ${vars.space.stackM}`,
  borderRadius: vars.radius.pill,
  backgroundColor: vars.color.surface,
  boxShadow: `inset 0 0 0 1px ${vars.color.lineStrong}`,
  color: vars.color.text2,
  fontSize: vars.fontSize.sub,
  fontWeight: vars.fontWeight.semibold,
});

// 걸러 보기 칩의 선택 상태는 브랜드 색이 아니라 먹색 채움으로 보입니다.
export const active = style({
  backgroundColor: vars.color.text1,
  boxShadow: "none",
  color: vars.color.surface,
});
