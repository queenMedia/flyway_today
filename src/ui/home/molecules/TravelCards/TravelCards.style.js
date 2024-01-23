import { css, cx } from "@emotion/css"
import { content, flex } from "@mixins";
import * as responsive from "./TravelCards.style.responsive"

export const container = cx(
  flex({
    gap: 35
  }),
  css`
    widrh: 100%;
  `
)