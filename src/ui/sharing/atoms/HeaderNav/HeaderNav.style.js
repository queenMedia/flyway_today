import { css, cx } from "@emotion/css"
import { font, flex } from "@mixins";
import * as responsive from "./HeaderNav.style.responsive"

export const nav = ({menu}) => cx(
  flex({
    justify: 'space-between',
    gap: 40,
    gapMin: 20
  }), 
  css`
    margin: 0;
    &:hover {
      cursor: pointer;
    }
  `, responsive.nav({menu})
);

export const link = cx(
  font({
    size: 18,
    weight: 500
  }),
  css`
    margin: 0;
    list-style: none;
  `
);
