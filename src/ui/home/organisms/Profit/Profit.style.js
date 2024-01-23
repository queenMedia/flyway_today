import { css, cx } from "@emotion/css"
import { content, flex, font } from "@mixins";
import * as responsive from "./Profit.style.responsive"

export const section = cx(
    flex({}),
    css`
        width: 100%;
    `
)

export const container = cx(
    flex({
        align: "flex-start",
        gap: 60
    }),
    content({
        width: "1280px"
    }),
    css``, responsive.container
)

export const left_container = cx(
    flex({
        direction: "column",
        align: "flex-start",
        gap: 20
    }),
    css`
        width: 100%;
    `
)

export const right_container = cx(
    flex({
        direction: "column",
        align: "flex-start",
        justify: "flex-start",
        gap: 20
    }),
    css`
        width: 100%;
    `
)

export const icon_text = cx(
    flex({
        justify: "flex-start",
        gap: 25
    }),
    css`
        width: 100%;
    `
)

export const title = cx(
    font({
        size: 50,
        type: "xxl",
        weight: 600
    }),
    css`
        color: #010E52;
        text-align: left;
    `
)

export const subtitle = cx(
    font({
        size: 26,
        type: "xl",
        weight: 600
    }),
    css`
        color: #000;
        text-align: left;
    `
)

export const text = cx(
    font({
        size: 16,
        weight: 400
    }),
    css`
        color: #000;
        text-align: left;
    `
)

export const img = cx(
    css`
        width: 40px;
        height: 40px;
    `, responsive.img
)