import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackM,
  padding: vars.space.blockPad,
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.l,
});

export const title = style({
  fontSize: vars.fontSize.h2,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.h2,
});

export const field = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackS,
  color: vars.color.text2,
  fontSize: vars.fontSize.sub,
  fontWeight: vars.fontWeight.semibold,
});

export const textarea = style({
  padding: vars.space.stackM,
  border: "1px solid transparent",
  borderRadius: vars.radius.m,
  backgroundColor: vars.color.bg,
  color: vars.color.text1,
  fontSize: vars.fontSize.body,
  fontWeight: vars.fontWeight.regular,
  resize: "vertical",
  ":focus": {
    outline: "none",
    borderColor: vars.color.focus,
    backgroundColor: vars.color.surface,
  },
});

export const preview = style({
  color: vars.color.text2,
  fontSize: vars.fontSize.sub,
});
