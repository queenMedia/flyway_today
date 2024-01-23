import { css, cx } from "@emotion/css"
import { content, flex, handleHeight } from "@mixins";
import * as responsive from "./TravelCard.style.responsive"

export const card = ({bg}) => cx(
  flex({
    direction: "column",
    justfy: "flex-end"
  }),
  css`
    padding: 50px 20px;
    min-height: 485px;
    border-radius: 30px;
    background: url(${bg}) no-repeat center/cover;
    position: relative;
    overflow: hidden;
    &::before{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: rbg(0, 0, 0, 0.5);
      z-index: 0;
    }
  `
)