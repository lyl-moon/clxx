import { css, keyframes } from "@emotion/core";
import { vw } from "../cssUtil";

export const barNum = 12;

export const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);
}
`;

export const style: any = {
  container(barColor: string = "#000") {
    return css`
      width: ${vw(30)};
      height: ${vw(30)};
      position: relative;
      animation: ${rotate} 800ms steps(${barNum}) infinite;
      span {
        position: absolute;
        top: 0;
        height: 100%;
        box-sizing: border-box;
        width: ${vw(2)};
        margin-left: ${vw(-1)};
        height: 100%;
        left: 50%;
        &::after {
          display: block;
          content: "";
          background-color: ${barColor};
          border-radius: ${vw(1)};
          height: ${vw(8)};
          transform: scaleX(0.85);
        }
      }

      @media screen and (min-width: 576px) {
        width: 30px;
        height: 30px;
        span {
          width: 2px;
          margin-left: -1px;
          &::after {
            border-radius: 1px;
            height: 8px;
          }
        }
      }
    `;
  }
};

for (let i = 0; i < barNum; i++) {
  style[`bar-${i}`] = css`
    transform: rotate(${(360 * i) / barNum}deg);
    opacity: ${1 - i / barNum};
  `;
}