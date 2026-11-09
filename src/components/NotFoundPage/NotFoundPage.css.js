import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const title = style({
  padding: `${vars.space.stackL} ${vars.space.pageX} ${vars.space.stackM}`,
  fontSize: vars.fontSize.title,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.title,
  letterSpacing: vars.font.titleTracking,
});

export const block = style({
  margin: `0 ${vars.space.stackM}`,
  padding: vars.space.blockPad,
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.l,
});

export const link = style({
  color: vars.color.brandText,
  fontWeight: vars.fontWeight.semibold,
});
