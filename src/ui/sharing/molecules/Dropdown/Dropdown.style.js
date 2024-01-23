import { css, cx } from "@emotion/css"
import { flex } from "@mixins";
import * as responsive from "./Dropdown.style.responsive"

export const dropdown = cx(
  flex({
    direction: 'column',
  }),
  css`
    width: 100%;
    overflow: hidden;
  `
);

export const themes = {
  "dark" : {
    header: "#000000",
    border: "#000000",
    title: "#FFFFFF",
    text: "#000000",
    arrow: "#FFFFFF",
    wrapper_bg: "#f3f3f3",
    wrapper_border: "#bcbcbc"
  },
  "light": {
    header: "transparent",
    border: "#transparent",
    title: "#1070FF",
    text: "#6B7280",
    arrow: "#000000",
    wrapper_bg: "transparent",
    wrapper_border: "white"
  }
}