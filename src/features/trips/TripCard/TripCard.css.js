import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const card = style({
  display: "flex",
  alignItems: "flex-start",
  gap: vars.space.stackM,
  minHeight: vars.size.row,
  padding: `${vars.space.rowPy} 0`,
});

export const image = style({
  flexShrink: 0,
  width: vars.size.thumbnail,
  height: vars.size.thumbnail,
  borderRadius: vars.radius.s,
  backgroundColor: vars.color.bg,
  objectFit: "cover",
});

export const noImage = style([
  image,
  { padding: vars.space.stackM, objectFit: "contain" },
]);

export const body = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space.xs,
  minWidth: 0,
});

export const name = style({
  fontSize: vars.fontSize.body,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.strong,
});

// 상태마다 배지 색이 다릅니다.
// 가고 싶음은 후보(회색), 예약함은 확정(브랜드), 다녀옴은 완료(성공), 취소함은 불가(오류)입니다.
export const status = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    height: vars.size.badge,
    padding: `0 ${vars.space.stackS}`,
    borderRadius: vars.radius.s,
    fontSize: vars.fontSize.caption,
    fontWeight: vars.fontWeight.semibold,
    lineHeight: 1,
  },
  variants: {
    status: {
      wish: {
        backgroundColor: vars.color.bg,
        color: vars.color.text2,
      },
      booked: {
        backgroundColor: vars.color.brandTint,
        color: vars.color.brandTintText,
      },
      done: {
        backgroundColor: vars.color.successTint,
        color: vars.color.successTintText,
      },
      canceled: {
        backgroundColor: vars.color.dangerTint,
        color: vars.color.dangerTintText,
      },
    },
  },
});

export const people = style({
  color: vars.color.text2,
  fontSize: vars.fontSize.sub,
});

export const memo = style({
  color: vars.color.text2,
  fontSize: vars.fontSize.sub,
});

export const actions = style({
  display: "grid",
  gridAutoFlow: "column",
  gridAutoColumns: "1fr",
  gap: vars.space.stackS,
  alignSelf: "stretch",
  marginTop: vars.space.stackS,
});

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
