import { css, cx } from "@emotion/css"
import { content, font } from "@mixins";
import * as responsive from "./DropdownTitle.style.responsive"


export const title = ({
  size,
  weight,
  align,
  theme, 
  themes
}) => cx(
  font({
    size,
    weight,
    align
  }),
  css`
    color: ${themes[theme].title};
  `
);
