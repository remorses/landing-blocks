
import { scale3d } from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const bounceOut: Animation = {
  '20%': {
    transform: scale3d(0.9, 0.9, 0.9)
  },
  '50%': {
    transform: scale3d(1.1, 1.1, 1.1)
  },
  '55%': {
    transform: scale3d(1.1, 1.1, 1.1)
  },
  to: {
    opacity: 0,
    transform: scale3d(0.3, 0.3, 0.3)
  }
};

export default keyframes`${bounceOut}`
