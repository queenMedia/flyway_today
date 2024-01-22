import { css, cx } from "@emotion/css"
import { font } from "@mixins";
import * as responsive from "./ErrorLabel.style.responsive"

export const error = ({ visible }) => cx(
  font({ size: 14 }),
  css`
    color: var(--text-error);
    ${visible ? `opacity: 1;` : `opacity: 0;`}
  `
);