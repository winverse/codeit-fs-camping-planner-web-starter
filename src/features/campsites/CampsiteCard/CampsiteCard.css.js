import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const card = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space.xs,
  minWidth: 0,
});

export const image = style({
  display: "block",
  width: "100%",
  aspectRatio: "4 / 3",
  marginBottom: vars.space.xs,
  borderRadius: vars.radius.m,
  backgroundColor: vars.color.bg,
  objectFit: "cover",
});

// 텐트 그림은 사진과 같은 칸의 가운데에 잘리지 않게 둡니다.
export const noImage = style([
  image,
  { padding: vars.space.stackL, objectFit: "contain" },
]);

export const name = style({
  fontSize: vars.fontSize.body,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: vars.lineHeight.strong,
  selectors: {
    [`${card}:hover &`]: {
      textDecoration: "underline",
    },
  },
});

export const region = style({
  color: vars.color.text2,
  fontSize: vars.fontSize.sub,
});

export const industries = style({
  color: vars.color.text3,
  fontSize: vars.fontSize.caption,
});
