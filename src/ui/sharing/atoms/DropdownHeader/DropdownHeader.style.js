import { css, cx } from "@emotion/css"
import { content, flex, handlePaddings } from "@mixins";
import * as responsive from "./DropdownHeader.style.responsive"

export const dropdownHeader = ({
  theme,
  justify,
  themes
}) => cx(
  flex({
    justify: justify,
    gap: "10px"
  }),
  handlePaddings({
    maxX: 20,
    maxY: 10,
  }),
  css`
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    background-color: ${themes[theme].header};
    border: 2px solid ${themes[theme].border};
    position: relative;
    &:hover {
      cursor: pointer;
    }
  `
);