import { style } from "@vanilla-extract/css";
import { desktopMinWidth, vars } from "@/styles/theme.css";

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: `${vars.space.stackL} ${vars.space.stackS}`,
  "@media": {
    [`screen and (min-width: ${desktopMinWidth})`]: {
      gridTemplateColumns: "repeat(4, 1fr)",
      columnGap: vars.space.stackM,
    },
  },
});
