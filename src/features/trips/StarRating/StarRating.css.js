import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const rating = style({
  display: "flex",
});

// 별점 입력은 값을 고르는 조작이라 브랜드 색으로 보입니다.
export const star = style({
  display: "grid",
  placeItems: "center",
  width: vars.size.buttonSmall,
  height: vars.size.buttonSmall,
  border: "none",
  borderRadius: vars.radius.s,
  background: "none",
  color: vars.color.brand,
  fontSize: vars.size.icon,
  cursor: "pointer",
  ":hover": {
    backgroundColor: vars.color.bg,
  },
});
