import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const button = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    borderRadius: vars.radius.m,
    fontWeight: vars.fontWeight.semibold,
    cursor: "pointer",
    ":disabled": {
      backgroundColor: vars.color.disabledBg,
      color: vars.color.textDisabled,
      cursor: "not-allowed",
    },
  },
  variants: {
    variant: {
      // 흰 글자와 브랜드 색의 대비가 3:1이라 큰 굵은 글자(19px·700)로 씁니다.
      primary: {
        height: vars.size.button,
        padding: `0 ${vars.space.blockPad}`,
        backgroundColor: vars.color.brand,
        color: vars.color.onBrand,
        fontSize: vars.fontSize.primaryButton,
        fontWeight: vars.fontWeight.bold,
        ":hover": { backgroundColor: vars.color.brandPressed },
      },
      secondary: {
        height: vars.size.buttonSmall,
        padding: `0 ${vars.space.stackM}`,
        backgroundColor: vars.color.bg,
        color: vars.color.text1,
        fontSize: vars.fontSize.sub,
        ":hover": { backgroundColor: vars.color.line },
      },
      danger: {
        height: vars.size.buttonSmall,
        padding: `0 ${vars.space.stackM}`,
        backgroundColor: vars.color.bg,
        color: vars.color.danger,
        fontSize: vars.fontSize.sub,
        ":hover": { backgroundColor: vars.color.dangerTint },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
