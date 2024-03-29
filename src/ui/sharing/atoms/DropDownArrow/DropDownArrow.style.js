import { css, cx } from "@emotion/css"
import { content, flex } from "@mixins";
import * as responsive from "./DropDownArrow.style.responsive"

export const icon = ({
  themes, 
  theme,
  active
}) => cx(
  css`
    width: 20px;
    height: 20px;
    color: ${themes[theme].arrow};
    transition: all 0.3s ease-in-out;
    transform: rotate(${active ? '0deg' : '180deg'});
  `
)