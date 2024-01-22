import { css, cx } from "@emotion/css"
import { content, flex } from "@mixins";
import * as responsive from "./MenuIcon.style.responsive"

// height 75% del width
export const bar = cx(
  css`
    display: block;
    position: relative;
    cursor: pointer;
    width: 200px;
    height: 150px;
    
  `
);

export const input = cx(
  css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    appearance: none;
    &:hover{
      cursor: pointer;
    }
  `
);

export const span = cx(
  css`
    position: absolute;
    width: 100%;
    height: 15%;
    background: #000000;
    border-radius: 100px;
    display: inline-block;
    transition: 0.3s ease;
    left: 0;
  `
);

export const top = (menu) => cx(
  span,
  css`
    top: 0;
    ${menu && `
      transform: rotate(45deg);
      transform-origin: top left;
      width: 100%;
      left: 9%;
      top: -4%;
    `}
  `
);

export const middle = (menu) => cx(
  span,
  css`
    top: 50%;
    transform: translateY(-50%);
     ${menu && `
        transform: translateX(-100%);
        opacity: 0;
     `}
  `
);

export const bottom = (menu) => cx(
  span,
  css`
    bottom: 0;
     ${menu && `
      transform: rotate(-45deg);
      transform-origin: top left;
      width: 100%;
      bottom: -3%;
      box-shadow: 0 0 10px #495057;
     `}
  `
);
