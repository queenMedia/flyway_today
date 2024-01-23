import { css, cx } from "@emotion/css"
import { content, flex, font, handlePaddings } from "@mixins";
import * as responsive from "./Form.style.responsive"

export const form = cx(
  content({
    width: "605px"
  }),
  flex({
    direction: "column",
    align: "flex-start",
    gap: 20
  }),
  handlePaddings({
    maxX: 40,
    minX: 20,
    maxY: 40,
    minY: 40
  }),
  css`
    z-index: 3;
    background-color: #FFFFFF;
    border-radius: 20px;
  `, responsive.form
);

export const button = cx(
  flex({}),
  font({
    size: 20,
    weight: 600
  }),
  css`
    margin-bottom: 10px;
    color: #FFF;
    background: #1070FF;
    border-radius: 20px;
    width: 100%;
    padding: 19px 24px;
  `
);

export const title = cx(
  font({
    size: 24,
    weight: 500
  }),
  css`
    margin-bottom: 10px;
  `
);

export const bottom_text = cx(
  font({
    size: 16,
  }),
  css`
    color: #8E8E99;
  `
);

export const bottom_container = cx(
  flex({
    justify: "space-between",
  }),
  css`
    width: 100%;
  `, responsive.bottom_container
);

export const payments = cx(
  flex({
    justify: "space-between",
    gap: 17
  }),
  css`
  `, responsive.payments
);