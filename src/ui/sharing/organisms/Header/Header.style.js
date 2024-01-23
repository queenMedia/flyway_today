import { css, cx } from "@emotion/css"
import { content, flex, handleDimensions } from "@mixins";
import * as responsive from "./Header.style.responsive"

export const header = cx(
  css`
    background-color: #FFFFFF;
  `
);

export const container = cx(
  flex({
    justify: 'space-between',
  }), 
  content({
    width: '1280px'
  }),
  css`
    position: relative;
  `
);

export const logo = cx(
  handleDimensions({
    max: 77,
    min: 50
  }),
  css`
    width: 77px;
    height: auto;
  `
);
