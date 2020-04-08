
import { scale3d } from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const zoomOut: Animation = {
  from: {
    opacity: 1
  },
  '50%': {
    opacity: 0,
    transform: scale3d(0.3, 0.3, 0.3)
  },
  to: {
    opacity: 0
  }
};

export default keyframes`${zoomOut}`
