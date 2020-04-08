
import { compose, translate3d, rotate3d } from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const translateAndRotate = compose(translate3d, rotate3d);

const rollOut: Animation = {
  from: {
    opacity: 1
  },
  to: {
    opacity: 0,
    transform: translateAndRotate(
      ['100%', 0, 0],
      [0, 0, 1, 120]
    )
  }
};

export default keyframes`${rollOut}`
