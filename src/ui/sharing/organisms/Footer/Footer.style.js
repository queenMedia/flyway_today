import { css, cx } from "@emotion/css"
import { content, flex, font } from "@mixins";
import * as responsive from "./Footer.style.responsive"

export const footer = cx(
    flex({}),
    css`
        width: 100%;
        background: var(--gray-100, #F3F4F6);
    `
)

export const container = cx(
    flex({
        direction: "column",
    }),
    content({
        width: "1280px"
    }),
    css`
      padding: 80px 0;
    `, responsive.container
)

export const top_footer = cx(
    flex({
        justify: "space-between",
				align: "flex-start",
    }),
    css`
        width: 100%;
				gap: 30px;
				border-bottom: 1px solid #D1D5DB;
				padding-bottom: 25px;
    `, responsive.top_footer
)


export const contact_container = (item) => cx(
    flex({
      align: "flex-start",
			justify: "flex-start",
			direction: "column",
    }),
    css`
			width: 100%;
			max-width: 280px;
			min-width: 150px;
			min-height: 100%;
			grid-area: ${item};
    `, responsive.contact_container
)

export const text_container = cx(
    flex({}),
    css`
        width: fit-content;
				gap: 10px;
    `
)


export const title = cx(
    css`
        color: #22252E;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px; /* 163.78% */
        letter-spacing: -0.356px;
    `, responsive.title
)

export const text = cx(
    css`
        color: #A3A4A7;
        font-size: 14px;
        font-style: normal;
				text-align: left !important; 
        font-weight: 500;
        line-height: normal;
				margin-left: 35px;
    `, responsive.text
)

export const text_bottom = cx(
    css`
        color: #A3A4A7;
        font-size: 14px;
        font-style: normal;
				text-align: left !important; 
        font-weight: 500;
        line-height: normal;
				margin-top: 25px
    `, responsive.text

)

export const logo = cx(
	css`
		width: 71px;
		min-width: 60px;
		height: auto;
        grid-area: item1;

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