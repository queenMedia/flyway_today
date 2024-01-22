import { css, cx } from "@emotion/css"
import { forsize, content } from "@mixins";

export const form = cx(
  forsize({
    "desktop-big": cx(
      content({
        width: "379px"
      }),
      css`
        gap: 15px;
        padding: 19px 21.55px;
      `
    ),
    "tablet-portrait": css`
      width: 100%;
      max-width: none;
    `
  })
)