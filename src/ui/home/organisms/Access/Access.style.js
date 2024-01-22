import { css, cx } from "@emotion/css"
import { content, flex, font } from "@mixins";
import * as responsive from "./Access.style.responsive"
import Bg from "@images/access/bg.webp"

export const section = cx(
    flex({}),
    css`
        width: 100%;
        padding: 60px;
    `, responsive.section
)

export const container = cx(
    flex({
        gap: 60
    }),
    content({
        width: "1280px"
    }),
    css`
        background: url(${Bg}) no-repeat center/cover;
        border-radius: 30px;
        padding: 80px;
    `, responsive.container
)

export const left_container = cx(
    flex({
        align: "flex-start"
    }),
    css`
        width: 100%;
    `
)

export const right_container = cx(
    flex({
        align: "flex-start",
        direction: "column",
        gap: 20
    }),
    css`
        width: 100%;
    `
)

export const title = cx(
    font({
        size: 50,
        weight: 600,
        type: "xxl"
    }),
    css`
        color: #FFF;
        text-align: left;
    `
)

export const subtitle = cx(
    font({
        size: 30,
        weight: 500,
        type: "xl"
    }),
    css`
        color: #FFF;
        text-align: left;
    `
)

export const text = cx(
    font({
        size: 20,
        weight: 500,
        type: "xl"
    }),
    css`
        color: #FFF;
        text-align: left;
    `
)

export const button = cx(
    font({
      size: 24,
      weight: 600,
    }),
    css`
			width: 100%;
			max-width: 190px;
			min-width: 150px;
			height: auto;
      padding: 20px 15px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 65px;
      background: #1070FF;
      color: #FFF;
			text-align: center;
			font-size: 20px;
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			grid-area: item4;
    `, responsive.button
  )