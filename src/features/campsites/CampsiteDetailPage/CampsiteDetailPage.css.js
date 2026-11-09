import { style } from "@vanilla-extract/css";
import { desktopMinWidth, vars } from "@/styles/theme.css";

export const layout = style({
  display: "grid",
  alignItems: "start",
  gap: vars.space.blockGap,
  margin: `0 ${vars.space.stackM}`,
  "@media": {
    [`screen and (min-width: ${desktopMinWidth})`]: {
      gridTemplateColumns: "3fr 2fr",
    },
  },
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.stackM,
  padding: vars.space.blockPad,
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.l,
});

export const image = style({
  display: "block",
  width: "100%",
  aspectRatio: "4 / 3",
  borderRadius: vars.radius.m,
  backgroundColor: vars.color.bg,
  objectFit: "cover",
});

export const name = style({
  fontSize: vars.fontSize.title,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.title,
  letterSpacing: vars.font.titleTracking,
});

export const intro = style({
  color: vars.color.text2,
});

export const info = style({
  display: "grid",
  gridTemplateColumns: "max-content 1fr",
  gap: `${vars.space.stackS} ${vars.space.stackM}`,
});
