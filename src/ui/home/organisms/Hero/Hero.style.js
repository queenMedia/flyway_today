import { css, cx } from "@emotion/css"
import Bg from "@images/hero/bg.gif"
import { 
  content, 
  flex, 
  handlePaddings, 
  grid,
  font
} from "@mixins";
import * as responsive from "./Hero.style.responsive"

export const section = cx(
  handlePaddings({
    maxX: 10,
    maxY: 120,
    minY: 80
  }),
  css`
    position: relative;
    &::before{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: url(${Bg}) no-repeat center/cover;
      z-index: 0;
    }
    &::after{
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(16, 112, 255, 0.88) 0%, rgba(16, 112, 255, 0.25) 100%);
      z-index: 1;
    }
  `, responsive.section
);


export const container = cx(
  content({
    width: "1280px"
  }),
  grid({
    columns: "repeat(2, 1fr)",
    colGap: "70px",
    gapMinCol: 30
  }),
  css`
    place-items: center;
  `, responsive.container
)

export const content_container = cx(
  flex({
    direction: "column",
    align: "flex-start",
    gap: 24,
    gapMin: 15
  }),
  css`
    z-index: 3;
  `
)


export const white = cx(
  css`
    display: none;
  `, responsive.white
)

export const title = cx(
  flex({
    direction: "column",
    align: "flex-start",
  }),
  font({
    size: 50,
    weight: 600,
    type: "xxxxl"
  }),
  css`
    color: #FFF;
  `, responsive.title
)

export const subtitle = cx(
  font({
    size: 20,
    weight: 500
  }),
  css`
    color: #FFF;
  `
)