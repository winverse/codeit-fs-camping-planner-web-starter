import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

// 화면 아래쪽에 떠 있어서, 알림이 나타나고 사라져도 아래 내용이 밀리지 않습니다.
export const region = style({
  position: "fixed",
  bottom: vars.space.stackL,
  left: "50%",
  zIndex: 10,
  width: "max-content",
  maxWidth: `calc(100% - ${vars.space.stackL})`,
  transform: "translateX(-50%)",
});

export const notice = style({
  padding: `${vars.space.stackM} ${vars.space.blockPad}`,
  borderRadius: vars.radius.m,
  backgroundColor: vars.color.brandTint,
  color: vars.color.brandTintText,
  fontSize: vars.fontSize.sub,
  fontWeight: vars.fontWeight.semibold,
});
