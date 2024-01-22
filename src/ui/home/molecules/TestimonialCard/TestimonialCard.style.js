import { css, cx } from "@emotion/css"
import { flex, font } from "@mixins";
import * as responsive from "./TestimonialCard.style.responsive"

export const card = cx(
    flex({
        direction: "column",
        align: "flex-start",
        gap: 30
    }),
    css`
        width: 100%;
        padding: 0 60px 20px 50px; 
        border-left: 3px solid #1070FF;
    `, responsive.card
)

export const bottom_container = cx(
    flex({
        justify: "flex-start",
        gap: 30
    }),
    css`
        width: 100%;
    `
)

export const text_container = cx(
    flex({
        justify: "flex-start",
        align: "flex-start",
        direction: "column"
    }),
    css`
        width: 100%;
    `
)

export const name = cx(
    font({
        size: 30,
        weight: 600,
    }),
    css`
        color: #000;
    `
)

export const job = cx(
    font({
        size: 20,
        weight: 400,
        type: "s"
    })
)

export const img = cx(
    css`
        width: 130px;
        height: 130px;
        border-radius: 130px;
    `, responsive.img
)