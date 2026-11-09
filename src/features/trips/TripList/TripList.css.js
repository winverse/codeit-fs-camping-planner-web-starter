import { style } from "@vanilla-extract/css";
import { desktopMinWidth, vars } from "@/styles/theme.css";

export const list = style({
  display: "grid",
  margin: `0 ${vars.space.stackM}`,
  padding: `${vars.space.stackM} ${vars.space.blockPad} ${vars.space.stackS}`,
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.l,
  "@media": {
    [`screen and (min-width: ${desktopMinWidth})`]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      columnGap: vars.space.stackL,
    },
  },
});

export const empty = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: vars.space.stackS,
  margin: `0 ${vars.space.stackM}`,
  padding: vars.space.blockPad,
  backgroundColor: vars.color.surface,
  borderRadius: vars.radius.l,
});

export const link = style({
  color: vars.color.brandText,
  fontWeight: vars.fontWeight.semibold,
});
