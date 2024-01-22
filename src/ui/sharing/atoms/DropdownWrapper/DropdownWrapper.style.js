import { css, cx } from "@emotion/css"
import { content, flex } from "@mixins";
import * as responsive from "./DropdownWrapper.style.responsive"

export const dropdown_wrapper = ({
  theme,
  themes,
  align,
  justify,
  active,
  height,
  refWrapper
}) => cx(
  flex({
    direction: 'column',
    align,
    justify
  }),
  css`
    width: 100%;
    padding-inline: 10px;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    ${active ? `
      border: 1px solid ${themes[theme].wrapper_border};
      background-color: ${themes[theme].wrapper_bg};
      height: ${height}px;` : `
      height: 0px;
      border: 1px solid transparent;
      background-color: transparent;
    `}
`);