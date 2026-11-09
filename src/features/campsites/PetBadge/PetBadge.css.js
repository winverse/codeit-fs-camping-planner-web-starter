import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

// 배지 색은 뜻마다 하나입니다. 반려동물 가능은 안내(info) 색입니다.
export const badge = style({
  display: "inline-flex",
  alignItems: "center",
  height: vars.size.badge,
  padding: `0 ${vars.space.stackS}`,
  borderRadius: vars.radius.s,
  backgroundColor: vars.color.infoTint,
  color: vars.color.infoTintText,
  fontSize: vars.fontSize.caption,
  fontWeight: vars.fontWeight.semibold,
  lineHeight: 1,
});
