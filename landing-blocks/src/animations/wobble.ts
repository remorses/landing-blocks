
import { keyframes } from '@emotion/react';
import { Animation, Keyframe } from './types';
import { compose, rotate3d, translate3d } from './utils';

const translateAndRotate = compose(translate3d, rotate3d);

const noWobble: Keyframe = {
  transform: 'none'
};

const wobble: Animation = {
  from: noWobble,
  '15%': {
    transform: translateAndRotate(
      ['-25%', 0, 0],
      [0, 0, 1, -5]
    )
  },
  '30%': {
    transform: translateAndRotate(
      ['20%', 0, 0],
      [0, 0, 1, -5]
    )
  },
  '45%': {
    transform: translateAndRotate(
      ['-15%', 0, 0],
      [0, 0, 1, -3]
    )
  },
  '60%': {
    transform: translateAndRotate(
      ['10%', 0, 0],
      [0, 0, 1, 2]
    )
  },
  '75%': {
    transform: translateAndRotate(
      ['-5%', 0, 0],
      [0, 0, 1, -1]
    )
  },
  to: noWobble
};

export default keyframes`${wobble}`
