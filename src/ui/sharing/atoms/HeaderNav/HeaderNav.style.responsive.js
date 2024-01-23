import { css, cx } from "@emotion/css"
import { forsize, flex } from "@mixins";

export const nav = ({menu}) => cx(
  forsize({
    "tablet-portrait": cx(
      flex({
        direction: "column",
        gap: 25
      }),
      css`
        width: calc(100% + 20px);
        padding: 42px 20px;
        background-color: #FFFFFF;
        position: absolute;
        left: -10px;
        top: ${menu ? "-18%" : "-600%"};
        transition: all 0.7s ease-in-out;
        z-index: 99;
      `
    )
  })
)