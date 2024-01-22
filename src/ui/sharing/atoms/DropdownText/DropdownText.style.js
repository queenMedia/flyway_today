import { css, cx } from "@emotion/css"
import { font } from "@mixins";
import * as responsive from "./DropdownText.style.responsive"


export const paragraph = ({
  size,
  weight,
  theme, 
  align,
  themes
}) => cx(
  font({
    size,
    weight,
    align
  }),
  css`
    margin-top: 10px;
    margin-bottom: 10px;
    color: ${themes[theme].text};
    text-align: left;
  `
);