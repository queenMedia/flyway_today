import { cx, css } from "@emotion/css"
import { flex, font, grid, handleHeight } from "@mixins"
import * as responsive from "./Input.style.responsive"

export const container = cx(
	flex({
		direction: "column",
		gap: 5,
		align: "flex-start"
	}),
	css`
		width: 100%;
	`
);

export const input_container = ({
	input_border,
	input_height,
	input_height_min,
	input_rounded,
	input_shadow,
	input_inset,
	type
}) => cx(
	grid({
		columns: "auto 1fr",
	}),
	handleHeight({
		max: input_height,
		min: input_height_min,
		rule: "min"
	}),
	handleHeight({
		max: input_height,
		min: input_height_min,
		rule: "max"
	}),
	css`
		overflow: hidden;
		align-items: stretch;
		justify-content: flex-start;
		min-height: ${input_height}px;
		border-radius: ${input_rounded}px;
		border: 1px solid  ${input_border};
		${input_shadow && !input_inset ? 
		`box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5)` : ``};
	`, responsive.input_container
);

export const code = ({
	code_backgound,
	input_fontSize,
	code_color
}) => cx(
	flex({
		gap: 5
	}),
	css`
		padding: 0 10px;
		background: ${code_backgound};
		& > p {
			${font({
				size: input_fontSize
			})}
			color: ${code_color};
		}
	`
)

export const input = ({
  input_color,
	input_background,
	input_padding,
	input_fontSize,
	input_inset,
	input_shadow,
	placeholder_color,
	placeholder_fontSize
}) =>  cx(
	font({
		size: input_fontSize,
		align: "left"
	}),
	css`
		padding: ${input_padding};
		border: none;
		background: ${input_background};
		color: ${input_color};
		${input_shadow && input_inset  ? 
		 `box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.5)` : ``};
		&::placeholder{
			color: ${placeholder_color};
			opacity: 0.7;
			${font({
				size: placeholder_fontSize,
				align: "left"
			})}
		}
	`,
);
