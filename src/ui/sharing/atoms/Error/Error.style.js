import { css, cx, keyframes } from "@emotion/css"
import { content, flex } from "@mixins";
import * as responsive from "./Error.style.responsive"

const successAnim = keyframes`
    0% {
      transform: scale(0);
    }
    30% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
`;

const circleAnim = keyframes`
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1.1);
    }
`;

export const container= css`
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const circle = css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 1;
  position: relative;
  background: white;
  transform: scale(1);
  animation: ${successAnim} 700ms ease;
`;

export const circle_border = css`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  z-index: 0;
  position: absolute;
  transform: scale(1.1);
  animation: ${circleAnim} 400ms ease;
  background: #f86;
`;

export const error = css`
   &::before{
    content: "";
    display: block;
    height: 4px;
    background: #f86;
    position: absolute;
    width: 40px;
    top: 48%;
    left: 16%;
    transform: rotateZ(50deg);
   }
    &::after {
        content: "";
        display: block;
        height: 4px;
        background: #f86;
        position: absolute;
        width: 40px;
        top: 48%;
        left: 16%;
        transform: rotateZ(-50deg);
    }

`;