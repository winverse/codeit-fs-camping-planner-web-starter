import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const panel = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackM,
  margin: `0 ${vars.space.stackM}`,
  padding: vars.space.blockPad,
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.l,
});

export const title = style({
  fontSize: vars.fontSize.h2,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.h2,
});
