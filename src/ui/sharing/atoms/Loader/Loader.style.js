import { css, cx, keyframes } from "@emotion/css"
import { content, flex } from "@mixins";
import * as responsive from "./Loader.style.responsive"

export const animateC = keyframes`
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
`;

export const container = cx(
    flex({}),
    css`
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2147483647;
        background: rgba(0, 0 ,0, 0.8);
    `
);
export const loader = cx(
    flex({}),
    css`
        width: 150px;
        height: 150px;
        background: transparent;
        border: px solid #3c3c3c;
        border-radius: 50%;
        text-align: center;
        line-height: 111px;
        font-family: sans-serif;
        font-size: 15px;
        color: #fff000;
        letter-spacing: 3px;
        text-transform: uppercase;
        text-shadow: 0 0 20px #fff000;
        box-shadow: 0 0 20px rgba(0,0,0,.5);
        position: relative;
        &::before{
            content: '';
            position: absolute;
            top: -3px;
            left: -3px;
            width: 110%;
            height: 110%;
            border: 3px solid transparent;
            border-top: 5px solid #fff000;
            border-right: 5px solid #fff000;
            border-radius: 50%;
            animation: ${animateC} 2s linear infinite;
        }
    `
);
