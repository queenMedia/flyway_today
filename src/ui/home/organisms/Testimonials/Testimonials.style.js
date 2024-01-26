import { css, cx } from "@emotion/css"
import { content, flex, font } from "@mixins";
import * as responsive from "./Testimonials.style.responsive"

export const section = cx(
    flex({}),
    css`
        width: 100%;
        background: linear-gradient(180deg, rgba(16, 112, 255, 0.06) 0%, rgba(16, 112, 255, 0.00) 100%);
    `
)

export const container = cx(
    flex({
        direction: "column",
        gap: 50
    }),
    content({
        width: "1280px"
    }),
    css`
        padding: 120px 0px;
    `, responsive.container
)

export const title = cx(
    font({
        size: 50,
        weight: 600,
        type: "xxl"
    }),
    css`
        color: #010E52;
    `
)

export const cards_container = cx(
    flex({}),
    css`
        width: 100%;
    `, responsive.cards_container
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