import { css, cx } from "@emotion/css"
import { content, flex, font } from "@mixins";
import * as responsive from "./Form.style.responsive"

export const form = ({
  background,
  border,
  box_shadow,
  backdrop_filter,
  padding,
  gap
}) => cx(
  content({
    width: "530px"
  }),
  flex({
    direction: "column",
    gap
  }),
  css`
    border: ${border};
    box-shadow: ${box_shadow};
    backdrop-filter: ${backdrop_filter};
    background: ${background};
    padding: ${padding};
    z-index: 3;
  `, responsive.form
);

export const button = ({tertiary, code_color}) => cx(
  flex({}),
  font({
    size: 32,
    weight: 'bold'
  }),
  css`
    color: ${code_color};
    background: ${tertiary};
    border-radius: 20px;
    width: 80%;
    padding: 15px;
  `
);