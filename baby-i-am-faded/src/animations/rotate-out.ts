
import { rotate3d } from './utils';
import  { Animation } from './types';
import  { keyframes } from '@emotion/core';

const rotateOut: Animation = {
  from: {
    transformOrigin: 'center',
    opacity: 1
  },
  to: {
    transformOrigin: 'center',
    transform: rotate3d(0, 0, 1, 200),
    opacity: 0
  }
};

export default keyframes`${rotateOut}`
