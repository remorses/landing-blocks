
import { compose, translate3d, skewX } from './utils';
import  { Keyframe, Animation } from './types';
import  { keyframes } from '@emotion/core';


const translateAndSkew = compose(
  translate3d,
  skewX
);

const easeIn: Keyframe = {
  animationTimingFunction: 'ease-out'
};

const lightSpeedOut: Animation = {
  from: {
    ...easeIn,
    opacity: 1
  },
  to: {
    ...easeIn,
    transform: translateAndSkew(['100%', 0, 0], 30),
    opacity: 0
  }
};

export default keyframes`${lightSpeedOut}`
