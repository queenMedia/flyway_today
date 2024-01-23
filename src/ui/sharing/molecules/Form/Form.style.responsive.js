import { css, cx } from "@emotion/css"
import { forsize, content } from "@mixins";

export const bottom_container = cx(
  forsize({
    "tablet-landscape": css`
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    `
  })
);

export const payments = cx(
  forsize({
    "tablet-landscape": css`
      width: 100%;
      justify-content: center;
    `
  })
)