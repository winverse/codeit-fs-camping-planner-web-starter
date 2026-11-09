import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const title = style({
  padding: `${vars.space.stackL} ${vars.space.pageX} ${vars.space.stackM}`,
  fontSize: vars.fontSize.title,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.title,
  letterSpacing: vars.font.titleTracking,
});
