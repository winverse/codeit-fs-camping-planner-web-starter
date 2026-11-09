import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: 0,
  minHeight: "100vh",
  backgroundColor: vars.color.bg,
  color: vars.color.text1,
  fontFamily: vars.font.family,
  fontSize: vars.fontSize.body,
  fontWeight: vars.fontWeight.regular,
  lineHeight: vars.lineHeight.body,
  letterSpacing: vars.font.tracking,
  wordBreak: "keep-all",
  overflowWrap: "anywhere",
  WebkitFontSmoothing: "antialiased",
});

globalStyle("h1, h2, h3, p, dl", {
  margin: 0,
});

globalStyle("h1, h2, h3", {
  textWrap: "balance",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button, input, textarea", {
  font: "inherit",
  color: "inherit",
  letterSpacing: "inherit",
});

globalStyle("dt", {
  color: vars.color.text2,
});

globalStyle("dd", {
  margin: 0,
});

globalStyle(":focus-visible", {
  outline: `2px solid ${vars.color.focus}`,
  outlineOffset: "2px",
});
