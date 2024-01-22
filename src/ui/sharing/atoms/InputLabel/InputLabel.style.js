import { css, cx } from "@emotion/css"
import { content, flex, font } from "@mixins";
import * as responsive from "./InputLabel.style.responsive"

export const label = ({
	label_color,
	label_size
}) => cx(
	font({
		size: label_size,
		weight: 700
	}),
	css`
		color: ${label_color};
	`
);