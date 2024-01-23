import { css, cx } from "@emotion/css"
import Bg from "@images/hero/bg_responsive.gif"

import { forsize, flex } from "@mixins";

export const section = cx(
  forsize({
    "tablet-small": cx(
      css`
      &::after{
        background: rgb(0, 0, 0, 0.5);
      }
      &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(${Bg}) no-repeat top center/100% auto ;
        z-index: 0;
      }
      `
    ),
    "phone-big": cx(
      css`
      &::after{
        background: rgb(0, 0, 0, 0.5);
      }
      `
    ),
  })
)

export const container = cx(
  forsize({
    "tablet-portrait": cx(
      flex({
        direction: "column",
        gap: 30
      })
    ),
    "tablet-small": cx(
      css`
      `
    ),
  })
)

export const white = cx(
  forsize({
    "phone-xbig": cx(
      css`
        display: block;
        position: absolute;
        width: 100%;
        min-height: 20%;
        bottom: 0;
        left: 0;
        z-index: 2;
        background-color: #FFFFFF;
      `
    ),
    "phone-big": cx(
      css`
        min-height: 40%;
      `
    ),
    "phone-mid": cx(
      css`
        min-height: 45%;
      `
    ),
  })
)

export const title = cx(
  forsize({
    "phone-xbig": cx(
      css`
        display: inline-block;
        text-align: left;
      `
    ),
  })
)