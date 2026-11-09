import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackS,
  color: vars.color.text2,
  fontSize: vars.fontSize.sub,
  fontWeight: vars.fontWeight.semibold,
});

export const input = style({
  height: vars.size.button,
  padding: `0 ${vars.space.stackM}`,
  border: "1px solid transparent",
  borderRadius: vars.radius.m,
  backgroundColor: vars.color.bg,
  color: vars.color.text1,
  fontSize: vars.fontSize.body,
  fontWeight: vars.fontWeight.regular,
  ":focus": {
    outline: "none",
    borderColor: vars.color.focus,
    backgroundColor: vars.color.surface,
  },
});

// 오류가 있으면 포커스 중에도 칸을 오류 모양으로 둡니다.
export const inputError = style([
  input,
  {
    borderColor: vars.color.danger,
    backgroundColor: vars.color.dangerTint,
    ":focus": {
      borderColor: vars.color.danger,
      backgroundColor: vars.color.dangerTint,
    },
  },
]);

// 오류는 색만으로 알리지 않도록 문구 앞에 경고 표시(!)를 붙입니다.
export const error = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  color: vars.color.danger,
  fontSize: vars.fontSize.sub,
  "::before": {
    content: '"!"',
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
    width: vars.size.iconSmall,
    height: vars.size.iconSmall,
    borderRadius: vars.radius.pill,
    backgroundColor: vars.color.danger,
    color: vars.color.surface,
    fontSize: vars.fontSize.caption,
    fontWeight: vars.fontWeight.bold,
  },
});
